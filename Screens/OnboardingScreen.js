import React from 'react';
import { View,Text,SafeAreaView,TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/gamings.svg';

const OnboardingScreen=({navigation})=>{
    return(
      <SafeAreaView 
      style={{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#fff',
      }}>
      <View style={{marginTop:20}}>
        <Text
           style={{
            fontSize:30,
           color:'#20315f',
           fontFamily:'Roboto-Bold',
           }}>
          GameOn
        </Text>
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <GamingImg
          height={300}
          width={300}
          style={{transform:[{rotate:'-10deg'}]}}
         />
     </View>
      <TouchableOpacity
      
    style={{ backgroundColor:'#AD40AF',
       padding:20,
       width:'90%',
       borderRadius:5,
       flexDirection:'row',
       justifyContent:'space-between',
       marginBottom:30,
       }}
        onPress={()=>navigation.navigate('Login')}>
        <Text
        style={{
          //fontWeight:'bold',
        fontSize:18,
        color:'#fff',
        fontFamily:'Roboto-Regular',
        }}>Let's Begin</Text>
        <MaterialIcons
        name='arrow-forward-ios'
        size={22}
        color="#fff"
        />
      </TouchableOpacity>
      </SafeAreaView>
    );
  
  };
  
  
  
  export default OnboardingScreen;