import React,{useContext} from 'react';
import { Text,View,SafeAreaView,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import LoginSVG from '../assets/Login.svg';
import GoogleSVG from '../assets/Google.svg';
import FacebookSVG from '../assets/Facebook.svg';
import TwitterSVG from '../assets/Twitter.svg';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import RegisterScreen from './RegisterScreen';

import InputField from './component/InputField';
import CostomButton from './component/CostumButton';
import { AuthContext } from './context/AuthContext';



const LoginScreen=({navigation})=>{

const {login}=useContext(AuthContext);

return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex:1,justifyContent:'center',}}>
            <View style={{paddingHorizontal:25}}>
                <View style={{alignItems:'center'}}>
            <LoginSVG height={250}/>
            </View>
            <Text style={{
                fontFamily:'Roboto-Medium',
            fontSize:28,fontWeight:'500'
            ,color:'#333',marginBottom:30,}}>Login</Text>


          


<InputField label={'Email ID '}
           icon={<MaterialIcons 
            name='alternate-email'
           size={20} 
           color="#666"
           style={{marginRight:5,marginTop:5}}
           />
           }
           keyboardType="email-address"
              />

<InputField label={'Password '}
           icon={<Ionicons name='ios-lock-closed-outline'size={20} color="#666"
           style={{marginRight:5,marginTop:5}}/>
           }
           inputType="password"
           feildButtonLabel={"Forgot?"}
           feildButtonFunction={()=>{}}
              />
           
           

            <CostomButton label={"Login"} onPress={()=>{login()}} />


            <Text style={{
                textAlign:'center',
                color:'#666',
                marginBottom:30,}}>
                Or,login with.....</Text>


                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between'}}>


             <TouchableOpacity onPress={()=>{}} 
             style={{borderColor:'#ddd', borderWidth:2,
             borderRadius:10,paddingHorizontal:30,paddingVertical:10,}} >
             <GoogleSVG height={25} width={25}/>
             </TouchableOpacity>


             <TouchableOpacity onPress={()=>{}} 
             style={{borderColor:'#ddd', borderWidth:2,
             borderRadius:10,paddingHorizontal:30,paddingVertical:10,}} >
             <FacebookSVG height={25} width={25}/>
             </TouchableOpacity>


             <TouchableOpacity onPress={()=>{}} 
             style={{borderColor:'#ddd', borderWidth:2,
             borderRadius:10,paddingHorizontal:30,paddingVertical:10,}} >
             <TwitterSVG height={25} width={25}/>
             </TouchableOpacity>
             </View>
               <View style={{
                flexDirection:'row',
                justifyContent:'center',
                marginBottom:30,}}>
                 <Text>New to the app?</Text>
                 <TouchableOpacity 
                 onPress={()=>navigation.navigate('Register')}>
                    <Text style={{color:'#AD40AF',fontWeight:'700'}}>
                    Register
                    </Text>
                 </TouchableOpacity>
                 </View>
            </View>
          
       </SafeAreaView>
       </ScrollView>
    );
};

export default LoginScreen;