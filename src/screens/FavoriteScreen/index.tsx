/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import PreviewImage from '../../components/PreviewImage';

export default function FavoriteScreen() {
  const favoriteImagesInfo = useSelector(
    (state: RootState) => state.favoriteImages,
  );
  const {favoriteImgs} = favoriteImagesInfo;

  return (
    <View style={styles.root}>
      {favoriteImgs.length === 0 ? (
        <View style={styles.warningContainer}>
          <Text style={styles.warning}>Пока что избранного нет.</Text>
        </View>
      ) : (
        <FlatList
          data={favoriteImgs}
          renderItem={({item}) => <PreviewImage img={item} />}
          numColumns={4}
          style={styles.list}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
