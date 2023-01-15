const wordArray = ["butterfly", "cat", "pigeon", "dog", "tiger", "maggot", "snake", "rabbit", "lion", "parrot"]

//function to determine if word length equals 6 letters, will return true/fasle
function is6Letters(word) {
    if (word.length === 6) {
        return true
    } else {
     return false
    }
}

//Higher-order funtion to take in array and previous function to build new array 

function myFilterFunction(wordArray, callbackFunction) {
    const resultArray = []
    for (let i = 0; i< wordArray.length; i++) {
       if (callbackFunction(wordArray[i])) {
        resultArray.push(wordArray[i])

       }
    }
   return resultArray

}

console.log(myFilterFunction(wordArray, is6Letters))

