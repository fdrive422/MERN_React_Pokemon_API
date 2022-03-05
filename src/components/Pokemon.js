import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        console.log('Hello')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(res => res.json())
            .then(res => setPokemon(res.results))
            .catch((err) => console.log(err))
    }, []);

    return (
        <ul>
            <h3> Pokemon API</h3>
            {pokemon.map((pokemon, index) => {
                return (<li value={index}>{pokemon.name}</li>)
            })}
        </ul>
    )

}

export default Pokemon;