// Task 1

// fetching affirmation from the following link
fetch("https://www.affirmations.dev/")
// converting data from result of fetch into object 
.then(res => res.json())
// outputting data from object to the console
.then((result) => {
    console.log(result);
}),
//in case fetch does not run, return error
(error) => {
    console.log(error)
}

