import React, { useState } from 'react'

function PokemonImg({ sprite }) { 

    return (
        <div className="flex-1 h-fulll bg-blue-400 flex justify-center items-center">
            <div className="">
                <img
                    className="w-full"
                    src={sprite}
                    alt='Image of An Pokemon'
                />
            </div>
        </div>
    )
}

export default PokemonImg