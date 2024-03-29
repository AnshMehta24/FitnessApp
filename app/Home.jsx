import { Image, Text, View, BackHandler, Alert, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component , useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import { useRouter } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';



export default function Home() {
async function getData(){
  const token=await AsyncStorage.getItem('token');
  
  console.log(token);
  axios.post('http://192.168.126.138:5001/userdata', {token:token})
  .then(res=>console.log(res.data));
}
const handleBackPress=()=>{
  Alert.alert(
    "Exit App", 'Are you want to exit?',[{
      text:'Cancel',
      onPress:()=> null,
      style:'cancel',
    },
  {
    text:'Exit',
    onPress:()=> BackHandler.exitApp(),
  }]
  )
  return true;
}

  useFocusEffect(
    React.useCallback(()=>{
      BackHandler.addEventListener('hardwareBackPress', handleBackPress)

      return ()=>{
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress)
    
      }
    
    })
  )

  useEffect(()=>{
  getData()
 
  },[])

  const router = useRouter();
    return (
      <SafeAreaView className="flex-1 bg-white space-y-5" edges={['top']}>
        <ScrollView>
        <StatusBar style='dark' />


            {/* punchLine & avatar */}
            <View className="flex-row justify-between items-center mx-5">
                <View className="space-y-2">
                  <Text
                    style={{fontSize:hp(4.5)}}
                    className="font-bold tracking-wider text-neutral-700"
                  >
                    READY TO
                  </Text>
                  <Text
                    style={{fontSize:hp(4.5), color:"#1989B6"}}
                    className="font-bold tracking-wider "
                  >
                    WORKOUT
                  </Text>
                </View>
                <View className="flex justify-center items-center space-y-2">
                    <Image 
                      source={require('../assets/images/User_Image.jpg')}
                    style={{height:hp(6), width:hp(6)}}
                    className="rounded-full"
                    />  
                    <View className="bg-neutral-200 flex justify-center items-center rounded-full border-[3px] border-neutral-300"
                    style={{height:hp(5.5), width:hp(5.5)}}>
                    <Ionicons name="notifications" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>

            {/* Image Slider */}
        <View>
          <ImageSlider/>
        </View>
        <View>
          <Text className="text-neutral-700 font-bold tracking-wider mx-5 mt-4" style={{fontSize:hp(4.5)}}>
            Fiteness
          </Text>  
        </View>

      <View className="mx-10 flex flex-row justify-between items-center flex-wrap">
        <View className="flex flex-column justify-center items-center">
          <TouchableOpacity
            onPress={()=> router.push('Exercises')}
          >
            <Image 
            
             source={require('../assets/images/Exercise_Saket.jpeg') }
             style={{width:wp(25), height:wp(25)}}
             className="mx-5 rounded-full"
             
            />
            </TouchableOpacity>
            <Text className="mx-6 text-neutral-700 font-bold tracking-wider my-2"
            style={{fontSize:wp(5)}}
              onPress={()=> router.push('Exercises')}
            >
              Exercise
            </Text>
        </View>
        <View className="flex flex-column justify-center items-center">
          <Image 
            source={require('../assets/images/Diet.jpeg')}
            style={{width:wp(25), height:wp(25)}}
            className="mx-5 rounded-full my-0"
          />
           <Text className="mx-6  text-neutral-700 font-bold tracking-wider my-2"
            style={{fontSize:wp(5)}}>
              Diet
            </Text>
        </View>
        <View className="flex flex-column justify-center items-center mt-10">
          <Image 
            source={require('../assets/images/EVG.png')}
            style={{width:wp(25), height:wp(25)}}
            className="mx-5 rounded-full my-0"
          />
           <Text className="mx-6  text-neutral-700 font-bold tracking-wider my-2"
            style={{fontSize:wp(5)}}>
              EV Graph
            </Text>
        </View>
        <TouchableOpacity
            onPress={()=> router.push('BMICal')}
          >
        <View className="flex flex-column justify-center items-center mt-10">
          <Image 
            source={require('../assets/images/BMI.png')}
            style={{width:wp(25), height:wp(25),bottom:hp(3)}}
            className="mx-5 rounded-full "
          />
           <Text className="mx-6  text-neutral-700 font-bold tracking-wider my-2"
            style={{fontSize:wp(5),bottom:hp(3)}}>
              BMI
            </Text>
        </View>
        </TouchableOpacity>
        </View>


        <View className="  w-full" style={{height:hp(10), }}>
        <Text className="text-neutral-700 font-bold tracking-wider mx-5 mt-4" style={{fontSize:hp(4.5)}}>
            Live Trainers
          </Text>
        </View>
        <View className="mx-10 flex flex-row justify-between items-center flex-wrap">
        <View className="flex flex-column justify-center items-center">
          <TouchableOpacity
            // onPress={()=> router.push('Exercises')}
          >
            <Image 
            
             source={require('../assets/images/Trainer1.jpeg') }
             style={{width:wp(25), height:wp(25)}}
             className="mx-5 rounded-full "
             
            />
            </TouchableOpacity>
            <Text className="mx-6 text-neutral-700 font-bold tracking-wider my-2"
            style={{fontSize:wp(5)}}
              // onPress={()=> router.push('Exercises')}
            >
              Adam
            </Text>
        </View>
        <View className="flex flex-column justify-center items-center">
          <TouchableOpacity
            // onPress={()=> router.push('Exercises')}
          >
            <Image 
            
             source={require('../assets/images/Trainer2.jpeg') }
             style={{width:wp(25), height:wp(25)}}
             className="mx-5 rounded-full "
             
            />
            </TouchableOpacity>
            <Text className="mx-6 text-neutral-700 font-bold tracking-wider my-2"
            style={{fontSize:wp(5)}}
              // onPress={()=> router.push('Exercises')}
            >
              Eve
            </Text>
        </View>

        </View>


        <View className="  w-full" style={{height:hp(60), }}>
        <Text className="text-neutral-700 font-bold tracking-wider mx-5 mt-4" style={{fontSize:hp(4.5)}}>
            Live GYM Traffic
          </Text>
        <View style={{width:wp(30),height:hp(5) }} className="mx-5 justify-center bg-neutral-700 rounded-full mt-2">
          <Text className="text-white text-center font-bold  ">
              10:00 A.M.
          </Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Image
          className="mt-2 mx-5"
            source={require('../assets/images/People.png')}
            style={{width:hp(13), height:hp(13), objectFit:'contain'}}
            />

            <Text className="justify-center   mr-6"
            style={{fontSize:hp(8)}}>1</Text>
        </View>
        <Text className="font-bold mr-5 justify-center items-center text-center">**1 Person is Currently at the Gym</Text>
        </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
