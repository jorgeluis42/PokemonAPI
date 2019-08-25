function getPokemonData(pokemon) {
  return axios({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  });
}

function displayData(data) {
  const imagelink = data.sprites.front_default;
  console.log(imagelink);
  const image = document.createElement("img");
  image.setAttribute("src", imagelink);
  document.body.appendChild(image);
}

const searchbutton = document.getElementById("searchbutton");

searchbutton.onclick = () => {
  const inputvalue = document.getElementById("search").value.toLowerCase();
  getPokemonData(inputvalue).then(responseFromApi => {
    const dataFromApi = responseFromApi.data;
    displayData(dataFromApi);
  });

  // grab the value from the input
  // pass the value to getpokemon data
  // store the out put of get pokemon data as const named data
  // pass the data value to display data
};
