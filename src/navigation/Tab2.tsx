import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./navigation.type";
import { PokemonScreen } from "../screen/PokemonScreen";
import { SearchScreen } from "../screen/SearchScreen";

const Tab2 = createStackNavigator<RootStackParamList>();

export const Tab2Screen = () => {
    return (
        <Tab2.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Tab2.Screen name="HomeScreen" component={SearchScreen} />
            <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
        </Tab2.Navigator>
    );
}
