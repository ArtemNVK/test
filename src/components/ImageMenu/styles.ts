import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    width: 345,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 42.5,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
});

export default styles;
