import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import CartScreen from '../navigations/CartScreen';
import FavouriteScreen from './FavouriteScreen';
import FeatherIcons from 'react-native-vector-icons/Feather'; 
import Iconicons from 'react-native-vector-icons/Ionicons';
import GameDetailsScreen from './GameDetailsScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const BottomTab =createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
        
     <Stack.Navigator
    
      >
        <Stack.Screen
         component={HomeScreen}
          name="Home" 
          options={{headerShown:false}} 
          />
          <Stack.Screen
           component={GameDetailsScreen} 
           name="GameDetails"
           options={({route})=>({
            title:route.params?.title,
           })}
           />
        </Stack.Navigator>
    );
};


export default BottomTabStack=()=>{
    return(
        <BottomTab.Navigator screenOptions={{
            headerShown:false,
           tabBarShowLabel:false, 
           tabBarStyle:{backgroundColor:'#AD40AF'},
           tabBarInactiveTintColor:'#fff',
           tabBarActiveTintColor:'yellow'
        }}>
        <BottomTab.Screen name='Home' component={HomeStack}
        options={({route})=>({
            tabBarStyle:
            {display:getTabBarVisibility(route),
                backgroundColor:'#AD40AF',
            },
            tabBarIcon:({color,size})=>(
                <Iconicons name="home-outline"color={color}size={size} />
            ),
        })}/>
        <BottomTab.Screen name='Cart' component={CartScreen}
         options={{
            tabBarBadge:3,
            tabBarBadgeStyle:{backgroundColor:'yellow'},
            tabBarIcon:({color,size})=>(
                <FeatherIcons name="shopping-bag" size={size} color={color}/>
            )
        }}/>
        <BottomTab.Screen name='Favourite' component={FavouriteScreen}
         options={{
            tabBarIcon:({color,size})=>(
                <Iconicons name="heart-outline" size={size} color={color}/>
            )
        }}/>
        </BottomTab.Navigator>
    );
};

const getTabBarVisibility=(route)=>{
  /*console.log(route);*/
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  //console.log(routeName);

  if(routeName=='GameDetails'){
    return'none';
  }
  return'flex';
}