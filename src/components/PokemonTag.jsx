import React from 'react'
import pokeball from '../assets/pokeball.png'
import PokemonList from './PokemonList'

function PokemonTag({pokemon}) {
    return (
        <div className='w-xl h-23 bg-amber-400 flex justify-center items-center rounded-[100px_25px_25px_100px] relative my-5'>
            <div className='h-full w-1/4 absolute pl-5 left-0 flex justify-start items-center '>
                <img className='w-1/2 object-contain' src={pokeball} alt="" />
            </div>
            <div>
                <p className='text-4xl' style={{ fontFamily: "Jost, sans-serif" }}>{pokemon.name.toUpperCase()}</p>
            </div>
        </div>
    )
}

export default PokemonTag