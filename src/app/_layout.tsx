import "../global.css";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name = "index" options={{title: "home"}}></Stack.Screen>
      <Stack.Screen name = "customer" options={{title: "customer"}}></Stack.Screen>
      {/* <Stack.Screen name = `customer/requests/${id}`> options={{title: "customer"}}></Stack.Screen>
      <Stack.Screen name = "customer/task-progress" options={{title: "customer"}}></Stack.Screen> */}
    </Stack>
    )
}
