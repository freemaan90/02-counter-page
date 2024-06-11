import { PokemonsResponse, SimplePokemon } from "@/pokemons"
import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';


export const metadata = {
 title: '151 Pokemons',
 description: '151 Pokemons',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const data: PokemonsResponse = await fetch(baseURL).then(res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    // throw new Error("Something went wrong")

    return pokemons
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemons <small>Estatico</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}
