import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import APIScreen from './src/screens/APIScreens';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
          component={HomeScreen}
          options={{
            title: "AOBUT",
            headerTintColor:"#fff",
            headerStyle: {
            backgroundColor: '#1E4543',
          }
        }} />
        <Stack.Screen name="API" 
          component={APIScreen}
          // options={{
          //   title:"API APP",
          //   headerTintColor:"#fff",
          //   headerStyle:{
          //     backgroundColor:'00594D',
          //   }
              
          //   }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;