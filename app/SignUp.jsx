import { View, Text, SafeAreaView, TextInput, Pressable , KeyboardAvoidingView, Alert} from 'react-native'
import React,{useEffect, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, Easing ,  FlipInEasyY} from 'react-native-reanimated';
import { useRouter } from 'expo-router';
// import axios from 'axios';
// import { Axios } from 'axios';
import axios from 'axios';


export default function SignUp() {
    const [name, setName] = useState('')
    const [nameverify, setNameVerify] = useState(false);
    const [email, setEmail] = useState("")
    const [emailverify, setEmailVerify] =useState(false)
  const [Password, setPassword] = useState("")
  const [passwordverify, setPasswordVerify] =useState(false)
  const router = useRouter();
 

function handleSubmit(){
    const userData = {
        name:name,
        email:email,
        password: Password
    };

    if(nameverify && emailverify && passwordverify){

        axios.post("http://192.168.126.138:5001/signup", userData).then((res)=> {console.log(res.data)
        if(res.data.status == "ok"){
            Alert.alert("Register Successfully")
            router.push('Home');
        }else{
            Alert.alert(JSON.stringify(res.data));
        }
    
    }).catch(e=> console.log(e))
    }
    else{
        Alert.alert("Fill Mandatory Details")
    }

}

  function handleName(e){
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);
    if(nameVar.length > 1){
        setNameVerify(true);
    }
  }

  function handleEmail(e){
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailVar)){
        setEmail(emailVar);
        setEmailVerify(true)
    }
  }
  function handlePassword(e){
    const PassVar = e.nativeEvent.text;
    setPassword(PassVar);
    setPasswordVerify(false);
    if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(PassVar)){
        setPassword(PassVar);
        setPasswordVerify(true)
    }
  }


//   async function handlesubmit(){
//     // console.log(data);
//       var userData={
//            name,
//           email,
//           Password
//       };

//       console.log(userData);
//  await axios.post("https://localhost:8000/SignUp",userData)
//     .then((res)=> console.log(res.data)) .catch((e)=>console.log(e))

//   } 
// var userData={
//                name,
//                email,
//               Password
//           };
// const handlesubmit = async (e)=>{
//     // e.preventDefault();

//     try {
//         const res = await fetch('http://10.0.0.2:8000/SignUp', {
//             method : 'POST',
//             headers:{
//                 'Content-Type' : 'application/json',
//             },
//             body: JSON.stringify(userData),
//         })
//         const data = await res.json();
//         console.log(data);

//         console.log("Success");
//     } catch (error) {
//         console.log("Error" ,error);
//     }
// }



 
    return (
        <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }} >
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={100}>
           
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
                    
                    height: hp(70),
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
                            }}>UP</Text>
                        </Text>
                        <Text style={{
                             marginTop:10,
                            paddingHorizontal:10,
                            marginHorizontal:15,
                            fontSize:16,
                            marginBottom:4,
                            fontWeight:'bold'
                        }}>Full Name</Text>
                        <TextInput placeholder='Enter your Name' style={{
                            borderColor:"#ddd",
                            marginTop:10,
                            marginHorizontal:15,
                            height:hp(5),
                            borderWidth:1,
                            marginBottom:15,
                            padding:10,
                            borderRadius:5,
                        
                        }}
                        value={name} onChange={e => handleName(e)}
                        />
                        <Text style={{
                             marginTop:10,
                             marginHorizontal:15,
                            fontSize:16,
                            marginBottom:4,
                            fontWeight:'bold'
                        }}>Email</Text>
                        <TextInput placeholder='Enter Email'   style={{
                            borderColor:"#ddd",
                            marginTop:10,
                            marginHorizontal:15,
                            height:hp(5),
                            borderWidth:1,
                            marginBottom:15,
                            padding:10,
                            borderRadius:5
                        }}
                        value={email} onChange={e=> handleEmail(e)}
                        />
                        {email.length < 1 ? null : emailverify ? null : (
                            <Text style={{marginLeft:20, color:'red'}}>
                                    Invalid Email
                            </Text>
                        )}
                        <Text style={{
                             marginTop:10,
                             marginHorizontal:15,
                            fontSize:16,
                            marginBottom:4,
                            fontWeight:'bold'
                        }}>Create Password</Text>
                        <TextInput placeholder='Create Password' secureTextEntry  style={{
                            borderColor:"#ddd",
                            marginTop:10,
                            marginHorizontal:15,
                            height:hp(5),
                            borderWidth:1,
                            marginBottom:15,
                            padding:10,
                            borderRadius:5
                        }}
                        value={Password}
                        onChange={e => handlePassword(e)}
                        />
                         {Password.length < 1 ? null : passwordverify ? null : (
                            <Text style={{marginLeft:20, color:'red'}}>
                                    Invalid Password
                            </Text>
                        )}
                        <Pressable 
                            onPress={()=> handleSubmit()}
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
                        }}
                        // onPress={()=>handlesubmit()}
                        >
                            <Text style={{
                                fontWeight:'bold',
                                fontSize:18,
                                
                            }}>
                                SIGN UP
                            </Text>
                        </Pressable>

                        <Text style={{
                            textAlign:'center',
                            marginTop:15,
                            fontSize:13,
                            fontWeight:'400'
                        }}>
                            already have an account? <Text
                            onPress={()=>router.push('SignIn')}
                            style={{
                                color:'#1989B6',
                                textDecorationLine:'underline'
                            }}
                           
                            >Sign In</Text>
                        </Text>
                    </View>
                </Animated.View>
           
            </KeyboardAvoidingView>
            
        </LinearGradient>
    )
}

