import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E37A82",
      }}
    >
      <Tabs.Screen
        name="routes"
        options={{
          title: "Routes",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="list" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="newRoute"
        options={{
          title: "New Route",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="plus-square" color={color} />
          ),
          headerTitle: "Create a New Route",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={22} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
