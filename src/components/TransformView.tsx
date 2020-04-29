/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const TransformView = () => {
  const colorAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const anim1 = Animated.timing(colorAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    });
    const anim2 = Animated.timing(colorAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: false,
    });
    const loopAnim = Animated.sequence([anim1, anim2]);
    Animated.loop(loopAnim).start();
  });
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'yellow'],
  });
  return (
    <Animated.View
      style={{
        width: 300,
        height: 300,
        backgroundColor,
      }}
    />
  );
};

export default TransformView;
