import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Route from "./src/router/index";
import AppLoading from "expo-app-loading";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";
import { Appearance } from "react-native";
import { DarkTheme } from "@react-navigation/native";
export default function App() {
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === "dark") {
    DarkTheme.colors;
  }
  const [fontLoaded] = useFonts({
    Anton_400Regular,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />

      <Route />
    </>
  );
}
