import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text>app</Text>
      <Link href={"/auth"}>goto auth</Link>
    </View>
  );
}
