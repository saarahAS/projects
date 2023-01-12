// Task 2

// request user to input litres of water used
// convert to kl
// create variables for each step (step1, step2, step3, step4)

// create if statement:

// 1. if waterUsed 0 <= 6kl then R15.73

// 2. if waterUsed > 6 <= 10.5kl then R22.38
// calculate first 6kl at step1 rate
// remainder at step2 rate

// 3. if waterUsed > 10.5 <= 35kl then R31.77
// calculate first 6kl at step1 rate
// 4.5kl at step2 rate
// remainder at step3 rate

// 4. if waterUsed > 35kl then R69.79
// calculate first 6kl at step1 rate
// 4.5kl at step2 rate
// 24.5 at step3 rate
// remainder at step4 rate

// output what they need to pay (in Rands - R) (round to 2decimal place)

let waterUsedLitres = prompt("Please enter number of litres of water used")
let waterUsed = waterUsedLitres / 1000
let step1 = 15.73
let step2 = 22.38
let step3 = 31.77
let step4 = 69.76

if (waterUsed == 0 || waterUsed <= 6) {
    let payment1 = (waterUsed * step1).toFixed(2);
    console.log(`Total to pay: R${payment1}`);

} else if (waterUsed > 6 && waterUsed <= 10.5) {
    let payment2 = ((step1 * 6) + ((waterUsed - 6) * step2)).toFixed(2);
    console.log(`Total to pay: R${payment2}`);

} else if (waterUsed > 10.5 && waterUsed <= 35) {
    let payment3 = ((step1 * 6) + (step2 * 4.5) + ((waterUsed - 10.5) * step3)).toFixed(2);
    console.log(`Total to pay: R${payment3}`);

} else if (waterUsed > 35) {
    let payment4 = ((step1 * 6) + (step2 * 4.5) + (step3 * 24.5) + ((waterUsed - 35) * step4)).toFixed(2);
    console.log(`Total to pay: R${payment4}`);
}