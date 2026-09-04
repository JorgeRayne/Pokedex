import { useState, useEffect, useRef } from "react";
import pokemons from '../data/pokedexList.jsx';
import fetchPokemon from "../api/fetchPokemon.jsx";

function PokemonList({ setCenterPokemon, setSelectedIndex, setPokemon }) {
    const pokemon151 = pokemons
    const [itemHeight, setItemHeigth] = useState(0);
    const itemRefs = useRef([]);
    // const element = itemRefs.current[0];

    useEffect(() => {
        setSelectedIndex(0);
        setCenterPokemon(0);
        itemRefs.current[0]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    } ,[]);

    const scrollToItem = (index) => {
        setSelectedIndex(index);
        setCenterPokemon(index);
        itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        });
        fetchPokemon(pokemons[index].name)
    };
    
    
    return(
        <>
            <div style={{
                height: `calc(50vh - ${itemHeight ? itemHeight / 2 : 24}px)`,
            }} />

            <div className="flex justify-center items-center flex-col gap-2">
                {pokemon151.map((pokemon, index) => (
                    <div
                    key={pokemon.id}
                    ref={(element) => {
                        itemRefs.current[index] = element;
                    }}
                    onClick={() => scrollToItem(index)}
                    className={`
                        w-full
                        h-24
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
            </div>
            <div className="h-[50vh]" />
        </>
    );
}

export default PokemonList;