/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import GalleryScreen from '../screens/GalleryScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#fff'},
        headerTintColor: '#fff',
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#949494',
        tabBarActiveTintColor: '#A10D99',
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#790598',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
      }}>
      <Tab.Screen
        component={GalleryScreen}
        name="Gallery"
        options={{
          tabBarLabel: 'Галерея',
          headerTitle: 'Все изображения',
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('../assets/gallery_active.png')
              : require('../assets/gallery_inactive.png');
            return <Image source={image} style={{height: 24, width: 24}} />;
          },
        }}
      />
      <Tab.Screen
        component={FavoriteScreen}
        name="Favorite"
        options={{
          headerTitle: 'Избранное',
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('../assets/favorite_active.png')
              : require('../assets/favorite_inactive.png');
            return <Image source={image} style={{height: 24, width: 24}} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
