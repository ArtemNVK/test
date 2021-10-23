import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  NavigatorScreenParams,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import ImageMenu from '../../components/ImageMenu';

type TabParamList = {
  ImageScreen: NavigatorScreenParams<StackParamList>;
  Props: {source: string; id: any; wholeImage: any};
};

export default function ImageScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const source: any = route?.params?.source;
  const id: any = route?.params?.id;
  const image: any = route?.params?.wholeImage;

  useEffect(() => {
    navigation.setOptions({title: `IMG-${id}`});
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('HomeTabs')}
          style={styles.back}>
          <Image source={require('../../assets/back.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>{`IMG-${id}`}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: source}} style={styles.img} />
      </View>
      <View style={styles.menuContainer}>
        <ImageMenu image={image} />
      </View>
    </View>
  );
}
