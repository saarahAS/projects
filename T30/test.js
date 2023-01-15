function createMultiplierFunction(multiplier) {
    return function multiplyBy(number) {
        console.log(`${multiplier} * ${number} = ${multiplier*number}`)
    }
    }
    
    const multiplyBy10 = createMultiplierFunction(10)
    
    for (let i = 0; i < 10; i++) {
        multiplyBy10(i)
    }
    
    const multiplyBy20 = createMultiplierFunction(20)
    
    for (let i = 0; i < 10; i++) {
        multiplyBy20(i)
    }