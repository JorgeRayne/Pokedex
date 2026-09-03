import React, { useState } from 'react'
import pokeball from '../assets/pokeball.png'

function PokemonImg({ sprite }) {
    const [pokemonSprite, setPokemonSprite] = useState(pokeball);

    useState(() => {
        setPokemonSprite(sprite ? sprite : pokeball)
    }, [sprite]);

    return (
        <div className="flex-1 h-screen bg-blue-400 flex justify-center items-center">
            <div className="w-1/4 bg-red-500">
                <img
                className="w-full"
                src={pokemonSprite}
                alt=""
                />
            </div>
        </div>
    )
}

export default PokemonImg