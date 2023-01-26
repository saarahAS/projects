// Task 2

// fetching information from the following link
fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur/")
// converting data from result of fetch into object 
.then(res => res.json())
// outputting data from object to the console
.then((result) => {
    console.log(`Name:\n${result.name}\n`);
    console.log(`Weight:\n${result.weight}\n`);
    // prettier output/readability - learnt from: https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript
    // converted object into string for output
    console.log(`Abilities:\n${JSON.stringify(result.abilities, null, 2)}`);

}),
//in case fetch does not run, return error
(error) => {
    console.log(error)
}

