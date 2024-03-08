/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import HomeView from './view';
import {THomeContainer} from './type';
import {Alert, BackHandler} from 'react-native';

const HomeContainer: React.FC<THomeContainer> = ({navigation}) => {
  const onBackPress = () => {
    Alert.alert(
      'Exit App',
      'You want to exit from app',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ],
      {cancelable: true},
    );
    return true;
  };
  return <HomeView navigation={navigation} onBackPress={onBackPress} />;
};

export default HomeContainer;
