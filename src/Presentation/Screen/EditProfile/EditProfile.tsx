import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
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
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';
import {UserViewInput} from '../../../Domain/Entity/User/User';
import {fetchEditUser} from '../../../Infrastructure/Store/Actions/UserAction';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';

const EditProfile: React.FC<EditProfileScreenScreenNavigationProps> = ({
  navigation,
}) => {
  const userState = useSelector(userSelector);
  const dispatch = useDispatch();
  const [imageUri, setImageUri] = useState<string>(
    userState.user.imageUri || '',
  );
  const [username, setUsername] = useState<string>(userState.user.username);
  const [country, setCountry] = useState<string>(userState.user?.country || '');
  const [state, setState] = useState<string>(userState.user.state || '');
  const [age, setAge] = useState<string>(userState.user.age?.toString() || '');
  const [bio, setBio] = useState<string>(userState.user.bio || '');

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
  const isLoading = useMemo(() => userState.loading, [userState.loading]);

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
        let isFocused = LocalizationService.editProfile.username;
        if (refTxtUsnm.current?.isFocused()) {
        } else if (refTxtCountry.current?.isFocused()) {
          isFocused = LocalizationService.editProfile.country;
        } else if (refTxtState.current?.isFocused()) {
          isFocused = LocalizationService.editProfile.state;
        } else if (refTxtAge.current?.isFocused()) {
          isFocused = LocalizationService.editProfile.age;
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
          ? LocalizationService.editProfile.username
          : index === 2
          ? LocalizationService.editProfile.country
          : index === 3
          ? LocalizationService.editProfile.state
          : index === 4
          ? LocalizationService.editProfile.age
          : LocalizationService.editProfile.bio;
      newLayoutArr[name] = event.nativeEvent.layout;
      setLayoutArray(newLayoutArr);
    }
  };

  const handleSave = useCallback(() => {
    const editUser: UserViewInput = {
      username,
      country,
      state,
      age: Number(age),
      bio,
      id: userState.user.id,
      imageUri,
    };
    // @ts-ignore
    dispatch(fetchEditUser({token: userState.user.token, user: editUser}));
    navigation.goBack();
  }, [
    navigation,
    username,
    country,
    state,
    age,
    bio,
    userState.user.id,
    userState.user.token,
    imageUri,
    dispatch,
  ]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(scaleAnimation.value),
    };
  });

  return (
    <SceneView>
      <View style={styles.container}>
        <ScrollView
          onLayout={(e: any) => onLayout(e, -1)}
          ref={scrollRef}
          style={styles.scrollView}
          stickyHeaderIndices={[6]}>
          <View onLayout={e => onLayout(e, 0)} style={styles.input}>
            <UploadImage
              title={LocalizationService.editProfile.profileImage}
              containerStyle={styles.image}
              onChangeImage={(src: string) => setImageUri(src)}
            />
          </View>
          <View onLayout={e => onLayout(e, 1)} style={styles.input}>
            <Input
              ref={refTxtUsnm}
              title={LocalizationService.editProfile.username}
              placeholder={LocalizationService.editProfile.username}
              value={username}
              onChangeText={(text: string) => setUsername(text)}
              type={INPUT_TYPE.TEXT}
            />
          </View>
          <View onLayout={e => onLayout(e, 2)} style={styles.input}>
            <Input
              ref={refTxtCountry}
              title={LocalizationService.editProfile.country}
              placeholder="Mexico"
              value={country}
              onChangeText={(text: string) => setCountry(text)}
              type={INPUT_TYPE.TEXT}
            />
          </View>
          <View onLayout={e => onLayout(e, 3)} style={styles.input}>
            <Input
              ref={refTxtState}
              title={LocalizationService.editProfile.state}
              placeholder="Torreón"
              value={state}
              onChangeText={(text: string) => setState(text)}
              type={INPUT_TYPE.TEXT}
            />
          </View>
          <View onLayout={e => onLayout(e, 4)} style={styles.input}>
            <Input
              ref={refTxtAge}
              title={LocalizationService.editProfile.age}
              placeholder="21"
              type={INPUT_TYPE.NUMBER}
              value={age}
              onChangeText={(text: string) => setAge(text)}
            />
          </View>
          <View
            // ref={refTxtBio}
            onLayout={e => onLayout(e, 5)}
            style={styles.input}>
            <ExpandableTextInput
              text={LocalizationService.editProfile.bio}
              placeholder={LocalizationService.editProfile.bio}
              value={bio}
              onChangeText={(text: string) => setBio(text)}
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
          <TouchableOpacity
            disabled={isLoading}
            onPress={handleSave}
            style={styles.button}
            activeOpacity={0.8}>
            <View style={styles.buttonTextContainer}>
              <View style={styles.buttonIndicator}>
                <ActivityIndicator
                  color={'#fff'}
                  animating={isLoading}
                  size={'small'}
                />
              </View>
              <Text style={styles.buttonText}>
                {LocalizationService.button.save}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SceneView>
  );
};

export default EditProfile;
