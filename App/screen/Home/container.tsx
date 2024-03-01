/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import HomeView from './view';
import {THomeContainer} from './type';

const HomeContainer: React.FC<THomeContainer> = ({navigation}) => {
  return <HomeView navigation={navigation} />;
};

export default HomeContainer;
