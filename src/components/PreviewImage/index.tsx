import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

export default function PreviewImage({img}: any) {
  const navigation = useNavigation();
  const favoriteImagesInfo = useSelector(
    (state: RootState) => state.favoriteImages,
  );
  const {favoriteImgs} = favoriteImagesInfo;

  let isFavorite: boolean = favoriteImgs.includes(img);

  const onPress = () => {
    navigation.navigate('ImageScreen', {
      source: img.src.original,
      id: img.id,
      wholeImage: img,
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.root}>
      <Image source={{uri: `${img.src.small}`}} style={styles.previewImg} />
      {isFavorite && (
        <Image source={require('../../assets/liked.png')} style={styles.icon} />
      )}
    </TouchableOpacity>
  );
}
