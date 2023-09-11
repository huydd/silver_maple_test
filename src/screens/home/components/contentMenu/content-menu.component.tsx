import React from 'react';
import {Image, View} from 'react-native';
import BaseText from '../../../../components/baseText/text.component';

import styles from './content-menu.style';
import {iconDiscuss, iconReport, iconShare} from '../../../../../assets/images';

interface IContentMenu {}

const ContentMenu = ({}: IContentMenu) => {
  return (
    <View style={styles.container}>
      <View style={styles.inRow}>
        <Image
          source={iconShare}
          style={{width: 16, height: 16}}
          resizeMode="contain"
        />
        <BaseText size={14} lineHeight={16} color="#303030" fontWeight={'500'}>
          Chia sẻ
        </BaseText>
      </View>
      <View style={styles.inRow}>
        <Image
          source={iconDiscuss}
          style={{width: 16, height: 16}}
          resizeMode="contain"
        />
        <BaseText size={14} lineHeight={16} color="#303030" fontWeight={'500'}>
          Tranh luận
        </BaseText>
      </View>
      <View style={styles.inRow}>
        <Image
          source={iconReport}
          style={{width: 16, height: 16}}
          resizeMode="contain"
        />
        <BaseText size={14} lineHeight={16} color="#303030" fontWeight={'500'}>
          Báo cáo
        </BaseText>
      </View>
    </View>
  );
};

export default React.memo(ContentMenu);
