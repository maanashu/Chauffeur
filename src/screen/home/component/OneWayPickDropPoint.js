import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from '../styles';
import {
  CrossBlack,
  Email,
  OutlineCircle,
  Seprator,
  VerticalLineSeprator,
} from '../../../assets';
import {ms} from 'react-native-size-matters';
import {COLORS} from '../../../theme';
import {Spacer} from '../../../assets/Spacer';

const OneWayPickDropPoint = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={OutlineCircle}
          style={{
            height: ms(15),
            width: ms(15),
            tintColor: COLORS.black,
            resizeMode: 'contain',
          }}
        />
        <View style={{paddingVertical: ms(2)}}>
          <Image
            source={VerticalLineSeprator}
            style={{
              height: ms(55),
              resizeMode: 'contain',
            }}
          />
        </View>

        <Image
          source={Email}
          style={{height: ms(15), width: ms(15), tintColor: COLORS.black}}
        />
      </View>
      <View
        style={{
          marginHorizontal: ms(20),
          flex: 1,
        }}>
        <Text
          style={{
            color: '#AEAEAE',
            paddingRight: ms(10),
            fontSize: ms(13),
            fontWeight: '300',
          }}>
          {'Pick Point'}
        </Text>
        <Text
          style={{
            color: '#676767',
            paddingRight: ms(5),
            fontSize: ms(14),
            fontWeight: '300',
          }}
          numberOfLines={1}>
          {'Jamaal Marg, Switzerland 102...'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: ms(4),
            alignItems: 'center',
          }}>
          <Image
            source={Seprator}
            style={{
              width: ms(190),
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              backgroundColor: '#F6F6F6',
              borderRadius: ms(20),
              width: ms(35),
              height: ms(35),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: ms(20), width: ms(20)}}
              source={CrossBlack}
            />
          </View>
        </View>
        <Text
          style={{
            color: '#AEAEAE',
            paddingRight: ms(10),
            fontSize: ms(13),
            fontWeight: '300',
          }}>
          {'Pick Point'}
        </Text>
        <Text
          style={{
            color: '#676767',
            paddingRight: ms(5),
            fontSize: ms(14),
            fontWeight: '300',
          }}
          numberOfLines={1}>
          {'Kehlhof, Forrenböhlstrasse 57 newyork'}
        </Text>
      </View>
    </View>
  );
};

export default OneWayPickDropPoint;
