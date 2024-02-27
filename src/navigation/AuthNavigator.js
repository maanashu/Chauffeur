import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NAVIGATION} from '../constants';
import {
  CreateNewPassword,
  ForgotPassword,
  Home,
  Login,
  OnBoarding,
  RecoverViaEmail,
  RecoverViaNumber,
  VerifyByEmailCode,
  VerifyByPhoneCode,
  VerifyPhoneNumber,
} from '../screen';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={NAVIGATION.onBoarding}>
      <Stack.Screen
        component={OnBoarding}
        name={NAVIGATION.onBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={ForgotPassword}
        name={NAVIGATION.forgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={RecoverViaEmail}
        name={NAVIGATION.recoverViaEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={RecoverViaNumber}
        name={NAVIGATION.recoverViaNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyByPhoneCode}
        name={NAVIGATION.verifyByPhoneCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyByEmailCode}
        name={NAVIGATION.verifyByEmailCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CreateNewPassword}
        name={NAVIGATION.createNewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={VerifyPhoneNumber}
        name={NAVIGATION.verifyPhoneNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Home}
        name={NAVIGATION.home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
