import { Text, View } from "react-native";
import "@/global.css"
import { Link } from "expo-router";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background ">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" className="p-4 bg-primary text-white">go to onboarding</Link>
      <Link href="/(auth)/sign-in" className="p-4 bg-primary text-white">go to sign in</Link>

      <Link href="/(auth)/sign-up" className="p-4 bg-primary text-white">go to sign up</Link>

      <Link href="/(tabs)/subscriptions/spotify" className="p-4 bg-primary text-white">subscription spotify</Link>

      <Link href={{
        pathname: "/(tabs)/subscriptions/[id]",
        params: { id: "cloud" }
      }} className="p-4 bg-primary text-white">subscription cloud</Link>



    </View>
  );
}


