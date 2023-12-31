import { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40')

    const loadPokemons = async () => {
        setIsLoading(true)
        const response = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = response.data.next;
        mapPokemonList(response.data.results);
    }

    const mapPokemonList = (pokemonList: Result[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }, index) => {

            // "https://pokeapi.co/api/v2/pokemon/1/"
            const urlParts = url.split('/')
            const id = urlParts[urlParts.length - 2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

            return { id, picture, name }
        })

        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);

        setIsLoading(false);
    }


    useEffect(() => {
        loadPokemons()

    }, [])

    return {
        simplePokemonList,
        isLoading,
        loadPokemons
    }
}