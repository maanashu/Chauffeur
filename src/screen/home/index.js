import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import LinearGradient from 'react-native-linear-gradient';
import {Airplane, City, HomeBanner, Linear, Menu} from '../../assets';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../theme';
import {Spacer} from '../../assets/Spacer';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      <View
        style={{
          backgroundColor: index !== selectedIndex ? '#727272' : 'transparent',
          width: ms(2),
          marginVertical: ms(4),
        }}
      />
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
      <View
        style={{
          backgroundColor:
            index !== selectedIndex && index > 2 && index
              ? '#727272'
              : 'transparent',
          width: ms(2),
          marginVertical: ms(4),
        }}
      />
    </View>
  );
  return (
    <ScreenWrapper>
      <View style={{backgroundColor: COLORS.black, flex: 1}}>
        <ImageBackground
          source={HomeBanner}
          style={{width: width, height: ms(300), resizeMode: 'contain'}}>
          <ImageBackground
            source={Linear}
            style={{width: width, height: ms(300), resizeMode: 'contain'}}>
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
      </View>
    </ScreenWrapper>
  );
}
