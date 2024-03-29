import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Animated, { FadeInDown , Easing} from 'react-native-reanimated';
// import  SignUp from '../app/SignUp'
import { useRouter } from 'expo-router';


export default function Login() {
    const router = useRouter();
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }} >
    <SafeAreaView>
        
        <View style={{ height: 80 }} />
        <MaterialIcons name="sports-gymnastics" size={80} color="white" style={{ textAlign: "center", top:10 }} />
        <Text style={{ color: "white", fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>Embrace the Challenge, Embrace the Change.</Text>

        <View style={{height:40}} />
        <Animated.View entering={FadeInDown.delay(200).easing(Easing.ease)}>
        <Pressable  onPress={()=>router.push('SignUp')}
        style={{backgroundColor:"#1989B6", padding:15, marginLeft:"auto", marginRight:"auto", width:300, borderRadius:25, alignItems:"center", justifyContent:"center",marginVertical:10}}>
            <Text>Sign In with Email</Text>
        </Pressable>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(300).easing(Easing.ease)}>
        <Pressable 
        style={{backgroundColor:"#131624",padding:15, marginLeft:"auto", marginRight:"auto", width:300, borderRadius:25, alignItems:"center", justifyContent:"center", flexDirection:"row", marginVertical:10, borderColor:"#C0C0C0", borderWidth:0.8}}>
        <MaterialIcons name="phone-android" size={24} color="white" />
        <Text style={{fontWeight:500, color:"white", textAlign:"center", flex:1}}>Continue with Phone Number</Text>
        </Pressable>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(400).easing(Easing.ease)}>
        <Pressable
        style={{backgroundColor:"#131624",padding:15, marginLeft:"auto", marginRight:"auto", width:300, borderRadius:25, alignItems:"center", justifyContent:"center", flexDirection:"row", marginVertical:10, borderColor:"#C0C0C0", borderWidth:0.8}}>
        <AntDesign name="google" size={24} color="red" />
        <Text style={{fontWeight:500, color:"white", textAlign:"center", flex:1}}>Continue with Google</Text>
        </Pressable>
        </Animated.View>
        <Animated.View entering={FadeInDown.delay(500).easing(Easing.ease)}>
        <Pressable style={{backgroundColor:"#131624",padding:15, marginLeft:"auto", marginRight:"auto", width:300, borderRadius:25, alignItems:"center", justifyContent:"center", flexDirection:"row", marginVertical:10, borderColor:"#C0C0C0", borderWidth:0.8}}>
        <Entypo name="facebook" size={24} color="lightblue" />
        <Text style={{fontWeight:500, color:"white", textAlign:"center", flex:1}}>Continue with Facebook</Text>
        </Pressable>
        </Animated.View>
    </SafeAreaView>
</LinearGradient>
  )
}