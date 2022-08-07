import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';


const AcceptDeliveryButton = () => {
  const [progress, setProgress] = useState(0); // 셋팅
  const [pressIn, setPressIn] = useState(false);

  let animation = useRef(new Animated.Value(0));

  const width = animation.current.interpolate({
    inputRange: [0, 10], // 셋팅
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: pressIn ? 2000 : 0,
      useNativeDriver: true
    }).start();
  }, [pressIn, progress]);

  return (
    <>
      <TouchableOpacity
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPressIn={() => [setPressIn(true), setProgress(10)]}
        onPressOut={() => [setPressIn(false), setProgress(0)]}
        delayLongPress={2000}
        onLongPress={() => console.log('성공')}
        activeOpacity={1}>
        <View style={[styles.progressBar, styles.absoluteFill]}>
          <Animated.View
            style={{backgroundColor: 'white', opacity: 0.2}}>
            <Text
              style={{
                color: 'blue',
                height: 100,
              }}
            />
          </Animated.View>
        </View>
        <Text style={{color: 'white'}}>꾹 눌러 배달 수락</Text>
        <Text style={{color: 'white', marginTop: 10}}>
          1~2초 정도 길게 눌러주세요
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  progressBar: {
    width: 100,
    zIndex: 1,
    // backgroundColor: '#888888',
  },
});

export default AcceptDeliveryButton;
