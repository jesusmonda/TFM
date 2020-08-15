import React from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from './assets/css/theme.json';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, Platform, StatusBar } from 'react-native';
import Navigation from './src/app/navigation/navigation.component';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
          <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
            <Navigation />
          </SafeAreaView>
        </ApplicationProvider>
      </>
    );
  }
}
