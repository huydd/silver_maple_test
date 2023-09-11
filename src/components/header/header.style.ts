import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
    color: '#303030',
  },
});
