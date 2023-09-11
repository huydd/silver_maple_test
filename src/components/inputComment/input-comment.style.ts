import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    width: '85%',
    height: 40,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    gap: 4,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 12,
    lineHeight: 14,
    color: '#303030',
    fontWeight: '400',
  },
});
