import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    zIndex: 99999,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 10,
    position: 'absolute',
    top: -20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#94A8DC',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 4,
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
