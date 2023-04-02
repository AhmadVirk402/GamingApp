import React from 'react';
import { View,Image } from 'react-native';
import { windowWidth } from '../width/Dimensions';

export default function BannerSlider({Data}) {
    return(
        <View>
            <Image
             source={Data.Image}
             style={{height:150, width:windowWidth*0.7,borderRadius:10,}}/>
        </View>
    );
};