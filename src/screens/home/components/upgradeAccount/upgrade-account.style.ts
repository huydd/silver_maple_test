import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 103,
    marginTop: 8,
  },
  container: {
    height: 140,
  },
  content: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticket: {
    position: 'absolute',
    bottom: -10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 24,
    width: 211,
    height: 40,
    paddingHorizontal: 8,
    zIndex: 99999,
  },
});
