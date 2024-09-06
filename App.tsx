import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './android/Components/Screens/Home';
import ItemDet from './android/Components/Screens/ItemDet';
import Islamabad from './android/Components/Screens/Provscreens/Islamabad';
import Punjab from './android/Components/Screens/Provscreens/Punjab';
import Balochistan from './android/Components/Screens/Provscreens/Balochistan';
import KPK from './android/Components/Screens/Provscreens/Kpk';
import Sindh from './android/Components/Screens/Provscreens/Sindh';
import Gilgit from './android/Components/Screens/Provscreens/Gilgit';
import Kashmir from './android/Components/Screens/Provscreens/Kashmir';
import First from './android/Components/Screens/First';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          component={First}
          options={{
            headerShown: false, // Hide the header on the First screen
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Welcome to ZA Tourism!",
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'black',
            },
          }}
        />
        <Stack.Screen
          name="Start"
          component={ItemDet}
          options={{ title: 'Details' }} // Change the title to 'Details' on ItemDet screen
        />
        <Stack.Screen name="Islamabad" component={Islamabad} />
        <Stack.Screen name="Punjab" component={Punjab} />
        <Stack.Screen name="Balochistan" component={Balochistan} />
        <Stack.Screen name="Kpk" component={KPK} />
        <Stack.Screen name="Sindh" component={Sindh} />
        <Stack.Screen name="Gilgit" component={Gilgit} />
        <Stack.Screen name="Kashmir" component={Kashmir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



