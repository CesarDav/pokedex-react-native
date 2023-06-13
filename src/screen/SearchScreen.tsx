import { useEffect, useState } from 'react';

import { Dimensions, FlatList, Text, View } from 'react-native';


import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/app.theme';
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


const screenWidth = Dimensions.get('window').width

export const SearchScreen = () => {

    const { isFetching, simplePokemonList } = usePokemonSearch()
    const [term, setTerm] = useState<string>('')
    const [pokemonFilter, setPokemonFilter] = useState<SimplePokemon[]>([])

    useEffect(() => {
        if (term.length === 0) return setPokemonFilter([])

        if (isNaN(Number(term))) {
            setPokemonFilter(
                simplePokemonList.filter(poke => poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
            )
        } else {
            const pokemonById = simplePokemonList.find((poke) => poke.id === term)
            setPokemonFilter(
                (pokemonById) ? [pokemonById] : []
            )
        }


    }, [term])


    console.log(term.length)



    if (isFetching) {
        return <Loading />
    }

    return (
        <View
            style={{
                flex: 1,
                marginHorizontal: 18,
            }}
        >
            <SearchInput
                onDebounce={setTerm}
                style={{
                    position: 'absolute',
                    zIndex: 9,
                    width: screenWidth - 40,
                    top: 20
                }}
            />
            <FlatList
                data={pokemonFilter}
                showsVerticalScrollIndicator={false}
                keyExtractor={(pokemon) => pokemon.id}
                numColumns={2}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                ListHeaderComponent={(
                    <Text
                        style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            marginTop: 70,
                            marginBottom: 10,
                        }}
                    >
                        {term}
                    </Text>

                )}


            />
        </View>
    )
}



