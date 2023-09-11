import React from 'react';
import {Image, View} from 'react-native';
import styles from './button.style';

interface IIconButton {
  iconSource: any;
}

const IconButton = ({iconSource}: IIconButton) => {
  return (
    <View style={styles.container}>
      <Image source={iconSource} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

export default React.memo(IconButton);
