import { Text, Image, FlatList, ActivityIndicator, View } from 'react-native';
import { styles } from '../theme/app.theme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';



export const HomeScreen = () => {
    const { simplePokemonList, loadPokemons } = usePokemonPaginated();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View
                style={{
                    alignItems: 'center'
                }}
            >

                <FlatList
                    data={simplePokemonList}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(pokemon) => pokemon.id}
                    numColumns={2}
                    renderItem={({ item }) => <PokemonCard pokemon={item} />}
                    ListHeaderComponent={(
                        <Text
                            style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                marginTop: 20,
                                marginBottom: 20
                            }}
                        >
                            Pokedex
                        </Text>

                    )}
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={<ActivityIndicator style={{ height: 200 }} size={20} color='grey' />}

                />
            </View>


        </>
    )
}
