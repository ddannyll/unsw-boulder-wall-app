import { Stack } from "expo-router/stack";
import "react-native-gesture-handler";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen
        name="index"
        options={{ headerShown: true, headerTitle: "App" }}
      />
    </Stack>
  );
}
