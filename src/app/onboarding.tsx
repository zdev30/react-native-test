import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Onboarding() {
    return (
        <View className="flex-1 items-center justify-center bg-background ">
            <Text className="text-xl font-bold text-blue-500">
                Onbording bage
            </Text>
            <Link href="/" className="p-4 bg-primary text-white">go back</Link>
        </View>
    );
}
