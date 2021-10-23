import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    left: 0,
    height: 60,
    backgroundColor: '#790598',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    position: 'absolute',
    left: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    alignItems: 'center',
    marginBottom: 5,
    width: '100%',
  },
});

export default styles;
