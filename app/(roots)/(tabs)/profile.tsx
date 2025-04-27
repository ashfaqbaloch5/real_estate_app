import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Animated, ImageSourcePropType, Alert } from 'react-native';
import React, { useRef } from 'react';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: object;
  showArrow?: boolean;
}

const SettingsItem = ({ icon, title, onPress, textStyle, showArrow = true }: SettingsItemProps) => {
  const arrowOpacity = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(arrowOpacity, {
      toValue: 0.5,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(arrowOpacity, {
      toValue: 1,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      className="flex flex-row items-center justify-between py-3"
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
    >
      {/* Left side: Icon + Title */}
      <View className="flex flex-row items-center gap-3">
        <Image source={icon} className="size-6" />
        <Text className="text-lg font-rubik-medium text-black-300" style={textStyle}>
          {title}
        </Text>
      </View>

      {/* Right side: Animated Arrow */}
      {showArrow && (
        <Animated.Image source={icons.rightArrow} className="size-5" style={{ opacity: arrowOpacity }} />
      )}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const {user,refetch}= useGlobalContext();
  const handleLogout = async () => {
    // Logout logic here
    const result =await logout();
    if (result) {
      Alert.alert('Success', 'Logged out successfully!');
      refetch();
    }
    else {
      Alert.alert('Error', 'Failed to log out!');
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        {/* Header */}
        <View className="flex flex-row mt-5 items-center justify-between mx-5">
          <Text className="text-xl font-bold text-black font-rubik">
            Profile
          </Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        {/* Avatar */}
        <View className=" justify-center mt-5">
          <View className="flex flex-col items-center mt-5 relative">
            <Image
              source={{uri : user?.avatar}}
              className="size-44 rounded-full"
            />
            
          </View>
          <View className="flex flex-col justify-center items-center mt-3 relative">

          <TouchableOpacity className="absolute bottom-14 right-24">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-rubik font-bold mt-2">
              {user?.name}
            </Text>
          </View>
        </View>

        {/* Settings Items */}
        <View className="flex flex-col mt-10 ">
          <SettingsItem
            icon={icons.calendar}
            title="My Bookings"
            onPress={() => {}}
            textStyle={{ color: 'black' }}
            showArrow={true}
          />
          <SettingsItem
            icon={icons.wallet}
            title="Wallet"
            onPress={() => {}}
            textStyle={{ color: 'black' }}
            showArrow={true}
          />
          <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
             {settings.slice(2).map((item,index)=>(
              <SettingsItem 
                key={index} {...item}
                icon={item.icon}
                title={item.title}
                onPress={item.onPress}
                textStyle={{ color: 'black' }}
                showArrow={true}
              />
             ))}
          </View>
        </View>
        <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>  
          <SettingsItem
            icon={icons.logout}
            title="Logout"
            onPress={handleLogout}
            textStyle={{ color: 'red' }}
            showArrow={false}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
