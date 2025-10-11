import { Stack } from "expo-router";
import { View } from "react-native";
import "./globals.css";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#0f0D23" }}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="movies/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}
