import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  LayoutChangeEvent,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {EditProfileScreenScreenNavigationProps} from '../../../@Types/navigation.settings';
import UploadImage from '../../Components/UploadImage/UploadImage';
import Input, {inputRef} from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum';
import ExpandableTextInput from '../../Components/ExpandibleTextInput/ExpandibleTextInput';
import styles from './styles';
import Text from '../../Components/Text/Text';
import {useKeyboardVisible} from '../../../Hook/useKeyboardVisible';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const EditProfile: React.FC<EditProfileScreenScreenNavigationProps> = ({}) => {
  const {isKeyboardVisible, keyboardHeight} = useKeyboardVisible();
  const scaleAnimation = useSharedValue(1);

  const handleScaleToggle = useCallback(
    (size: number = 1) => {
      scaleAnimation.value = size;
    },
    [scaleAnimation],
  );

  const scrollRef = useRef<ScrollView>(null);
  const refTxtUsnm = React.createRef<inputRef>();
  const refTxtCountry = React.createRef<inputRef>();
  const refTxtState = React.createRef<inputRef>();
  const refTxtAge = React.createRef<inputRef>();
  // TODO: Está pendiente hacer ref de este componente
  // const refTxtBio = React.createRef<inputRef>();

  const [layoutArray, setLayoutArray] = useState<{[key: string]: any}>({
    Username: {},
    Country: {},
    State: {},
    Age: {},
    Bio: {},
  });

  useEffect(() => {
    if (isKeyboardVisible) {
      const timeout = setTimeout(() => {
        let isFocused = 'Username';
        if (refTxtUsnm.current?.isFocused()) {
        } else if (refTxtCountry.current?.isFocused()) {
          isFocused = 'Country';
        } else if (refTxtState.current?.isFocused()) {
          isFocused = 'State';
        } else if (refTxtAge.current?.isFocused()) {
          isFocused = 'Age';
        }

        const layoutFoucsed = layoutArray[isFocused];
        scrollRef.current?.scrollTo({
          x: 0,
          y: layoutFoucsed.y - layoutFoucsed.height,
          animated: true,
        });
        timeout && clearTimeout(timeout);
      }, 50);
    }
  }, [
    handleScaleToggle,
    isKeyboardVisible,
    layoutArray,
    refTxtAge,
    refTxtCountry,
    refTxtState,
    refTxtUsnm,
    scrollRef,
  ]);

  useEffect(() => {
    const arrayRefs = [refTxtUsnm, refTxtCountry, refTxtState, refTxtAge];
    const isFocused = arrayRefs.some(ref => ref.current?.isFocused());
    handleScaleToggle(isFocused ? 0 : keyboardHeight);
  }, [
    handleScaleToggle,
    keyboardHeight,
    refTxtAge,
    refTxtCountry,
    refTxtState,
    refTxtUsnm,
  ]);

  const onLayout = (event: LayoutChangeEvent, index: number) => {
    if (index !== -1) {
      const newLayoutArr = layoutArray;
      const name =
        index === 1
          ? 'Username'
          : index === 2
          ? 'Country'
          : index === 3
          ? 'State'
          : index === 4
          ? 'Age'
          : 'Bio';
      newLayoutArr[name] = event.nativeEvent.layout;
      setLayoutArray(newLayoutArr);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(scaleAnimation.value),
    };
  });

  return (
    <View style={styles.container}>
      <ScrollView
        onLayout={(e: any) => onLayout(e, -1)}
        ref={scrollRef}
        style={styles.scrollView}
        stickyHeaderIndices={[6]}>
        <View onLayout={e => onLayout(e, 0)} style={styles.input}>
          <UploadImage title="Profile Image" containerStyle={styles.image} />
        </View>
        <View onLayout={e => onLayout(e, 1)} style={styles.input}>
          <Input
            ref={refTxtUsnm}
            title="Username"
            placeholder="Username"
            type={INPUT_TYPE.TEXT}
          />
        </View>
        <View onLayout={e => onLayout(e, 2)} style={styles.input}>
          <Input
            ref={refTxtCountry}
            title="Country"
            placeholder="Mexico"
            type={INPUT_TYPE.TEXT}
          />
        </View>
        <View onLayout={e => onLayout(e, 3)} style={styles.input}>
          <Input
            ref={refTxtState}
            title="State"
            placeholder="Torreón"
            type={INPUT_TYPE.TEXT}
          />
        </View>
        <View onLayout={e => onLayout(e, 4)} style={styles.input}>
          <Input
            ref={refTxtAge}
            title="Age"
            placeholder="21"
            type={INPUT_TYPE.NUMBER}
          />
        </View>
        <View
          // ref={refTxtBio}
          onLayout={e => onLayout(e, 5)}
          style={styles.input}>
          <ExpandableTextInput
            text="Bio"
            placeholder="Bio"
            containerStyle={styles.inputExpandible}
            placeholderTextColor={'#949BA6'}
          />
        </View>

        <View
          style={{
            height: keyboardHeight,
          }}
        />
        <Animated.View style={[styles.box, animatedStyle]} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
