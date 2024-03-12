import { Pressable, Text, View } from "react-native";
import { useRoutesStore } from "../../features/stores/routes/store";

export default function NewRoute() {
  const newRoute = useRoutesStore((store) => store.actions.addNewRoute);
  return (
    <View>
      <Pressable onPress={() => newRoute("new route")}>
        <Text>new route</Text>
      </Pressable>
    </View>
  );
}
