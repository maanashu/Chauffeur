import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {ms} from 'react-native-size-matters';
import {
  BottomBackground,
  Email,
  LeftBlackArrow,
  PhoneBanner,
} from '../../../assets';
import {styles} from '../styles';
import {Spacer} from '../../../assets/Spacer';
import {goBack, navigate} from '../../../navigation/NavigationRef';
import CustomInput from '../../../component/CustomInput';
import {TextInput} from 'react-native-paper';
import CustomButton from '../../../component/CustomButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { NAVIGATION } from '../../../constants';

export function RecoverViaNumber() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity
          style={styles.arrowIconViewStyle}
          onPress={() => goBack()}>
          <Image source={LeftBlackArrow} style={styles.arrowIconStyle} />
        </TouchableOpacity>

        <Spacer space={ms(15)} />
        <Text style={styles.headerTitle}>{'Recover'}</Text>
        <Text style={styles.headerSubTitle}>{'Password Via Phone'}</Text>
        <View style={styles.seprator} />

        <Spacer space={ms(35)} />
        <Image source={PhoneBanner} style={styles.bannerEmailImage} />
        <Spacer space={ms(35)} />

        <Text style={styles.bannerText}>
          {'Please enter the email to recover your password.'}
        </Text>
        <Spacer space={ms(40)} />

        <CustomInput
          label={'Phone Number'}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          left={<TextInput.Icon icon={Email} size={20} />}
          placeholder={'Phone Number'}
        />

        <Spacer space={ms(30)} />

        <CustomButton
          title={'Submit'}
          onPress={() => navigate(NAVIGATION.verifyByPhoneCode)}
        />

        <Image
          source={BottomBackground}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
