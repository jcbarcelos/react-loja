import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Detais from "./../pages/detail";
import Cart from "./../pages/cart";
import Home from "./../pages/home";

const Stack = createStackNavigator<RootStackParamList>();
export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Detais}
          options={{ title: "Detalhes" }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
