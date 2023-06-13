import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { Navigation } from "./src/navigation/Navigation";
import { Tabs } from './src/navigation/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Navigation /> */}
    </NavigationContainer>

  )
}