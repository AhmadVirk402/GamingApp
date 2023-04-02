import React, { useRef, useState,useContext } from 'react'
import {View,
    Text,
    SafeAreaView,
    ScrollView,
     ImageBackground,
     TextInput,
     TouchableOpacity,}
      from 'react-native'
import Carousel from 'react-native-snap-carousel';
 import FeatherIcons from 'react-native-vector-icons/Feather';    

import BannerSlider from './component/BannerSlider';
import { sliderData,freeGames,paidGames } from './model/Data';
import { windowHight, windowWidth } from './width/Dimensions';
import CustomSwith from './component/CustomSwitch';
import ListItem from './component/ListItem';
import OnboardingScreen from './OnboardingScreen';
import { AuthContext } from './context/AuthContext';



export default function HomeScreen({navigation}){
    const [gamesTab,setGamesTab]=useState(1);

    const CarouselRef=useRef(null)

    const renderBanner=({item,index})=>{
       

        return <BannerSlider Data={item}/>

    };

    const onSelectSwitch =(value)=>{
        setGamesTab(value);
      };
      const {logout}=useContext(AuthContext);
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <ScrollView style={{padding:windowWidth*0.05,}}>
             <View 
             style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginBottom:windowHight*0.025,
                }}>
                <Text 
                style={{
                    fontSize:16,
                    fontFamily:'Roboto-Bold'
                    }}>Hello Ahmad Virk</Text>
                  <TouchableOpacity onPress={()=>{logout()}}>
                <ImageBackground 
                 source={require('../assets/Images/Image_1.jpg')}
                 style={{width:35,height:35,}}
                 imageStyle={{borderRadius:35}}
               />
               </TouchableOpacity>
             </View>

             <View style={{
                flexDirection:'row',
                borderColor:'#C6C6C6',
                borderWidth:1,
                borderRadius:8,
                paddingHorizontal:10,
                paddingVertical:4,}}>
             <FeatherIcons name="search" size={25} color="#C6C6C6" 
                style={{marginRight:5,paddingVertical:10}}/>
                <TextInput placeholder='Search'/>
             </View>

             <View 
             style={{marginVertical:15,
                      flexDirection:'row',
                      justifyContent:'space-between'}}>
                
                <Text style={{fontSize:15,
                     fontFamily:'Roboto-Bold'
                     }}>Upcoming Games</Text>

                <TouchableOpacity onPress={()=>{}}>
                    <Text style={{color:'#0aadaB'}}>See all</Text>
                </TouchableOpacity>
             </View>

             <Carousel
             //ref={(c) => { this._carousel = c; }}
             ref={CarouselRef}
             data={sliderData}
             renderItem={renderBanner}
             sliderWidth={windowWidth-(windowWidth*0.1)}
             itemWidth={windowWidth*0.7}
             loop={true}/>




            <View style={{marginVertical:20,}}>
                <CustomSwith 
                  selectionMode={1} 
                  option1="Free to play"
                  option2="paid games"
                  onSelectSwitch={onSelectSwitch}
                />
            </View>
            {gamesTab==1 && 
            freeGames.map( item =>(
                <ListItem key={item.id} 
                photo={item.poster} 
                title={item.title}
                subtitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                onPress={()=>navigation.navigate('GameDetails',{
                  title:item.title,
                  id:item.id,
                })}
                />
            ))
             }
            {gamesTab==2 &&
               paidGames.map( item =>(
                <ListItem key={item.id} 
                photo={item.poster} 
                title={item.title}
                subtitle={item.subtitle}
                isFree={item.isFree}
                price={item.price}
                onPress={()=>
                  navigation.navigate('GameDetails',{
                    title:item.title,
                    id:item.id,
                  })}
                />
            ))}
            </ScrollView>
           </SafeAreaView>
    );
};
