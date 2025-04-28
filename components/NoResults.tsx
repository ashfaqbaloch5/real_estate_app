import React from "react";
import { View, Text, Image } from "react-native";
import images from "@/constants/images";

const NoResults = () => {
  return (
    <View className="flex-1 items-center justify-center px-5 mt-10 ">
      <Image
        source={images.noResult}
        className="w-80 h-80"
        resizeMode="contain"
      />
      <Text className="text-2xl font-rubik-bold text-primary-300 mt-5">
        No Results Found
      </Text>
      <Text className="text-base font-rubik text-gray-500 mt-2 text-center">
        We couldn’t find any results for your search. Please try again.
      </Text>
    </View>
  );
};

export default NoResults;
