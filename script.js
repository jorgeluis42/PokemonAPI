function getPokemonData(pokemon) {
  return axios({
    method: "get",
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  });
}
// async function getPokemonData(pokemon) {
//   console.log("STARTING")
//   let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//   console.log(res)
//   return res
// };

function displayData(data) {
  const imagelink = data.sprites.front_default;
  console.log(data);
  console.log(imagelink);
  const typelink = data.types[0].type.name;
  const pokediv = document.createElement("div");
  const image = document.createElement("img");
  const pokename = document.createElement("p");
  image.setAttribute("id", "imageid");
  image.setAttribute("src", imagelink);
  pokediv.setAttribute("id", typelink);
  const namelink = data.name;
  pokename.innerText = namelink;
  pokediv.appendChild(image);
  pokediv.appendChild(pokename);
  document.body.appendChild(pokediv);
  console.log(pokename);
  console.log(typelink);
}

const allbutton = document.getElementById("allbutton");
allbutton.onclick = () => {
    for (let i=1; i <= 807; i++){
      getPokemonData(i).then(responseFromApi => {
        console.log("HERE", responseFromApi)
        const dataFromApi = responseFromApi.data;
        displayData(dataFromApi);
      }
      )}
  // getPokemonData("?limit=1000&offset=0")
  //   .then(response => {
  //     console.log(response.data.results);
  //     response.data.results.forEach(onePoke => {
  //       displayData(onePoke);
  //     });
  //   })
  //   .catch(err => console.log(err));
};

const searchbutton = document.getElementById("searchbutton");

searchbutton.onclick = () => {
  const inputvalue = document.getElementById("search").value.toLowerCase();
  getPokemonData(inputvalue).then(responseFromApi => {
    const dataFromApi = responseFromApi.data;
    console.log(dataFromApi);
    displayData(dataFromApi);
  });

  // grab the value from the input
  // pass the value to getpokemon data
  // store the out put of get pokemon data as const named data
  // pass the data value to display data
};
