/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {
  addToFavorite,
  removeFromFavorite,
  removeFromGallery,
} from '../../actions/imageActions';

export default function ImageMenu({image}) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favoriteImagesInfo = useSelector(
    (state: RootState) => state.favoriteImages,
  );
  const {favoriteImgs} = favoriteImagesInfo;

  const onAddToFavorite = () => {
    dispatch(addToFavorite(image));
  };
  const onRemoveFromFavorite = () => {
    dispatch(removeFromFavorite(image));
  };

  let isFavorite: boolean = favoriteImgs.includes(image);

  const onRemoveFromGallery = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(image));
    }
    dispatch(removeFromGallery(image));
    navigation.navigate('HomeTabs');
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          !isFavorite ? onAddToFavorite() : onRemoveFromFavorite()
        }
        style={[
          styles.actionContainer,
          {borderBottomColor: '#C4C4C4', borderBottomWidth: 1},
        ]}>
        <Image
          source={
            !isFavorite
              ? require('../../assets/like.png')
              : require('../../assets/liked.png')
          }
          style={styles.icon}
        />
        <Text style={styles.title}>
          {!isFavorite ? 'Добавить в избранное' : 'Убрать из избранного'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onRemoveFromGallery()}
        activeOpacity={0.5}
        style={styles.actionContainer}>
        <Image
          source={require('../../assets/delete.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Удалить изображение</Text>
      </TouchableOpacity>
    </View>
  );
}
