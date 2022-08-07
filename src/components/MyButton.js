import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';

const MyButton = () => {
  const handlePressIn = useCallback(() => {
    console.log('handlePressIn');
  }, []);

  const handlePressOut = useCallback(() => {
    console.log('handlePressOut');
  }, []);

  return (
    <TouchableOpacity
      containerStyle={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      delayLongPress={2000}
      onLongPress={() => {
        console.log('롱프레스 성공');
      }}>
      <View style={styles.insideView}>
        <Text>하이루?</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 50,
  },
  insideView: {},
});

export default MyButton;
