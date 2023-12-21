import React, {useEffect} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import * as Icon from 'iconsax-react-native';
import Text from '../../Components/Text/Text';
import styles from './styles';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';

interface IconHelpProps {
  theme?: ThemeEntry;
}

const IconHelpScreen: React.FC<IconHelpProps> = ({theme = themes.light}) => {
  const keysIcon = Object.keys(Icon);
  const [iconsList, setIconsList] = React.useState(keysIcon.slice(0, 100));
  const [search, setSearch] = React.useState<string>('');
  const [pagination, setPagination] = React.useState<number>(1);

  const onChangeText = (text: string) => {
    setSearch(text);
  };

  useEffect(() => {
    if (search === '') {
      setPagination(1);
    }
    const filtered = keysIcon.filter(key => {
      const pattern = new RegExp(search, 'i');
      if (pattern.test(key)) {
        return key;
      }
    });
    setIconsList(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  useEffect(() => {
    if (pagination * 100 >= keysIcon.length) {
      setIconsList(keysIcon);
    } else {
      setIconsList(keysIcon.slice(0, pagination * 100));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);
  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme?.colors.background}]}>
      <View style={styles.input}>
        <Input
          type={INPUT_TYPE.TEXT}
          onChangeText={onChangeText}
          placeholder="Buscar"
          value={search}
        />
      </View>
      <ScrollView
        onScroll={({nativeEvent}) => {
          const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;
          const isCloseToBottom =
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - 20;

          if (isCloseToBottom && search === '') {
            setPagination(pagination + 1);
          }
        }}
        scrollEventThrottle={400}
        style={[styles.container, styles.scroll]}>
        <View style={styles.content}>
          {iconsList.map((key, index) => {
            const IconToUse = Icon[key as keyof typeof Icon];
            return (
              <View
                style={[
                  styles.iconContainer,
                  {
                    backgroundColor: theme?.colors.card,
                    borderColor: theme?.colors.border,
                  },
                ]}
                key={key}>
                <IconToUse key={key} size={30} color={theme?.colors.icon} />
                <Text style={[styles.text, {color: theme?.colors.icon}]}>
                  {index}-{key}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IconHelpScreen;
