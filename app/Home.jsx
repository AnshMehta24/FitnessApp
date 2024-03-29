import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import { useRouter } from 'expo-router';


export default function Home() {
  const router = useRouter();
    return (
      <SafeAreaView className="flex-1 bg-white space-y-5" edges={['top']}>
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

      <View className="mx-10 flex flex-row justify-between items-center">
        <View className="flex flex-column justify-center items-center">
            <Image 
             source={require('../assets/images/Exercise_Saket.jpeg') }
             style={{width:wp(25), height:wp(25)}}
             className="mx-5 rounded-full"
            //  onPress={()=> router.push('Exercises')}
            />
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
        </View>
      </SafeAreaView>
    )
  }
