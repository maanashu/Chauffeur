import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {AuthNavigator} from './AuthNavigator';
import {theme} from '../theme';
import {navigationRef} from './NavigationRef';

export function RootNavigator() {
  const scheme = useColorScheme();

  return (
    <NavigationContainer ref={navigationRef} theme={theme[scheme]}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
