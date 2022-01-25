import { integerOrRoundNumber } from "../utils"

export class Patient {
  // @collapse
  constructor(data) {
    // PtInfo
    this.mrn = ""
    this.last_name = ""
    this.first_name = ""

    this.provider = ""
    this.indication = ""

    this.age = ""
    this.height = ""
    this.weight = ""
    this.gender = ""
    // KidneyFunction
    this.scr_level = ""
    // Load Dose
    this.dosing = ""
    this.max_dose = ""
    this.lddose = ""
    this.ldinf = ""

    this.manual_crcl = ""
    this.vd_kg = ""
    this.ke_eqn = ""

    for (let key in data) {
      this[key] = data[key]
    }
  }

  // Identifier Methods
  get name() {
    if (this.first_name && this.last_name) {
      return `${this.last_name}, ${this.first_name}`
    } else if (this.last_name) return this.last_name
    else if (this.first_name) return this.first_name
    return ""
  }
  // Characteristics Methods
  get genderToChar() {
    if (this.gender === 0 || this.gender === 1) {
      return ["F", "M"][this.gender]
    }
    return ""
  }
  // Height Methods
  get heightToInches() {
    if (this.height) {
      return +this.height / 2.54
    }
    return ""
  }
  get heightToFeetInches() {
    if (this.height) {
      let inches = this.height / 2.54
      let feet = Math.floor(inches / 12)
      let inchesRemainder = Math.round(inches % 12)
      return `${feet}'${inchesRemainder}"`
    }
    return ""
  }
  // Weight Methods
  get wtInLbs() {
    return this.weight ? Math.round(this.weight * 2.2) : ""
  }
  get tbw() {
    return this.weight ? +this.weight : ""
  }
  get ibw() {
    if (this.height && this.genderToChar) {
      let ans
      if (this.genderToChar === "F") ans = 50 + 2.3 * (this.heightToInches - 60)
      if (this.genderToChar === "M")
        ans = 45.5 + 2.3 * (this.heightToInches - 60)
      return integerOrRoundNumber(+ans)
    }
  }
  get tbw_ibw() {
    if (this.tbw && this.ibw) {
      return +(this.tbw / this.ibw).toFixed(2)
    }
    return ""
  }
  get adjBW() {
    if (this.tbw && this.ibw)
      return integerOrRoundNumber(this.ibw + 0.4 * (this.tbw - this.ibw))
    return ""
  }
  get bmi() {
    if (this.height && this.weight) {
      return integerOrRoundNumber(this.weight / (this.height / 100) ** 2, 1)
    }
    return ""
  }
  get wtUsed() {
    if (this.tbw && !this.ibw) {
      return this.tbw
    }
    if (this.tbw && this.ibw)
      return this.tbw_ibw >= 1.2
        ? this.adjBW
        : this.tbw < this.ibw
        ? this.tbw
        : this.ibw
    return ""
  }
  // Kidney Function Methods
  get scr() {
    if (this.scr_adjusted) return +this.scr_adjusted
    if (this.scr_level) return +this.scr_level
    return ""
  }
  get calculated_crcl() {
    if (this.age && this.tbw && this.scr && this.genderToChar) {
      let cockcroft =
        (((140 - this.age) * this.wtUsed) / +this.scr / 72) *
        [0.85, 1][this.gender]
      return +cockcroft.toFixed(2)
    }
    return ""
  }
  get crcl() {
    return this.manual_crcl
      ? this.manual_crcl
      : this.calculated_crcl
      ? this.calculated_crcl
      : ""
  }
  // Load Dose Methods
  get lddose_calculated() {
    if (this.tbw && this.dosing) {
      return integerOrRoundNumber(this.tbw * this.dosing, 2)
    }
    return ""
  }
  get lddose_rounded() {
    if (this.lddose_calculated) {
      return Math.round(this.lddose_calculated / 250) * 250
    }
    return ""
  }
  // PK Methods
  popAUCRounded = function (dose, frequency) {
    if (this.ke && this.vd && dose && frequency) {
      return Math.round(this.popAUC(dose, frequency) / 10) * 10
    }
    return 0
  }
  popAUC = function (dose, frequency) {
    let infusionRate = 1000
    if (this.ke && this.vd && dose && frequency) {
      let popCeoi = this.popCeoi(dose, frequency)
      let popCmin = this.popCmin(dose, frequency)
      let AUCinf = ((popCeoi + popCmin) / 2) * (dose / infusionRate)
      let AUCeli = (popCeoi - popCmin) / this.ke
      let MIC = 1
      return ((AUCinf + AUCeli) * (24 / frequency)) / MIC
    }
    return 0
  }
  popCmax = function (dose, frequency) {
    let infusionRate = 1000
    if (this.ke && this.vd && dose && frequency)
      return (
        this.popCeoi(dose, frequency) /
        Math.exp((-this.ke * dose) / infusionRate)
      )
    return 0
  }
  popCeoi = function (dose, frequency) {
    if (this.ke && this.vd && dose && frequency)
      return dose / this.vd / (1 - Math.exp(-this.ke * frequency))
    return 0
  }
  popTroughRounded = function (dose, frequency) {
    return Math.round(this.popTrough(dose, frequency))
  }
  popTrough = function (dose, frequency) {
    let offset = 0.5 // trough 30 min before dose
    if (this.ke && this.vd && dose && frequency) {
      return (
        this.popCmax(dose, frequency) *
        Math.exp(-this.ke * (frequency - offset))
      )
    }
    return 0
  }
  popCmin = function (dose, frequency) {
    if (this.ke && this.vd && dose && frequency) {
      return this.popCmax(dose, frequency) * Math.exp(-this.ke * frequency)
    }
    return 0
  }
  get ke_eqn_suggested() {
    if (this.bmi) {
      return this.bmi >= 30 ? "Crass" : "Matzke"
    }
    return ""
  }
  get t1_2() {
    if (this.ke) {
      return +(0.693 / this.ke).toFixed(1)
    }
    return ""
  }
  get matske() {
    return +((this.crcl * 0.689 + 3.66) * 0.06).toFixed(1)
  }
  get crass() {
    if (this.age && this.scr && this.genderToChar && this.tbw) {
      return +(
        9.656 -
        0.078 * this.age -
        2.009 * this.scr +
        1.09 * this.gender +
        0.04 * this.tbw ** 0.75
      ).toFixed(1)
    }
    return 0
  }
  get clvanco() {
    if ((this.ke_eqn || this.ke_eqn_suggested) && this.crcl) {
      if (this.ke_eqn === "Matzke") return this.matske
      else if (this.ke_eqn === "Crass") return this.crass
      else if (this.ke_eqn_suggested === "Matzke") return this.matske
      else if (this.ke_eqn_suggested === "Crass") return this.crass
    }
    return ""
  }
  get ke() {
    if (this.clvanco && this.vd) return +(this.clvanco / this.vd).toFixed(4)
    return ""
  }

  get vd_kg_suggested() {
    if (this.weight && this.height) {
      return this.bmi >= 30 ? 0.5 : 0.65
    }
    return 0.65
  }

  get vd() {
    if (this.tbw && this.vd_kg) {
      return +(this.tbw * this.vd_kg).toFixed(1)
    }
    return ""
  }
}
