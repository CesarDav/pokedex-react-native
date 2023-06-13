import { FC } from 'react';

import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import { RootStackParamList } from '../navigation/navigation.type';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetail } from '../components/PokemonDetail';

interface Props extends StackScreenProps<RootStackParamList, 'PokemonScreen'> { }

export const PokemonScreen: FC<Props> = ({ navigation, route }) => {

    const { color, simplePokemon } = route.params;

    const { name, id, picture } = simplePokemon;

    const { isLoading, pokemon } = usePokemon(id)

    console.log(pokemon)

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* headars */}
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}
            >

                {/* go back */}

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    activeOpacity={0.9}
                    style={{
                        ...styles.backButton
                    }}
                >
                    <Icon
                        name='arrow-back-outline'
                        color='white'
                        size={35}
                    />

                </TouchableOpacity>


                {/* Pokemon name */}

                <Text
                    style={{
                        ...styles.pokemonName
                    }}
                >
                    {name + '\n'}#{id}
                </Text>

                {/* white pokeball */}
                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokeball
                    }}
                />

                <FadeInImage
                    uri={picture}
                    style={{
                        ...styles.pokemonImage
                    }}

                />
            </View>
            {/* detail and loading */}

            {
                isLoading
                    ? (
                        <View
                            style={styles.loadingIndicator}
                        >
                            <ActivityIndicator
                                color={color}
                                size={50}
                            />
                        </View>
                    )
                    : <PokemonDetail
                        pokemon={pokemon}
                    />
            }


        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,

    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 10
    },
    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
        top: 40,
    },
    pokeball: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
