/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Animated, Dimensions} from 'react-native';
import icon from '../../assets/icon.jpg';

const W = Dimensions.get('window').width;
const GallaryView = () => {
  const [rotate, setRotate] = useState(new Animated.Value(0));
  const [X, setX] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const onPress = (evt: any) => {
    const {locationX} = evt.nativeEvent;
    setX(locationX);
  };
  const onMove = (evt: any) => {
    const {locationX} = evt.nativeEvent;
    const ratio = new Animated.Value((1.5 * (locationX - X)) / W);
    setRotate(ratio);
    setOpacity(ratio);
  };
  const onRelease = (evt: any) => {
    Animated.timing(rotate, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const rotateAnin = rotate.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-30deg', '30deg'],
  });
  const opacityAnin = rotate.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 1, 0],
  });
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.Image
        source={icon}
        style={{
          width: 100,
          height: 100,
          transform: [{rotate: rotateAnin}],
          opacity: opacityAnin,
        }}
      />
    </View>
  );
};

export default GallaryView;
