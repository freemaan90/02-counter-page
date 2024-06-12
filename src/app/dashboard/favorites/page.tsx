import { FavoritePokemons } from '@/pokemons';
import { PokemonGrid } from '../../../pokemons/components/PokemonGrid';


export const metadata = {
 title: 'Favoritos',
 description: '151 Pokemons',
};


export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">Global State</small></span>
            <FavoritePokemons />
        </div>
    );
}
