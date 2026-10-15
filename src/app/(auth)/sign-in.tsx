import { Text, View } from "react-native";

import { Link } from "expo-router";
export default function SignIn() {
    return (
        <View className="flex-1 items-center justify-center bg-background ">
            <Text className="text-xl font-bold text-blue-500">
                sign in page
            </Text>
            <Link href="/onboarding" className="p-4 bg-primary text-white">go to onboarding</Link>
        </View>
    );
}