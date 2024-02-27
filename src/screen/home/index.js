import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import LinearGradient from 'react-native-linear-gradient';
import {
  Airplane,
  City,
  HomeBackGround,
  HomeBanner,
  Linear,
  Menu,
} from '../../assets';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../theme';
import {Spacer} from '../../assets/Spacer';
import {useIsFocused} from '@react-navigation/native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function Home() {
  const isFocused = useIsFocused();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [activeTab, setActiveTab] = useState(0);

  const rideSelectedWay = [
    {
      id: 1,
      image: City,
      title: 'City Transfers',
      onPress: () => setSelectedIndex(0),
    },
    {
      id: 2,
      image: Airplane,
      title: 'Airport Transfers',
      onPress: () => setSelectedIndex(1),
    },
    {
      id: 3,
      image: City,
      title: 'Events Transportation',
      onPress: () => setSelectedIndex(2),
    },
  ];

  const renderItem = ({item, index}) => (
    <View style={{flexDirection: 'row'}}>
      {selectedIndex == 2 && (
        <View
          style={{
            backgroundColor:
              index === selectedIndex || index == 0 ? 'transparent' : '#727272',
            width: ms(2),
            marginVertical: ms(4),
          }}
        />
      )}

      <TouchableOpacity
        style={{
          width: width / 3 - ms(25),
          backgroundColor: index == selectedIndex ? '#727272' : 'transparent',
          // marginHorizontal: ms(3.5),
          height: ms(75),
          overflow: 'hidden',
          borderRadius: ms(15),
          alignItems: 'center',
          paddingHorizontal: ms(10),
          alignSelf: 'center',
          justifyContent: 'center',
        }}
        onPress={item?.onPress}>
        <Image
          source={item?.image}
          resizeMode="contain"
          style={{height: ms(20), width: ms(20)}}
        />
        <Text
          style={{
            fontSize: ms(14),
            fontWeight: 'bold',
            color: COLORS.white,
            textAlign: 'center',
          }}>
          {item?.title}
        </Text>
      </TouchableOpacity>

      {selectedIndex == 0 && (
        <View
          style={{
            backgroundColor:
              index === selectedIndex || index == 2 ? 'transparent' : '#727272',
            width: ms(2),
            marginVertical: ms(4),
          }}
        />
      )}
    </View>
  );

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        StatusBar.setBackgroundColor('#292929', true);
        StatusBar.setBarStyle('light-content');
      }, 300);
    }
  }, [isFocused]);

  return (
    <ScreenWrapper>
      <ImageBackground
        source={HomeBackGround}
        style={{width: width, height: height, resizeMode: 'contain'}}>
        <ImageBackground
          source={HomeBanner}
          style={{width: width, height: ms(300), resizeMode: 'contain'}}>
          <ImageBackground
            source={Linear}
            style={{width: width, height: ms(305), resizeMode: 'contain'}}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                height: ms(47),
                width: ms(47),
                marginTop: ms(20),
                borderWidth: ms(1),
                justifyContent: 'center',
                borderRadius: ms(14),
                alignItems: 'center',
                marginRight: ms(15),
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              }}>
              <Image source={Menu} style={{width: ms(22), height: ms(15)}} />
            </TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                bottom: ms(20),
                left: 0,
                right: 0,
              }}>
              <Text
                style={{
                  fontSize: ms(22),
                  fontWeight: 'bold',
                  color: COLORS.white,
                  textAlign: 'center',
                }}>
                {'BOOK A RIDE'}
              </Text>

              <Spacer space={ms(10)} />

              <FlatList
                data={rideSelectedWay}
                numColumns={3}
                renderItem={renderItem}
                style={{
                  borderColor: '#727272',
                  borderRadius: ms(14),
                  borderWidth: 1,
                  marginHorizontal: ms(25),
                  padding: ms(3),
                  alignSelf: 'center',
                }}
              />
            </View>
          </ImageBackground>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
            marginHorizontal: ms(25),
            marginVertical: ms(10),
            borderRadius: ms(30),
            marginBottom: ms(25),
            padding: ms(20),
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                flex: 1,
                padding: ms(10),
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: activeTab === 0 ? ms(3) : 0,
              }}
              onPress={() => setActiveTab(0)}>
              <Text
                style={{
                  fontSize: ms(16),
                  color: COLORS.black,
                  fontWeight: activeTab === 0 ? '800' : '500',
                }}>
                {'One Way'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                padding: ms(10),
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: activeTab === 1 ? ms(3) : 0,
              }}
              onPress={() => setActiveTab(1)}>
              <Text
                style={{
                  fontSize: ms(16),
                  color: COLORS.black,
                  fontWeight: activeTab === 1 ? '800' : '500',
                }}>
                {'By Hour'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScreenWrapper>
  );
}
