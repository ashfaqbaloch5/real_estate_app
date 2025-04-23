import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
  const handleLogin = (): void => {};

  return (
    
    <SafeAreaView className="bg-white h-full">

      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />

        <View className="px-10">
          <Text className="text-base text-center font-rubik text-black-200">
            WELCOME TO REAL ESTATE
          </Text>

          <Text className="text-3xl font-rubik font-bold text-black-300 text-center mt-2">
            Let's Get You Closer to 
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-black-200 text-center mt-5">
            Login to ReState with Google
          </Text>

          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <View style={styles.innerContainer}>
              <Image
                source={icons.google}
                style={styles.icon}
              />
              <Text style={styles.text}>Sign Up with Google</Text>
            </View>
          </TouchableOpacity>
          
          
          
    
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    alignItems: 'center',
    
  },
});

export default SignIn;
