import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </NavigationContainer>
  );
}
