'use client'

import { useAppSelector } from "@/store"
import { PokemonGrid } from ".."
import { IoHeartOutline } from "react-icons/io5"
import { useEffect, useState } from "react"

export const FavoritePokemons = () => {

    const favortiesPokemons = useAppSelector(state => Object.values(state.pokemons.favorites))
    // const [pokemons, setPokemons] = useState(favortiesPokemons)

    // useEffect(()=>{
    //   // console.log(favortiesPokemons)
    //   setPokemons(favortiesPokemons)
    // },[favortiesPokemons])

  return (
    favortiesPokemons.length > 0 ?
    <PokemonGrid pokemons={favortiesPokemons} /> :
    <NoFavoritos/>
  )
}

export const NoFavoritos = () => {
    return (
        <div className="flex flex-col h-[50vh] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>Np hay Favoritos</span>
        </div>
    )
}
