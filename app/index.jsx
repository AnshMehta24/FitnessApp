import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { View , Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import { useRouter } from 'expo-router';


function index() {
    const router = useRouter();
  return (
   <View className="flex-1 flex justify-end items-center ">
        <Image className="h-full w-full absolute" source={require('../assets/images/SixPackImage.jpg')} />
        <LinearGradient
            colors={['transparent', '#18181b']}
            style={{width: wp(100), height: hp(70)}}
            start={{x:0.5, y:0}}
            end={{x:0.5, y:0.8}}
            className="flex justify-end pb-12 space-y-8"
        >
            <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">Discover <Text style={{color:"#1989B6"}}>The</Text></Text>
                <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">Power Within You</Text>
            </Animated.View>

            <Animated.View entering={FadeInDown.delay(200).springify()}>
                <TouchableOpacity
                        onPress={()=> router.push('SecondPage')}
                    style={{height:hp(7), width:wp(80), backgroundColor:"#1989B6"}}
                    className="flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                >
                <Text className="text-white font-bold tracking-widest" style={{fontSize:hp(3)}}>
                    Get Started
                </Text>
                </TouchableOpacity>
            </Animated.View>
        </LinearGradient>

   </View>
   
  )
}

export default index