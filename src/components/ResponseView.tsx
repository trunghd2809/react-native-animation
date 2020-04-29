/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Animated, Easing} from 'react-native';
import icon from '../../assets/icon.jpg';

const ResponseView = () => {
  const [locX, setLocationX] = useState(0);
  const [locY, setLocationY] = useState(0);
  const [marginLeft, setMarginLeft] = useState(new Animated.Value(0));
  const [marginTop, setMarginTop] = useState(new Animated.Value(0));
  const onPress = (evt: any) => {
    const {locationX, locationY} = evt.nativeEvent;
    setLocationY(locationY);
    setLocationX(locationX);
  };
  const onMove = (evt: any) => {
    const {locationX, locationY} = evt.nativeEvent;
    const marLeft = new Animated.Value(locationX - locX);
    const marTop = new Animated.Value(locationY - locY);
    setMarginLeft(marLeft);
    setMarginTop(marTop);
  };
  const onRelease = (evt: any) => {
    const anim1 = Animated.timing(marginLeft, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    });
    const anim2 = Animated.timing(marginTop, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    });
    Animated.parallel([anim1, anim2]).start();
  };
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
      }}>
      <Animated.Image
        source={icon}
        style={{width: 100, height: 100, marginLeft, marginTop}}
      />
    </View>
  );
};

export default ResponseView;
