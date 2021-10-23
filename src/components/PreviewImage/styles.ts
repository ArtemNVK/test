import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: 81,
    height: 81,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e4e2e2',
  },
  previewImg: {
    resizeMode: 'contain',
    width: 81,
    height: 81,
  },
  icon: {
    width: 20,
    height: 17.14,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default styles;
