import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigation from "./src/app/navigation/navigation";
import { useTheme } from "@ui-kitten/components";

export default function App2(props) {
  const theme = useTheme();
  const themePaper = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      accent: theme["color-primary-default"],
    },
    animation: {
      scale: 1.0,
    },
  };

  return (
    <PaperProvider theme={themePaper}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <Navigation />
      </SafeAreaView>
    </PaperProvider>
  );
}
