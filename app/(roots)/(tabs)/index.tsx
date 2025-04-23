import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className=" font-bold text-lg my-10 text-red-500 font-rubik text-3xl">Welcome to the app!</Text>
      <View className="text-white">
      <Link href="/sign_in">Sign in</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">profile</Link>
      <Link href="/properties/1">Property</Link>
      </View>
      <Text className="text-lg text-red-500 font-bold">This is the home screen</Text>
    </View>
  );
}
