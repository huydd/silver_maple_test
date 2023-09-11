import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BaseText from '../../../../components/baseText/text.component';

import styles from './upgrade-account.style';
import {
  iconCancel,
  iconTicketWhite,
  imgCoverUpgradeAccount,
} from '../../../../../assets/images';

interface IUpgradeAccount {}

const UpgradeAccount = ({}: IUpgradeAccount) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imgCoverUpgradeAccount}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.content}>
          <BaseText
            size={32}
            lineHeight={40}
            color="#4920BC"
            fontWeight={'700'}>
            Upgrade Account
          </BaseText>
          <LinearGradient
            colors={['#FFEDAC', '#F7AD1E', '#FFCD82']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.ticket}>
            <Image
              source={iconTicketWhite}
              style={{width: 32, height: 20}}
              resizeMode="contain"
            />
            <BaseText size={14} lineHeight={16} color="#FFF" fontWeight={'700'}>
              Bình chọn vé vàng
            </BaseText>
            <Image
              source={iconCancel}
              style={{width: 24, height: 24}}
              resizeMode="contain"
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  );
};

export default React.memo(UpgradeAccount);
