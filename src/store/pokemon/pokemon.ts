import { SimplePokemon } from '@/pokemons';
import { PayloadAction,createSlice } from '@reduxjs/toolkit'

interface PokemonsState{
    favorites:{ [key:string]:SimplePokemon }
}

// const getInitialState = ():PokemonsState => {
//   const favorites = JSON.parse(localStorage.getItem('favorites-pokemons') ?? '{}')
//   return favorites
// }

const initialState:PokemonsState = {
  favorites:{}
}
// getInitialState()
//  getInitialState()
    // '1':{ id:'1',name:'bulbasaur' },
    // '4':{ id:'4',name:'charmander' },
    // '7':{ id:'7',name:'squirtle' }

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state,action:PayloadAction<{ [key:string]:SimplePokemon }>){
      state.favorites = action.payload

    },
    toggleFavorite(state,action:PayloadAction<SimplePokemon>){

        const pokemon = action.payload
        const { id } = pokemon
        if(!!state.favorites[id]){
            // Si exsite en el estado hago el delete
            delete state.favorites[id]
            return
        }else{
          // si no existe, lo agrego
          state.favorites[id] = pokemon
        }

        // No se debe hacer en Redux
        // Con el state actualizado lo grabo en el localStorage
        localStorage.setItem('favorite-pokemons',JSON.stringify(state.favorites))
    }
  }
});

export const { toggleFavorite,setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer