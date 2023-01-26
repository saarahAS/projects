// created async function to allow for 'await' before fetch
async function getCat() {
  //alternative link to fetch gif - provided link did not work
  let res = await fetch("https://api.thecatapi.com/v1/images/search");
  let result = await res.json();
  console.log(result[0].url);
}
(error) => {
  console.log(error);
};

getCat();
