import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (state:MiddlewareAPI) => {
    return (next:Dispatch) => (action:Action)=>{
        next(action)
        console.log({state:state.getState()})
        console.log(action);
        
        
        if(action.type === 'pokemons/toggleFavorite'){
            const { pokemons } = state.getState()
            localStorage.setItem('favorites-pokemons',JSON.stringify(pokemons))
            return
        }


    }
}