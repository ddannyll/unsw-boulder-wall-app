import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useRoutesStore } from "../../../features/stores/routes/store";
import RouteListItem from "../../../components/routeListItem";

export default function App() {
  const routes = useRoutesStore((store) => store.routes);
  return (
    <View style={{ flex: 1 }}>
      {routes.map((id) => (
        <RouteListItem id={id} key={id}></RouteListItem>
      ))}
    </View>
  );
}
