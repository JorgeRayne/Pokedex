import { Virtuoso } from "react-virtuoso";
import PokemonTag from "./PokemonTag";

function PokemonList({ pokemons, setCenterPokemon }) {

    const ITEM_HEIGHT = 92;
    const VIEWPORT_HEIGHT = 800;
    return (
        <Virtuoso
        style={{  height: '100vh', width:600}}
        totalCount={pokemons.length}
        rangeChanged={(range) => {
            const centerIndex = Math.floor((range.startIndex + range.endIndex) / 2);
            console.log(pokemons.filter(pokemon => pokemon.id == centerIndex))
            setCenterPokemon(centerIndex)
        }}
        components={{
            Header: () => (
            <div
                style={{
                height: (VIEWPORT_HEIGHT - ITEM_HEIGHT) / 2,
                }}
            />
            ),
            Footer: () => (
            <div
                style={{
                height: (VIEWPORT_HEIGHT - ITEM_HEIGHT) / 2,
                }}
            />
            ),
        }}
        itemContent={(index) => {
            const p = pokemons[index];

            return (
            //   <div className="p-3 border-b">
            //     #{p.id} - {p.name}
            //   </div>
            <PokemonTag
                pokemon={p}
            />
            );
        }}
        />
    );
}

export default PokemonList;