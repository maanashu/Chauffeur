import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomInput from './CustomInput';
import {Apple, Email, Eye, Google, Lock, Seprator} from '../assets';
import {TextInput} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import {Spacer} from '../assets/Spacer';
import CustomButton from './CustomButton';
import {navigate} from '../navigation/NavigationRef';
import {NAVIGATION} from '../constants';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <CustomInput
        label={'Email'}
        value={email}
        onChangeText={text => setEmail(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
        placeholder={'Email'}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
        left={<TextInput.Icon icon={Lock} size={20} />}
        right={<TextInput.Icon icon={Eye} size={20} />}
        secureTextEntry
        placeholder={'Password'}
      />

      <TouchableOpacity
        style={styles.forgotPasswordView}
        onPress={() => navigate(NAVIGATION.forgotPassword)}>
        <Text style={styles.forgotText}>{'Forgot Password?'}</Text>
      </TouchableOpacity>
      <Spacer space={ms(10)} />

      <CustomButton title={'Login'} />
      <Spacer space={ms(15)} />

      <View style={styles.sepratorLoginView}>
        <Image source={Seprator} style={{height: ms(3)}} />
        <Text style={{color: '#828282', textAlign: 'center'}}>
          or Login with
        </Text>
        <Image source={Seprator} style={{height: ms(3)}} />
      </View>
      <Spacer space={ms(15)} />

      <View style={styles.sepratorLoginView}>
        <TouchableOpacity style={styles.socialLoginView}>
          <Image style={styles.socialIcon} source={Apple} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLoginView}>
          <Image style={styles.socialIcon} source={Google} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: ms(10),
    flex: 0.5,
  },
  forgotPasswordView: {
    alignSelf: 'flex-end',
    marginTop: ms(12),
    marginHorizontal: ms(20),
  },
  forgotText: {
    color: 'black',
    fontSize: ms(14),
  },
  sepratorLoginView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: ms(20),
  },
  socialLoginView: {
    height: ms(62),
    width: ms(62),
    borderColor: '#E8E8E8',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: ms(20),
    justifyContent: 'center',
    marginHorizontal: ms(4),
  },
  socialIcon: {
    height: ms(25),
    width: ms(20),
    resizeMode: 'contain',
  },
});
