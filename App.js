import React from "react";
import * as eva from "@eva-design/eva";
import { default as themeDark } from "./assets/css/theme.dark.json";
import { default as themeLight } from "./assets/css/theme.light.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import App2 from "./App2";

export default function App(props) {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...themeLight }}>
        <App2 />
      </ApplicationProvider>
    </>
  );
}
