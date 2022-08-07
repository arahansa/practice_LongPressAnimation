import React, {useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';

const ButtonThree = () => {
  const handleButtonTouch = useCallback(() => {
    console.log('handleButtonTouch');
  }, []);

  return (
    <TouchableOpacity onPress={handleButtonTouch}>
      <Text>버튼3</Text>
    </TouchableOpacity>
  );
};

export default ButtonThree;
