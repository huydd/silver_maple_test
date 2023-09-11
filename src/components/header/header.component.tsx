import React from 'react';
import {Text, View} from 'react-native';
import IconButton from '../iconButton/button.component';
import styles from './header.style';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <IconButton
          iconSource={require('../../../assets/images/icon_back.png')}
        />
        <Text style={styles.txtTitle}>Tên chương truyện...</Text>
      </View>
      <View style={styles.right}>
        <IconButton
          iconSource={require('../../../assets/images/icon_app.png')}
        />
        <IconButton
          iconSource={require('../../../assets/images/icon_edit.png')}
        />
        <IconButton
          iconSource={require('../../../assets/images/icon_menu.png')}
        />
      </View>
    </View>
  );
};

export default React.memo(Header);
