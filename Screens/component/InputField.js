import React from 'react';
import { Text,View,TouchableOpacity,TextInput } from 'react-native';

export default function InputField({
    label,icon,
    inputType,keyboardType,
    feildButtonLabel,feildButtonFunction
}){
    return(
            <View style={{flexDirection:'row',
            borderBottomColor:'#ccc',
            borderBottomWidth:1,
            paddingBottom:8,
            marginBottom:25,
            }}>
            
            {icon}
            {inputType=='password'?(
            <TextInput placeholder={label}
            keyboardType={keyboardType}
             style={{flex:1,paddingVertical:0,}}
             secureTextEntry={true}
             />
             ) :(
             
             <TextInput placeholder={label}
             keyboardType={keyboardType}
             style={{flex:1,paddingVertical:0,}}
             />
             )}

             <TouchableOpacity onPress={feildButtonFunction}>
                <Text style={{color:'#AD40AF',fontWeight:'700',}}>
                    {feildButtonLabel}</Text>
                </TouchableOpacity>

           
        </View>
    );
};