import React from 'react';
import HeaderView from './view';
import {THeaderContainer} from './type';

const HeaderContainer: React.FC<THeaderContainer> = ({navigation}) => {
  return <HeaderView navigation={navigation} />;
};

export default HeaderContainer;
