import React from 'react';
import WelcomeView from './view';
import {TWelcomeContainer} from './type';

const WelcomeContainer: React.FC<TWelcomeContainer> = ({navigation}) => {
  return <WelcomeView navigation={navigation} />;
};

export default WelcomeContainer;
