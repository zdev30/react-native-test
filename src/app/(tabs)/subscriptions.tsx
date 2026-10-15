import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Subscriptions() {
    return (
        <View className="flex-1 items-center justify-center bg-background ">
            <Text className="text-xl font-bold text-blue-500">
                Welcome to Subscriptions
            </Text>

            <Link href="/(tabs)/index" className="p-4 bg-primary text-white">go back</Link>

        </View>
    );
}