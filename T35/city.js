// fecthing city data (population, elevation, temperature) from API

let fetch = require("isomorphic-fetch");

async function getCityDetails(cityName, countryCode) {
  // encoding function parameters into URL - learnt from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
  let url = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?countryIds=${countryCode}&namePrefix=${encodeURIComponent(
    cityName
  )}`;

  // personal key to access API
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29d65be80bmsh4ba46015651f163p10d217jsn197a527c3c46",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  //code to get city ID
  let res = await fetch(url, options);
  let result = await res.json();
  let ID = result.data[0].id;

  // search by ID to find city details
  const idURL = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${ID}`;
  // add a 2 second delay to fetch new info/prevent error - taken from: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
  await new Promise((r) => setTimeout(r, 2000));

  //code to output population and elevation of city
  res = await fetch(idURL, options);
  result = await res.json();
  console.log(`Population of ${cityName}: ${result.data.population}`);
  console.log(`Elevation of ${cityName}: ${result.data.elevationMeters}`);

  // extracted longitude and latitude from previous results, to input into next URL and extract weather info
  let long = result.data.longitude;
  let lat = result.data.latitude;

  // code to get weather
  const weatherURL = `https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${long}&lat=${lat}`;
  // personal key to access API
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "29d65be80bmsh4ba46015651f163p10d217jsn197a527c3c46",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };
  res = await fetch(weatherURL, options);
  result = await res.json();
  console.log(`Temperature in ${cityName} is: ${result.data[0].temp}\u00B0C`);
}
// to catch any errors
(error) => {
  console.error(error);
};

// calling function with example city and country code
getCityDetails("Cape Town", "ZA");
