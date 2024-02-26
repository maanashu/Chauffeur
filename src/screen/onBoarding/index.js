import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ActiveLine,
  AirportTransfers,
  BottomBackground,
  CityTrasport,
  LeftArrow,
  LeftCarBottomBackground,
  Logo,
  Onboarding_1,
  OutlineCircle,
  RightCarBottomBackground,
} from '../../assets';
import {ms} from 'react-native-size-matters';
import {Spacer} from '../../assets/Spacer';
import CustomButton from '../../component/CustomButton';
import styles from './styles';
import {NAVIGATION} from '../../constants';
import {navigate} from '../../navigation/NavigationRef';
import {ScreenWrapper} from '../../component/ScreenWrapper';

export function OnBoarding() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [Onboarding_1, CityTrasport, AirportTransfers];

  const title = [
    'WHEREVER YOU WANT TO GO WE WILL GET YOU THERE!',
    'CITY TRANSFERS',
    'AIRPORT TRANSFERS',
  ];

  const subTitle = [
    'CHAUFFEURS & SERVICES is a distinguished luxury transportation company.',
    'With Chauffeurs & Service city transfers, traveling short orlong distances is more comfortable than ever.',
    'We offer a 24 hour airport transfer service to all airports inSwitzerland and in serveral cities around the globe.',
  ];

  const onNextPress = () => {
    setImageIndex(prevState => prevState + 1);
  };
  const onBackPress = () => {
    setImageIndex(prevState => prevState - 1);
  };
  const bottomBackground = [
    BottomBackground,
    LeftCarBottomBackground,
    RightCarBottomBackground,
  ];

  return (
    <ScreenWrapper>
      <ImageBackground
        source={images[imageIndex]}
        style={styles.headerImageBackGround}
        resizeMode="cover">
        {imageIndex > 0 && (
          <TouchableOpacity style={styles.backButtonView} onPress={onBackPress}>
            <Image source={LeftArrow} style={styles.backIcon} />
          </TouchableOpacity>
        )}
      </ImageBackground>

      <View style={styles.activeBarView}>
        <Image
          source={imageIndex === 0 ? ActiveLine : OutlineCircle}
          style={imageIndex === 0 ? styles.activeIcon : styles.inActiveIcon}
        />
        <Spacer horizontal={ms(5)} />
        <Image
          source={imageIndex === 1 ? ActiveLine : OutlineCircle}
          style={imageIndex === 1 ? styles.activeIcon : styles.inActiveIcon}
        />
        <Spacer horizontal={ms(5)} />

        <Image
          source={imageIndex === 2 ? ActiveLine : OutlineCircle}
          style={imageIndex === 2 ? styles.activeIcon : styles.inActiveIcon}
        />
      </View>

      <Spacer space={ms(15)} />
      <Text style={styles.title}>{title[imageIndex]}</Text>
      <Spacer space={ms(10)} />

      <Text style={styles.subTitle}>{subTitle[imageIndex]}</Text>

      {imageIndex < 2 ? (
        <CustomButton title={'Next'} onPress={onNextPress} />
      ) : (
        <CustomButton
          title={'Get Started'}
          onPress={() => navigate(NAVIGATION.login)}
        />
      )}

      <ImageBackground
        source={BottomBackground}
        resizeMode="cover"
        style={styles.bottomImageView}>
        {imageIndex < 2 ? (
          <TouchableOpacity
            style={styles.skipView}
            onPress={() => navigate(NAVIGATION.login)}>
            <Text
              style={{
                fontSize: ms(16),
                color: '#828282',
                fontWeight: '500',
              }}>
              {'Skip'}
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </ImageBackground>
    </ScreenWrapper>
  );
}
