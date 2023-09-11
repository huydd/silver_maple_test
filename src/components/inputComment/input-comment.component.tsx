import React, {useEffect, useRef} from 'react';
import {Image, TextInput, View} from 'react-native';
import BaseText from '../../components/baseText/text.component';
import styles from './input-comment.style';
import {imgAvatar2} from '../../../assets/images';

interface IInputComment {
  tag: string;
}

const InputComment = ({tag}: IInputComment) => {
  const refInput = useRef<any>();

  useEffect(() => {
    if (tag) {
      // refInput.current?.focus();
    }
  }, [tag]);

  return (
    <View style={styles.container}>
      <Image
        source={imgAvatar2}
        style={{width: 24, height: 24}}
        resizeMode="contain"
      />
      {tag && (
        <BaseText size={14} lineHeight={16} color="#528AFF" fontWeight={'500'}>
          {`@${tag}`}
        </BaseText>
      )}
      <TextInput
        ref={refInput}
        style={styles.input}
        placeholder={tag ? '' : 'Viết bình luận...'}
        placeholderTextColor={'#B5B5B5'}
      />
    </View>
  );
};

export default React.memo(InputComment);
