import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import FreeBoard from "./screens/FreeBoard";
import HotBoard from "./screens/HotBoard";
import InfoBoard from "./screens/InfoBoard";
import SafeViewAndroid from "./components/SafeViewAndroid";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider style={SafeViewAndroid.AndroidSafeArea}>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FreeBoard"
            component={FreeBoard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HotBoard"
            component={HotBoard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="InfoBoard"
            component={InfoBoard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
