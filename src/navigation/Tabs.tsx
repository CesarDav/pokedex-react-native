import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import { Tab1 } from "./Tab1";
import { Tab2Screen } from "./Tab2";


const Tab = createBottomTabNavigator();


export const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856d6',
                tabBarLabelStyle: {
                    marginBottom: 10
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    borderWidth: 0,
                    elevation: 0,
                    height: 65
                }

            }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}

        >
            <Tab.Screen
                name="NavigationScreen"
                component={Tab1}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) =>
                    (
                        <Icon
                            color={color}
                            size={25}
                            name='list-outline'
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Busqueda',
                    tabBarIcon: ({ color }) =>
                    (
                        <Icon
                            color={color}
                            size={25}
                            name='search-outline'
                        />
                    )
                }}

            />
        </Tab.Navigator>
    )
}