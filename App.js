import React from "react";
import * as eva from "@eva-design/eva";
import { default as themeDark } from "./assets/css/theme.dark.json";
import { default as themeLight } from "./assets/css/theme.light.json";
import {
  ApplicationProvider,
  IconRegistry,
  useTheme,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SafeAreaView, Platform, StatusBar } from "react-native";
import Navigation from "./src/app/navigation/navigation";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default function App(props) {
  const theme = useTheme();
  const themePaper = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: theme["color-primary-default"],
    },
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...themeLight }}>
        <PaperProvider theme={themePaper}>
          <SafeAreaView
            style={{
              flex: 1,
              paddingTop:
                Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
          >
            <Navigation />
          </SafeAreaView>
        </PaperProvider>
      </ApplicationProvider>
    </>
  );
}
