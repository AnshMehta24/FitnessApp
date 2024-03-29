import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import {LinearGradient} from 'expo-linear-gradient'
import { useRouter } from 'expo-router';

export default function BodyParts() {
    const router = useRouter();
  return (
    <View className=" mx-5 my-8">
        
      <Text style={{fontSize:hp(4)}}
        className="text-neutral-700 font-bold text-center tracking-wider "
        >BodyParts</Text>

        <FlatList
            data={bodyParts}
            numColumns={2}
            keyExtractor={item=> item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:50, paddingTop:20}}
            columnWrapperStyle={{
                justifyContent:'space-between'
            }}
            renderItem={({item, index})=> <BodyPartCard router={router} index={index} item={item} />}
            />
    </View>
  )
}


const BodyPartCard=({item, router, index}) =>{
    return (
       <View>
        <TouchableOpacity style={{width:wp(44), height:wp(52)}}
            className="flex justify-end pb-4 mb-4"
            onPress={()=> router.push({pathname:'/Exercise_SpecificPage', params: item})}
        >
                <Image 
                        source={item.image}
                        resizeMode='cover'
                        style={{width:wp(44), height:wp(52)}}
                        className="rounded-[35px] absolute"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{width:wp(44), height:hp(15)}}
                    start={{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
                    className="absolute bottom-0 rounded-b-[35px]"
                    />
                    <Text
                        style={{fontSize:hp(2.3)}}
                        className="text-neutral-100 font-semibold text-center tracking-wide"
                    >
                        {item.name}
                    </Text>
        </TouchableOpacity>
       </View>
    )
}