import { View, Text, SafeAreaView, TextInput, Pressable , KeyboardAvoidingView, Alert} from 'react-native'
import React, {useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, Easing ,  FlipInEasyY} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
  const router = useRouter();
    
    const [errors, setErrors] = useState({})

    
const validaton = ()=>{
    let errors={}

    if(!email) errors.email = "*Email Required";
    if(!Password) errors.Password= "*Password is Required";

    setErrors(errors);

    return Object.keys(errors).length===0;
}

 const handleSubmit = ()=>{
    if(validaton()){
        console.log("Submitted", email, Password);
        const userData={
            email:email,
            password:Password,
        }
        axios.post('http://192.168.126.138:5001/signin',userData).then(res =>{console.log(res.data)
        if(res.data.status=="ok"){
            Alert.alert("login Successfully");
            AsyncStorage.setItem("token", res.data.data);
        }
    })

       
        // setEmail("");
        // setPassword("")
        // setErrors({})

        router.push('Home')
    }
 }
  
    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }} >
            <KeyboardAvoidingView behavior='padding'>
            <SafeAreaView>
                <Animated.View entering={FadeIn.duration(800).easing(Easing.ease)}> 
                    <MaterialIcons name="sports-gymnastics" size={80} color="white" style={{ textAlign: "center", top: hp(8) }} />
                </Animated.View>
                <Animated.View entering={FlipInEasyY.duration(400)} style={{ flex: 1, 
                    justifyContent: 'center',
                     paddingHorizontal: 20,
                    width: wp(100), 
                    backgroundColor: "transparent", 
                    position: 'absolute', 
                    top: hp(25), 
                    
                    }}>
                    <View style={{ backgroundColor: "white", 
                    
                    height: hp(62),
                    borderRadius:10,
                    shadowOffset:{
                        width:0,
                        height:2
                    },
                    shadowOpacity:1,
                    shadowRadius:5,
                    elevation:35,
                    shadowColor:"white",
                    
                    }}>
                        <Text style={{
                               paddingHorizontal:10,
                              textAlign:'center',
                               fontSize:25,
                               marginBottom:4,
                               fontWeight:'bold',
                               marginTop:30,

                            
                        }}>
                            SIGN <Text style={{
                                color:"#1989B6"
                            }}>IN</Text>
                        </Text>
                        <Text style={{
                             marginTop:10,
                            paddingHorizontal:10,
                            marginHorizontal:15,
                            fontSize:16,
                            marginBottom:4,
                            fontWeight:'bold'
                        }}>Email</Text>
                        <TextInput placeholder='Enter your Email' style={{
                            borderColor:"#ddd",
                            marginTop:10,
                            marginHorizontal:15,
                            height:hp(5),
                            borderWidth:1,
                            marginBottom:15,
                            padding:10,
                            borderRadius:5,
                        
                        }}
                        value={email} onChangeText={setEmail}
                        inputMode='email'
                        />
                        {
                            errors.email ? <Text style={{color:"red", marginBottom:10, marginLeft:20}} >{errors.email}</Text> : null
                        }
                        <Text style={{
                             marginTop:10,
                             marginHorizontal:15,
                            fontSize:16,
                            marginBottom:4,
                            fontWeight:'bold'
                        }}>Enter Password</Text>
                        <TextInput placeholder='Enter your Password' secureTextEntry  style={{
                            borderColor:"#ddd",
                            marginTop:10,
                            marginHorizontal:15,
                            height:hp(5),
                            borderWidth:1,
                            marginBottom:15,
                            padding:10,
                            borderRadius:5
                        }}
                        value={Password} onChangeText={setPassword}
                        />
                         {
                            errors.Password ? <Text style={{color:"red", marginBottom:10, marginLeft:20}} >{errors.Password}</Text> : null
                        }
                       
                        <Pressable 
                             onPress={()=>{handleSubmit()}}
                        style={{
                            backgroundColor:"#1989B6",
                            marginHorizontal:15,
                            height:hp(7),
                            width:wp(50),
                            marginLeft:"auto", 
                            marginRight:"auto", 
                            borderRadius:25, 
                            alignItems:"center", 
                            justifyContent:"center",
                            marginTop:15
                        }}>
                            <Text 

                            style={{
                                fontWeight:'bold',
                                fontSize:18,
                                
                            }}>
                                SIGN IN
                            </Text>
                        </Pressable>

                        <Text style={{
                            textAlign:'center',
                            marginTop:15,
                            fontSize:13,
                            fontWeight:'400'
                        }}>
                            don't have an account? <Text style={{
                                color:'#1989B6',
                                textDecorationLine:'underline'
                            }}
                            onPress={()=>router.push('SignUp')}
                            >Sign Up</Text>
                        </Text>
                    </View>
                </Animated.View>
            </SafeAreaView>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}