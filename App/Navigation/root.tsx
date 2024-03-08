import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  AfterLoginStackNavigator,
  BeforeLoginStackNavigator,
} from './stackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect} from 'react';

const RootNavigator: React.FC = () => {
  const [isLogin, setIsLogin] = useState('false');
  const getValue = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value) {
        setIsLogin(value);
      }
    } catch (e) {}
  };
  useEffect(() => {
    getValue();
  }, [isLogin]);
  return (
    <NavigationContainer>
      {isLogin === 'true' ? (
        <AfterLoginStackNavigator />
      ) : (
        <BeforeLoginStackNavigator />
      )}
    </NavigationContainer>
  );
};
export default RootNavigator;
