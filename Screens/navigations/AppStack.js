import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../HomeScreen';
//import Drawer from './DrawerNavigator'
import BottomTabStack from './TabNavigator'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       {/* <Stack.Screen
        component={HomeScreen}
        name="Home"
      /> */}
      {/* <Stack.Screen
        component={Drawer}
        name="Drawer"
      /> */}
        <Stack.Screen
        component={BottomTabStack}
        name="BottomTab"
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
