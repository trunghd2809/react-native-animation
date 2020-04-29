import React, {useRef, useEffect} from 'react';
import {Animated, Text} from 'react-native';

const FadeView = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        opacity: fadeAnim,
      }}>
      <Text>Fading in</Text>
    </Animated.View>
  );
};

export default FadeView;
