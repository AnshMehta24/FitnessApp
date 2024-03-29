import { Text, View, SafeAreaView , TextInput, TouchableOpacity} from 'react-native'
import React, { Component , useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function BMICal() {
// const [height, setHeight] = useState('')
// const [weight, setWeight] = useState('')
const [bmi, setBmi] = useState('')
const [description, setDescription]= useState('')


const calculateBmi = ()=>{
   const  weight= 76;
   const  height=179;
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    console.log("Weight (parsed):", weightNum);
    console.log("Height (parsed):", heightNum);
    if (isNaN(weightNum) || isNaN(heightNum)) {
        // Handle invalid input, e.g., show an error message
        console.log('Invalid input. Please enter valid weight and height.');
        return;
    }

    // console.log(weight);
    const bmi = weightNum /  ((heightNum /100) * (heightNum /100))
    setBmi(bmi.toFixed(1))


    if(bmi < 18.5){
            setDescription('Underweight, Eat More!!!')
    }else if(bmi >=18.5 &&bmi <= 24.9){
        setDescription("Normal, Keep it up!!")
    }else if(bmi>=25 && bmi <=29){
        setDescription('OverWeight, start working out!!')
    }else if(bmi>=30){
        setDescription('Obese, Hit the Gym')
    }

    console.log(bmi);
}

    return (
        <SafeAreaView className="flex-1 bg-white space-y-5" edges={['top']}>
            <View className="my-10 items-center " 
            
            >
                <Text style={{fontSize:hp(4.5), textTransform:'uppercase'}} className="text-neutral-700 font-bold tracking-wider">BMI Calculator</Text>
            </View>
            <Text style={{
                             marginTop:10,
                            paddingHorizontal:10,
                            marginHorizontal:15,
                            fontSize:20,
                            marginBottom:4,
                            fontWeight:'bold'
                        }}>Weight</Text>
                        <TextInput placeholder='Enter your Weight in KG' style={{
                            borderColor:"#ddd",
                            marginTop:10,
                            marginHorizontal:15,
                            height:hp(5),
                            // borderWidth:1,
                            marginBottom:15,
                            padding:10,
                            borderRadius:5,
                        
                        }}
                        // value={weight} onChangeText={(text) => setWeight(text)}
                        keyboardType='numeric'
                        //  onChangeText={setEmail}
                        // inputMode='email'
                        />
            <Text style={{
                             marginTop:10,
                            paddingHorizontal:10,
                            marginHorizontal:15,
                            fontSize:20,
                            marginBottom:4,
                            fontWeight:'bold'
                        }}>Height</Text>
                        <TextInput placeholder='Enter your Height in CM' style={{
                            borderColor:"#ddd",
                            marginTop:10,
                            marginHorizontal:15,
                            height:hp(5),
                            // borderWidth:1,
                            marginBottom:15,
                            padding:10,
                            borderRadius:5,
                        
                        }}
                        // value={height} onChangeText={(text) => setHeight(text)}
                        keyboardType='numeric'
                        //  onChangeText={setEmail}
                        // inputMode='email'
                        />

<TouchableOpacity
    onPress={calculateBmi}
                    style={{height:hp(7), width:wp(80), backgroundColor:"black"}}
                    className="flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                >
                <Text className="text-white font-bold tracking-widest" style={{fontSize:hp(3)}}>
                    Calculate
                </Text>
                </TouchableOpacity>

                <View className="items-center">
                    <Text className="font-bold tracking-wide" style={{fontSize:hp(5)}}>{bmi}</Text>
                    <Text className="font-bold tracking-wide" style={{fontSize:hp(3)}}>{description}</Text>
                </View>
        </SafeAreaView>
    )
  }
