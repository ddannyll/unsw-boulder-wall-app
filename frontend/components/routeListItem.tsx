import { Pressable, Text, View } from "react-native";
import { useRoutesStore } from "../features/stores/routes/store";
import { Link } from "expo-router";

export default function RouteListItem({ id }: { id: string }) {
  const routeDetails = useRoutesStore((store) => store.routeDetails.get(id));
  return (
    <Link href={`/routes/${id}`}>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 8,
        }}
      >
        <Text>{routeDetails.name}</Text>
        <Text>id: {id}</Text>
      </View>
    </Link>
  );
}
