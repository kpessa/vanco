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
  let kurt = new Patient({ name: "Kurt", age: 36, weight: 90, ibw: 70 })
  console.log({ ...kurt })
})

test("Patient getter: tbw_ibw", () => {
  let kurt = new Patient({ name: "Kurt", age: 36, weight: 95.5, ibw: 80 })
  expect(kurt.tbw_ibw).toBe(1.19)
})
