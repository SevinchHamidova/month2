const elTemplate = document.querySelector(".js-list-template").content;
const elPokeList = document.querySelector(".poke-list");

function myRenderPoke(pokeList, node) {
    const pokemonFragment = document.createDocumentFragment();
    node.innerHTML = "";
    pokeList.forEach(function(pokes) {
      const pokemonItemClone =  elTemplate.cloneNode(true);
      pokemonItemClone.querySelector(".pokemon-id").textContent = pokes.id;
      pokemonItemClone.querySelector(".pokemon-img").src = pokes.img;
      pokemonItemClone.querySelector(".pokemon-img").alt = pokes.title;
      pokemonItemClone.querySelector(".pokemon-title").textContent = pokes.name;
      pokemonItemClone.querySelector(".pokemon-category").textContent = pokes.type;
      pokemonItemClone.querySelector(".pokemon-height").textContent = pokes.height;
      pokemonItemClone.querySelector(".pokemon-chance").textContent = pokes.spawn_chance;
      pokemonItemClone.querySelector(".pokemon-spawns").textContent = pokes.avg_spawns;
      
      pokemonFragment.appendChild(pokemonItemClone);
    });
    node.appendChild(pokemonFragment);
  }
  myRenderPoke(pokemons.slice(0, 12), elPokeList);
 