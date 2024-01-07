import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bottomBar: {
    backgroundColor: '#FFFFFF',
    paddingTop: 30,
    position: 'absolute',
    bottom: 40,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    paddingHorizontal: 20,
    zIndex: 1,
  },
  tabBar: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  sceneContainer: {
    paddingBottom: 110,
  },
  indicator: {
    height: 2,
    position: 'absolute',
    bottom: 99,
    left: 40,
    borderRadius: 10,
    zIndex: 3,
  },
});
