import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign_in">Sign in</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">profile</Link>
    </View>
  );
}
