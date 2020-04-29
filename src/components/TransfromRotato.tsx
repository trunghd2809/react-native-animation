/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {Animated} from 'react-native';

const TransfromRotato = () => {
  const transfromAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const anim1 = Animated.timing(transfromAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false,
    });
    const anim2 = Animated.timing(transfromAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: false,
    });
    const loopAnim = Animated.sequence([anim1, anim2]);
    Animated.loop(loopAnim).start();
  });
  const rotate = transfromAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['30deg', '-30deg'],
  });
  return (
    <Animated.View
      style={{
        width: 300,
        height: 300,
        backgroundColor: 'green',
        transform: [{rotate}],
      }}
    />
  );
};

export default TransfromRotato;
