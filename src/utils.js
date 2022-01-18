export function cockcroftGault(age, tbw, ibw, scr, gender) {
  if (age && tbw && ibw && scr && (gender === 0 || gender === 1)) {
    let abw
    if (tbw && ibw) abw = ibw + 0.4 * (tbw - ibw)

    let wtUsed = tbw / ibw >= 1.2 ? abw : tbw < ibw ? tbw : ibw

    let cockcroft = (((140 - age) * wtUsed) / scr / 72) * [0.85, 1][gender]
    return +cockcroft.toFixed(2)
  }

  return ""
}

export class Patient {
  constructor(data) {
    for (let key in data) {
      this[key] = data[key]
    }
  }

  get name() {
    if (this.first_name && this.last_name) {
      return `${this.last_name}, ${this.first_name}`
    } else if (this.last_name) return this.last_name
    else if (this.first_name) return this.first_name
    return ""
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

  get clvanco() {
    if (this.ke_eqn && this.crcl) {
      if (this.ke_eqn === "Matzke") {
        return +((this.crcl * 0.689 + 3.66) * 0.06).toFixed(1)
      } else if (this.ke_eqn === "Crass") {
        if (this.age && this.scr && this.genderToChar && this.tbw) {
          return +(
            9.656 -
            0.078 * this.age -
            2.009 * this.scr +
            1.09 * this.gender +
            0.04 * this.tbw ** 0.75
          ).toFixed(1)
        }
        return ""
      }
    }
    return ""
  }

  get ke() {
    if (this.clvanco && this.vd) return +(this.clvanco / this.vd).toFixed(4)
    return ""
  }

  get genderToChar() {
    if (this.gender === 0 || this.gender === 1) {
      return ["F", "M"][this.gender]
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
  get tbw() {
    return this.weight ? this.weight : ""
  }

  get wtInLbs() {
    return this.weight ? Math.round(this.weight * 2.2) : ""
  }

  get adjBW() {
    if (this.tbw && this.ibw) return this.ibw + 0.4 * (this.tbw - this.ibw)
    return ""
  }

  get wtUsed() {
    if (this.tbw && this.ibw)
      return this.tbw_ibw >= 1.2
        ? this.adjBW
        : this.tbw < this.ibw
        ? this.tbw
        : this.ibw
    return ""
  }

  get calculated_crcl() {
    if (
      this.age &&
      this.tbw &&
      this.ibw &&
      this.scr &&
      (this.gender === 0 || this.gender === 1)
    ) {
      let cockcroft =
        (((140 - this.age) * this.wtUsed) / this.scr / 72) *
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

  get bmi() {
    if (this.height && this.weight) {
      return +(this.weight / (this.height / 100) ** 2).toFixed(2)
    }
    return ""
  }

  get tbw_ibw() {
    if (this.weight && this.ibw) {
      return +(this.weight / this.ibw).toFixed(2)
    }
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
