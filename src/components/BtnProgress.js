import React, {useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CircularProgress from './CircularProgress';

const BtnProgress = () => {
  const [progress, setProgress] = useState(0);

  const handlePressIn = useCallback(() => {}, []);

  const handlePressOut = useCallback(() => {}, []);

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      delayLongPress={2000}
      onLongPress={() => {
        console.log('롱프레스 성공');
      }}
      activeOpacity={1}>
      <CircularProgress progress={90} />
    </TouchableOpacity>
  );
};

export default BtnProgress;
