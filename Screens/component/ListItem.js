import React from 'react';
import { Text,View,Image, TouchableOpacity } from 'react-native';

export default function ListItem({photo,title,subtitle,isFree,price,onPress}){
    return(
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:20,}}>
           <View 
           style={{
            flexDirection:'row',
           alignItems:'center',
           flex: 1,}}>
            <Image source={photo}
              style={{width:55,height:55,
                      borderRadius:10,marginRight:8,}}/>

                      <View>
                        <Text style={{
                            color:'#333',
                            fontFamily:'Roboto-Medium',
                            fontSize:14,
                        }}>{title}</Text>
                        <Text  style={{
                            color:'#333',
                            fontFamily:'Roboto-Medium',
                            fontSize:14,
                            textTransform:'uppercase',
                        }}>{subtitle}</Text>
                      </View>
           </View>
     
          <TouchableOpacity onPress={onPress} style={{
            backgroundColor:'#0aadaB',
            padding:10,
            width:100,
            borderRadius:10,
          }}>
            <Text style={{
                fontFamily:'Roboto-Medium',
                color:'#fff',
                textAlign:'center',
                fontSize:14,
                
            }}>
             {isFree=='Yes'&&'play'} 
                 {isFree=='No'&& price} 
            </Text>
            </TouchableOpacity>    

        </View>
    );
};