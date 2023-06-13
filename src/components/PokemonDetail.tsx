import { FC } from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetail: FC<Props> = ({ pokemon }) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject
            }}
        >

            {/* types and Weight */}
            <View
                style={{
                    ...styles.container,
                    marginTop: 370
                }}
            >
                <Text
                    style={styles.title}
                >
                    Types
                </Text>

                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >

                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={type.name}
                            >
                                {type.name}

                            </Text>
                        ))
                    }
                </View>
                <Text
                    style={styles.title}
                >
                    Weight
                </Text>
                <Text
                    style={styles.regularText}
                > {pokemon.weight} Lb</Text>


            </View>


            {/* Sprites */}
            <View
                style={{
                    ...styles.container,
                }}
            >
                <Text
                    style={styles.title}
                >
                    Sprites
                </Text>

            </View>

            <ScrollView
                style={{}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}

                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}

                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}

                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}

                />


            </ScrollView>
            {/* Skill */}
            <View
                style={{
                    ...styles.container
                }}
            >
                <Text style={styles.title}> Base Skills </Text>

                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={ability.name}
                            >
                                {ability.name}

                            </Text>
                        ))
                    }
                </View>
            </View>


            {/* Move */}
            <View
                style={{
                    ...styles.container
                }}
            >
                <Text style={styles.title}> Moves </Text>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>

                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10
                                }}
                                key={move.name}
                            >
                                {move.name}

                            </Text>
                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View
                style={{
                    ...styles.container
                }}
            >
                <Text style={styles.title}> Stats </Text>

                <View >

                    {
                        pokemon.stats.map((stat, index) => (
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                                key={stat.stat.name + index}
                            >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150
                                    }}
                                >
                                    {stat.stat.name}

                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        // marginRight: 10
                                        fontWeight: 'bold',

                                    }}
                                >
                                    {stat.base_stat}

                                </Text>
                            </View>
                        ))
                    }
                </View>

                {/* final Sprite */}
                <View
                    style={{
                        marginBottom: 20,
                        alignItems: 'center'
                    }}
                >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}

                    />
                </View>
            </View>
        </ScrollView >
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
})