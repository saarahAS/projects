// a function that returns another function that multiplies any number by number1 
function createMultiplier(number1) {
    return function multiplyBy(number2) {
        //number1 taken from outer function, number2 taken from inner function
        console.log(`${number1} * ${number2} = ${number1*number2}`)
    }
}

// creating a function that multiplies any number by 10
const multiplyBy10 = createMultiplier(10)

//to loop through 0-10 and multiply each number by 10
for (i =0; i<=10; i++) {
    multiplyBy10(i)
}

//another example to multiply by 20
console.log("\nExample 2:")
const multiplyBy20 = createMultiplier(20)

//to loop through 0-10 and multiply each number by 10
for (i =0; i<=10; i++) {
    multiplyBy20(i)
}