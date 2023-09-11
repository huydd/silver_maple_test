import React from 'react';
import {Image, View} from 'react-native';
import BaseText from '../../components/baseText/text.component';
import styles from './footer.style';
import {
  iconBack,
  iconForwardActive,
  iconTableContent,
} from '../../../assets/images';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={iconTableContent}
          style={{width: 16, height: 16}}
          resizeMode="contain"
        />
        <BaseText size={12} lineHeight={14} color="#303030" fontWeight={'500'}>
          Mục lục
        </BaseText>
      </View>
      <View style={styles.right}>
        <View style={styles.item}>
          <Image
            source={iconBack}
            style={{width: 16, height: 16}}
            resizeMode="contain"
          />
          <BaseText
            size={12}
            lineHeight={14}
            color="#303030"
            fontWeight={'500'}>
            Quay lại
          </BaseText>
        </View>
        <View style={styles.divider} />
        <View style={styles.item}>
          <BaseText
            size={12}
            lineHeight={14}
            color="#528AFF"
            fontWeight={'500'}>
            Tiếp theo
          </BaseText>
          <Image
            source={iconForwardActive}
            style={{width: 16, height: 16}}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default React.memo(Footer);
