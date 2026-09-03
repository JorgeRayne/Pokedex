import { useState } from 'react';
import fetchPokemon from './api/fetchPokemon'
import { useEffect, useRef } from 'react';
import pikachu from './data/pokemon';
import pokeball from './assets/pokeball.png'
import PokemonTag from './components/PokemonTag';
import pokemon151 from './data/pokedexList.jsx'
import PokemonList from './components/PokemonList.jsx';

function App() {
  const [pokemons, setPokemons] = useState(pokemon151);
  const [centerPokemon, setCenterPokemon] = useState(0);
  const [pokemonImage, setPokemonImage] = useState(null);
  const [itemHeight, setItemHeigth] = useState(0);

  const itemRefs = useRef([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const element = itemRefs.current[0];

  useEffect(() => {
    if (!element) return
    const ItemHeigth = window.getComputedStyle(element)
    setItemHeigth(Number(ItemHeigth.height.replace('px', '')))
  }, [element])
  
  const scrollToItem = (index) => {
    setCenterPokemon(index)
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const moveSelection = (direction) => {
    setSelectedIndex((currentIndex) => {
      const newIndex = currentIndex + direction;

      if (newIndex < 0) {
        return currentIndex;
      }
      if (newIndex >= pokemon151.length) {
        return currentIndex;
      }

      // scrollToItem(currentIndex);
      scrollToItem(newIndex);
      setCenterPokemon(newIndex)
      return newIndex;
    });
  };
  console.log(centerPokemon)

  return (
    <div className="h-screen w-screen bg-red-50 flex">

      {/* LEFT - Pokemon Image */}
      <div className="flex-1 h-screen bg-blue-400 flex justify-center items-center">
        <div className="w-1/4 bg-red-500">
          <img
            className="w-full"
            src={pokemonImage?.sprites.front_default ?? pokeball}
            alt=""
          />
        </div>
      </div>

      {/* RIGHT - Pokemon Picker */}
      <div className="w-80 h-screen flex items-center">

        {/* Pokemon List */}
        <div className="relative h-screen flex-1 overflow-y-auto hide-scrollbar">

          {/* Top spacer */}
          <div style={{
          height: `calc(50vh - ${itemHeight ? itemHeight / 2 : 24}px)`,
          }} />

          {pokemon151.map((pokemon, index) => (
            <div
              key={pokemon.id}
              ref={(element) => {
                itemRefs.current[index] = element;
                console.log(itemRefs[index])
              }}
              onClick={() => scrollToItem(index)}
              className={`
                h-12
                flex
                items-center
                justify-center
                cursor-pointer
                border-2
                border-gray-300
              `}
            >
              #{pokemon.id} {pokemon.name}
            </div>
          ))}

          {/* Bottom spacer */}
          <div className="h-[50vh]" />

        </div>
        <div
            className="
              pointer-events-none
              absolute
              top-1/2
              left-0
              right-0
              h-12
              -translate-y-1/2
              border-y-2
              border-blue-500
              bg-blue-500/10
            "
          />

        {/* BUTTONS */}
        

      </div>
      <div className="h-screen w-20 flex flex-col justify-center items-center gap-4">

          <button
            className="py-2 px-4 bg-blue-500 text-white rounded"
            onClick={() => moveSelection(-1)}
          >
            Up
          </button>

          <button
            className="py-2 px-4 bg-blue-500 text-white rounded"
            onClick={() => moveSelection(1)}
          >
            Down
          </button>

        </div>
    </div>
  )
}

export default App
