import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon';
import Image from 'next/image';
import { PokemonCard } from '..';
interface Props {
    pokemons:SimplePokemon[]
}
export const PokemonGrid = ({pokemons}:Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    )
}