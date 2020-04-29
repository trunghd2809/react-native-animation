import React, {useRef, useEffect} from 'react';
import {Animated, Text, Easing} from 'react-native';

const SlideView = () => {
  const marginAnim = useRef(new Animated.Value(-700)).current;
  useEffect(() => {
    Animated.timing(marginAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        marginLeft: marginAnim,
      }}>
      <Text>Hello</Text>
    </Animated.View>
  );
};

export default SlideView;
