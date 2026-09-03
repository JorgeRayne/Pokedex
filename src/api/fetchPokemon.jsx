async function fetchPokemon(pokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if(!response.ok){
            throw new Error('Api error fetch pokemon');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
}

export default fetchPokemon;