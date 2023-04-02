import React from 'react';
import { Text,TouchableOpacity } from 'react-native';

export default function CostomButton({label,onPress}) {
    return(
        <TouchableOpacity onPress={onPress} 
            style={{
              backgroundColor:'#AD40Af',
              padding:20,
              borderRadius:10,
              marginBottom:30,
              }}>
                <Text style={{
                    textAlign:"center",
                    fontFamily:'Roboto-Bold',
                    fontWeight:'700',
                    fontSize:16,
                    color:'#fff'
                }}>{label}</Text>
            </TouchableOpacity>
    );         
};