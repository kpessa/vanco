// @collapse

export class Profile {
  constructor(data) {
    this.dosing = ""
    this.max_dose = ""
    this.infusion_rate = ""

    for (let key in data) {
      this[key] = data[key]
    }
  }
}
