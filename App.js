import React, {useEffect} from 'react';
import {Platform, StatusBar, View} from 'react-native';
import {RootNavigator} from './src/navigation';
import {ms} from 'react-native-size-matters';

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#ffffff', true);
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <>
      <StatusBar
        hidden={false}
        animated
        translucent
        barStyle="dark-content"
        backgroundColor={'white'}
      />
      <RootNavigator />
    </>
  );
};

export default App;
