import React, {useMemo} from 'react';

import {
  StyleSheet,
  View,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';

import PropTypes from 'prop-types';
import {COLORS} from '../theme';

export function ScreenWrapper(props) {
  const styles = useMemo(() =>
    StyleSheet.create({
      containerStyle: {
        backgroundColor: COLORS.sky_grey,
        flex: 1,
      },
    }),
  );

  return (
    <SafeAreaView style={[styles.containerStyle, props.containerPropStyle]}>
      <View
        style={{
          flex: 1,
          overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
        }}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
        {props.children}
      </View>
    </SafeAreaView>
  );
}

// defines the types for prop

ScreenWrapper.propTypes = {
  // styles: PropTypes.style,
  backgroundColor: PropTypes.string,
  containerPropStyle: PropTypes.shape({}),
};

// defines the default value for the prop

ScreenWrapper.defaultProps = {
  backgroundColor: COLORS.white,
  containerPropStyle: {},
  styles: {},
};
