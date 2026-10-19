import { Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Insights() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Insights
            </Text>

            <Link href="/" className="p-4 bg-primary text-white">go back</Link>

        </SafeAreaView>
    );
}

