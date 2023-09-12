import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/home/home.screen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={containerStyle}>
      <StatusBar barStyle={'light-content'} />
      <HomeScreen />
    </SafeAreaView>
  );
}

const containerStyle = {flex: 1, backgroundColor: 'white'};

export default App;
