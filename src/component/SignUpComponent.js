import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomInput from './CustomInput';
import {Email, Eye, Lock} from '../assets';
import {TextInput} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import {Spacer} from '../assets/Spacer';
import CustomButton from './CustomButton';
import {navigate} from '../navigation/NavigationRef';
import {NAVIGATION} from '../constants';

const SignUpComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <CustomInput
        label={'Full Name'}
        value={name}
        onChangeText={text => setName(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={'Email'}
        value={email}
        onChangeText={text => setEmail(text)}
        left={<TextInput.Icon icon={Email} size={20} />}
      />
      <Spacer space={ms(20)} />

      <CustomInput
        label={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
        left={<TextInput.Icon icon={Lock} size={20} />}
        right={<TextInput.Icon icon={Eye} size={20} />}
        secureTextEntry
      />

      <Text style={styles.textStyle}>
        {'By continue you have accepted our '}
        <Text style={styles.descriptionText} onPress={() => {}}>
          {'Terms of Services'}
        </Text>
        {' and the'}
        <Text style={styles.descriptionText} onPress={() => {}}>
          {' Privacy Policy'}
        </Text>
        .
      </Text>
      <CustomButton
        title={'Sign Up'}
        onPress={() => navigate(NAVIGATION.verifyPhoneNumber)}
      />
    </View>
  );
};

export default SignUpComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: ms(10),
    flex: 0.5,
  },
  textStyle: {
    marginHorizontal: ms(30),
    marginTop: ms(30),
  },
  descriptionText: {
    color: 'black',
    fontSize: ms(14),
  },
});
