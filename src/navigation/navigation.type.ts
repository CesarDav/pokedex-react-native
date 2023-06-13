import { SimplePokemon } from "../interfaces/pokemonInterfaces";

export type RootStackParamList = {
    HomeScreen: undefined,
    PokemonScreen: { simplePokemon: SimplePokemon, color: string },
}