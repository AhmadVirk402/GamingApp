import React,{useState} from 'react';
import { Text,View,SafeAreaView,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import InputField from './component/InputField';
import RegistrationSVG from '../assets/Registration.svg';
import GoogleSVG from '../assets/Google.svg';
import FacebookSVG from '../assets/Facebook.svg';
import TwitterSVG from '../assets/Twitter.svg';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import LoginScreen from './LoginScreen';
import CostomButton from './component/CostumButton';
import DatePicker from 'react-native-date-picker'




const RegisterScreen=({navigation})=>{
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dobLabel, setDobLabel] = useState('Date of Birth')


return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex:1,justifyContent:'center',}}>
            <View style={{paddingHorizontal:25}}>
                <View style={{alignItems:'center'}}>
            <RegistrationSVG height={250}/>
            </View>
            <Text style={{
                fontFamily:'Roboto-Medium',
            fontSize:28,fontWeight:'500'
            ,color:'#333',marginBottom:30,}}>Register</Text>
           
            
          


                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginBottom:30}}>


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

             <Text style={{
                textAlign:'center',
                color:'#666',
                marginBottom:30,}}>
                Or,Register with Email.....</Text>


          <InputField label={'Full Name'}
           icon={<Ionicons 
            name="person-outline"size={20} color="#666"
              style={{marginRight:5,marginTop:5}}
              />
           }
              />

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
           icon={<Ionicons name='ios-lock-closed-outline'
           size={20} color="#666"
           style={{marginRight:5,marginTop:5}}/>
           }
           inputType="password"
              />

<InputField label={'confirm Password '}
           icon={<Ionicons name='ios-lock-closed-outline'
           size={20} color="#666"
           style={{marginRight:5,marginTop:5}}/>
           }
           inputType="password"
              />



          <View style={{
            flexDirection:'row',borderBottomColor:'#ccc',
            marginBottom:30,borderBottomWidth:1,
            paddingBottom:8,
        }}>
          <Ionicons name='calendar-outline'size={20} color="#666"
           style={{marginRight:5,marginTop:5}}/>

           <TouchableOpacity onPress={()=>setOpen(true)}>
            <Text style={{color:'#666',marginLeft:5,marginTop:8,}}>
                {dobLabel}
            </Text>
            </TouchableOpacity>
          </View>

          <DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        maximumDate={new Date('2005-01-01')}
        minimumDate={new Date('1980-01-01')}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setDobLabel(date.toDateString())
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />


       <CostomButton label={"Register"} onPress={()=>{}} />



           
               <View style={{
                flexDirection:'row',
                justifyContent:'center',
                marginBottom:30,}}>
                 <Text>Already registered?</Text>
                 <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={{color:'#AD40AF',fontWeight:'700'}}>
                    Login
                    </Text>
                 </TouchableOpacity>
                 </View>
            </View>
          
       </SafeAreaView>
       </ScrollView>
    );
};

export default RegisterScreen;