import React from 'react';
import {Text} from 'react-native';

interface IBaseText {
  lineHeight?: number;
  size?: number;
  color?: string;
  fontWeight?: any;
  children: any;
}

const BaseText = ({
  size = 12,
  color = '#303030',
  fontWeight = '400',
  lineHeight = 14,
  children,
}: IBaseText) => {
  return (
    <Text
      style={{
        fontSize: size,
        color,
        fontWeight,
        lineHeight,
        textAlign: 'justify',
        flexShrink: 1,
      }}>
      {children}
    </Text>
  );
};

export default React.memo(BaseText);
