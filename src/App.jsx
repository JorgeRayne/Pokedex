import { useEffect, useState } from 'react';
import PokemonList from './components/PokemonList.jsx';
import PokemonImg from './components/PokemonImg.jsx';
import pokemon151 from './data/pokedexList.jsx';
import pokeball from './assets/pokeball.png'

function App() {
  const [centerPokemon, setCenterPokemon] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pokemonSprite, setPokemonSprite] = useState(null);
  
  const [pokemon, setPokemon] = useState({})

  console.log(pokemon)

  useEffect(() => {
    async function getPokemon(params) {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params}`);

        if(!response.ok){
            throw new Error('Api error fetch pokemon');
        }
        const data = await response.json();

        setPokemon(data);
        setPokemonSprite(data.sprites.versions?.['generation-viii']?.['brilliant-diamond-shining-pearl'].front_default)
      } catch (error) {
        console.error(error)
      }
    }

    const pokeName = pokemon151[centerPokemon].name;
    console.log(pokeName)
    getPokemon(pokeName);
  }, [centerPokemon]);

  return (
    <div className="h-screen w-screen bg-red-100 flex">
      <div className='h-screen bg-pink-50 w-full'>
        <PokemonImg
        sprite={pokemonSprite}
        // sprite={pokemon}
      />
      </div>
      <div className="w-80 h-screen flex items-center">

        <div className="relative h-screen flex-1 overflow-y-auto hide-scrollbar">
          <PokemonList
            setCenterPokemon={setCenterPokemon}
            setSelectedIndex={setSelectedIndex}
            setPokemon={setPokemon}
          />
        </div>
      </div>
    </div>
  )
}

export default App
