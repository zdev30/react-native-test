import { Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function SubscriptionDetails() {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View className="flex-1 items-center justify-center bg-background ">
            <Text className="text-xl font-bold text-blue-500">
                the subscription id is: {id}
            </Text>

            <Link href="/" className="p-4 bg-primary text-white">go back</Link>

        </View>
    );
}
