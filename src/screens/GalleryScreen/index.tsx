/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import PreviewImage from '../../components/PreviewImage';
import {loadImages} from '../../actions/imageActions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {RootState} from '../../../store';

export default function GalleryScreen() {
  const {images} = useSelector((state: RootState) => state.images);
  // const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  const onLoadPreviewImages = () => {
    dispatch(loadImages());
  };

  useEffect(() => {
    onLoadPreviewImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      {!images ? (
        <FlatList
          data={new Array(32).fill(1)}
          renderItem={({item}) => (
            <SkeletonPlaceholder>
              <View
                style={{width: 81, height: 81, borderRadius: 10, margin: 5}}
              />
            </SkeletonPlaceholder>
          )}
          numColumns={4}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={images}
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
