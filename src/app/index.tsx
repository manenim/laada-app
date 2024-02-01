import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Text>this is the home screen</Text>
      <Link href = "/customer/" ><Text className="font-bold">to pending requests</Text></Link>
    </View>
  );
}

