import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-virtualized-view';

export default function exerciseDatails() {
    const item =  useLocalSearchParams();
    const router = useRouter();
    console.log("got Item:", item);
  return (
   <View className="flex flex-1">
      <View className="shadow-md bg-neutral-700 rounded-b-[40px]">
          <Image
            source={{uri : item.gifUrl}}
            contentFit='cover'
            style={{width:wp(100), height: wp(100)}}
            className="rounded-b-[40px]"
            />
        </View> 

        <TouchableOpacity
            onPress={()=>router.back()}
            className="mx-2 absolute rounded-full mt-2 right-0"
        >
           <Ionicons name="arrow-back" size={hp(4)} color="black" />
        </TouchableOpacity>


        {/* details */}
        <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 60 }}>
          <Text 
            style={{fontSize:hp(3.5), textTransform:"uppercase"}}
            className="font-semibold text-neutral-800 tracking-wide"
          >
            {item.name}
          </Text>
          <Text 
            style={{fontSize:hp(2), textTransform:"uppercase"}}
            className=" text-neutral-800 tracking-wide"
          >
            Equipment <Text className="font-bold text-neutral-800">
              {item?.equipment}
            </Text>
          </Text>
            <Text 
              style={{fontSize:hp(2), textTransform:"uppercase"}}
              className=" text-neutral-800 tracking-wide"
            >
              Secondary Muscles <Text className="font-bold text-neutral-800">
                {item?.secondaryMuscles}
              </Text>
            </Text>
            <Text 
              style={{fontSize:hp(2), textTransform:"uppercase"}}
              className=" text-neutral-800 tracking-wide"
            >
              Target <Text className="font-bold text-neutral-800">
                {item?.target}
              </Text>
            </Text>
            <Text 
            style={{fontSize:hp(3), textTransform:"uppercase"}}
            className="font-semibold text-neutral-800 tracking-wide"
          >
           Instructions
          </Text>

          {
            item.instructions.split(',').map((instruction, index)=>{
              return (
                <Text 
                  key={instruction}
                  style={{fontSize:hp(1.7)}}
                  className="text-neutral-800"
                  >
                    {instruction}

                </Text>
              )
            })
          }

        </ScrollView>
   </View>
  )
}