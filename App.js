const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import ShopScreen from "./screens/ShopScreen";
import Dashboard from "./screens/Dashboard";
import FavoriteScreen from "./screens/FavoriteScreen";
import LoginScreen3 from "./screens/LoginScreen3";
import LoginScreen2 from "./screens/LoginScreen2";
import LoginScreen from "./screens/LoginScreen";
import ProductCard3 from "./screens/ProductCard3";
import ProductCard2 from "./screens/ProductCard2";
import ProductCard from "./screens/ProductCard";
import AkunScreen from "./screens/AkunScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Itim: require("./assets/fonts/Itim.ttf"),
    "Kaushan Script": require("./assets/fonts/Kaushan_Script.ttf"),
    ABeeZee: require("./assets/fonts/ABeeZee.ttf"),
    "Abhaya Libre": require("./assets/fonts/Abhaya_Libre.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ShopScreen"
              component={ShopScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoriteScreen"
              component={FavoriteScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen3"
              component={LoginScreen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen2"
              component={LoginScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductCard3"
              component={ProductCard3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductCard2"
              component={ProductCard2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductCard"
              component={ProductCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AkunScreen"
              component={AkunScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
