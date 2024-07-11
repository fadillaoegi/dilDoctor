import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
// import { Stack } from "expo-router";

export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeSCreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
