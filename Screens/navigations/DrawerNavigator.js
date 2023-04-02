import React from 'react'

import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from '../HomeScreen';

const Drawer =createDrawerNavigator()

export default DrawerStack=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Home2' component={HomeScreen}/>
            <Drawer.Screen name='Home3' component={HomeScreen}/>
        </Drawer.Navigator>
    )
}