import React, {useCallback, useMemo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import * as Icon from 'iconsax-react-native';
import {IconsTypes} from '../../../@Types/icon';
import {RFValue} from 'react-native-responsive-fontsize';
import Text from '../Text/Text';

interface ChipsProps {
  options?: {
    textColor?: string;
    leftIconColor?: string;
    rightIconColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    fontSize?: number;
    iconLeftSize?: number;
    iconRightSize?: number;
    onIconLeftPress?: () => void;
    onIconRightPress?: () => void;
  };
  text?: string;
  leftIcon?: IconsTypes;
  rightIcon?: IconsTypes;
  LeftIconComponent?: JSX.Element;
  RightIconComponent?: JSX.Element;
}

const defaultOptions = {
  backgroundColor: '#FFFFFF',
  borderColor: '#0D6EFD',
  leftIconColor: '#0D6EFD',
  rightIconColor: '#0D6EFD',
  textColor: '#000000',
  fontSize: 16,
  iconLeftSize: 16,
  iconRightSize: 16,
};

const Chips: React.FC<ChipsProps> = ({
  leftIcon,
  LeftIconComponent,
  rightIcon,
  RightIconComponent,
  text,
  options,
}) => {
  const opts = {...defaultOptions, ...options};
  const hasLeftIcon: boolean = useMemo(
    () => !!leftIcon || !!LeftIconComponent,
    [leftIcon, LeftIconComponent],
  );
  const LeftIcon = useCallback(() => {
    if (LeftIconComponent) {
      return LeftIconComponent;
    } else if (leftIcon) {
      // @ts-ignore
      const LIcon = Icon[leftIcon];

      return (
        <LIcon
          // @ts-ignore
          size={RFValue(opts.iconLeftSize)}
          color={opts.leftIconColor}
        />
      );
    }
  }, [LeftIconComponent, leftIcon, opts.iconLeftSize, opts.leftIconColor]);

  const hasRightIcon: boolean = useMemo(
    () => !!rightIcon || !!RightIconComponent,
    [rightIcon, RightIconComponent],
  );

  const RightIcon = useCallback(() => {
    if (RightIconComponent) {
      return RightIconComponent;
    } else if (rightIcon) {
      // @ts-ignore
      const RIcon = Icon[rightIcon];
      return (
        <RIcon
          // @ts-ignore
          size={RFValue(opts.iconRightSize)}
          color={opts.rightIconColor}
        />
      );
    }
  }, [RightIconComponent, opts.iconRightSize, opts.rightIconColor, rightIcon]);

  const hasText: boolean = useMemo(() => !!text, [text]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: opts.backgroundColor,
          borderColor: opts.borderColor,
        },
      ]}>
      {hasLeftIcon && (
        <TouchableOpacity
          onPress={opts.onIconLeftPress}
          activeOpacity={opts.onIconLeftPress ? 0.5 : 1}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      {hasText && (
        <View style={styles.text}>
          <Text
            style={[
              // @ts-ignore
              {color: opts.textColor, fontSize: RFValue(opts.fontSize)},
            ]}>
            {text}
          </Text>
        </View>
      )}
      {hasRightIcon && (
        <TouchableOpacity
          onPress={opts.onIconRightPress}
          activeOpacity={opts.onIconRightPress ? 0.5 : 1}>
          <RightIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Chips;
