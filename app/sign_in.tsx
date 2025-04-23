import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';

const sign_in = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName='h-full'>
         <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
         <View className='px-10'>
          <Text className='text-base text-center font-rubik text-black-200'>
            Welcome to Estate
          </Text>
          <Text className='text-3xl font-rubik font-bold text-black-300  text-center mt-2'>
                 Let's Get You Closer to {"\n"}
                 <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
            Login to ReState with Google
          </Text>
          <TouchableOpacity onPress={}>

          </TouchableOpacity>
          

         </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default sign_in;