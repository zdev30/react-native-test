import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Insights() {
    return (
        <View className="flex-1 items-center justify-center bg-background ">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Insights
            </Text>

            <Link href="/" className="p-4 bg-primary text-white">go back</Link>

        </View>
    );
}

