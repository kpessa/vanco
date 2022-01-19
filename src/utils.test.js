import { cockcroftGault } from "./utils"
import { Patient } from "./utils"

test("TBW < IBW, use TBW", () => {
  let [age, weight, ibw, scr, gender] = [65, 70, 80, 0.8, 1]
  expect(cockcroftGault(age, weight, ibw, scr, gender)).toBe(91.15)
})

test("TBW / IBW >= 1.2, use AdjBW", () => {
  let [age, weight, ibw, scr, gender] = [65, 90, 70, 0.8, 1]
  expect(cockcroftGault(age, weight, ibw, scr, gender)).toBe(101.56)
})

test("TBW / IBW < 1.2, use AdjBW", () => {
  let [age, weight, ibw, scr, gender] = [65, 90, 80, 0.8, 1]
  expect(cockcroftGault(age, weight, ibw, scr, gender)).toBe(104.17)
})

test("Patient constructor", () => {
  let kurt = new Patient({ first_name: "Kurt", age: 36, weight: 90, ibw: 70 })
  console.log({ ...kurt })
})

test("Patient getter: tbw_ibw", () => {
  let kurt = new Patient({ first_name: "Kurt", age: 36, weight: 95.5, ibw: 80 })
  expect(kurt.tbw_ibw).toBe(1.19)
})

test("Population AUC: Ceoi", () => {
  let kurt = new Patient({
    first_name: "Kurt",
    age: 36,
    weight: 95.5,
    ibw: 80,
    scr: 0.8,
    gender: 1,
    ke_eqn: "Matzke",
    vd_kg: 0.65,
  })
  console.log(kurt.ke)
  console.log(kurt.popCeoi(1000, 12))
  console.log(kurt.popCmax(1000, 12))
  console.log(kurt.popCmin(1000, 12))
  console.log(kurt.popAUC(1000, 12))
  console.log(kurt.popAUCRounded(1000, 12))
})
