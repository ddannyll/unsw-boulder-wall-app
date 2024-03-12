import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router/stack";
import { Text } from "react-native";
import { useRoutesStore } from "../../../features/stores/routes/store";

export default function RoutesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Routes",
          headerLeft: () => <></>,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="[routeId]"
        options={{
          headerShown: true,
          headerTitle: (props) => {
            const { routeId } = useLocalSearchParams();
            const routeName = useRoutesStore(
              (store) => store.routeDetails.get(routeId as string).name,
            );
            return <Text>{routeName}</Text>;
          },
        }}
      ></Stack.Screen>
    </Stack>
  );
}
