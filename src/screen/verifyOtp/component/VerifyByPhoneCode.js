import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Spacer} from '../../../assets/Spacer';
import {BottomBackground, Edit} from '../../../assets';
import {styles} from '../styles';
import {ms} from 'react-native-size-matters';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../../../component/CustomButton';

export function Verification() {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 0.9}}>
          <Spacer space={ms(15)} />
          <Text style={styles.headerTitle}>{'Verification'}</Text>
          <Text style={styles.headerSubTitle}>{'Code'}</Text>
          <View style={styles.seprator} />

          <Spacer space={ms(45)} />

          <Text style={styles.bannerText}>
            {'Verification Code was sent to '}
          </Text>

          <Spacer space={ms(25)} />
          <View style={styles.editTextView}>
            <Text style={styles.subTitleText}> {'+41 (785)0025674'}</Text>
            <TouchableOpacity>
              <Image source={Edit} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
          <Spacer space={ms(35)} />

          <CodeField
            ref={ref}
            {...prop}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.alignSelfCenter}
            keyboardType={'number-pad'}
            textContentType={'oneTimeCode'}
            renderCell={({index, symbol, isFocused}) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={[
                  styles.cellRoot,
                  {backgroundColor: isFocused ? '#0f0f0f' : '#fff'},
                ]}>
                <Text
                  style={[
                    styles.cellText,
                    {color: isFocused ? '#fff' : '#0f0f0f'},
                  ]}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />

          <Spacer space={ms(25)} />

          <Text style={styles.resendCodeText}>
            {'Resend Code in  '}
            <Text style={styles.countText}>{'00.16'}</Text>
          </Text>
          <Spacer space={ms(70)} />

          <TouchableOpacity style={styles.resendButtonView}>
            <Text>{'Resend'}</Text>
          </TouchableOpacity>

          {/* <Spacer space={ms(10)} /> */}
          <CustomButton title={'Verify'} />
        </View>
        <View style={{flex: 0.1}}>
          <Image
            source={BottomBackground}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
