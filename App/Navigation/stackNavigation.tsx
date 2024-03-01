import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeContainer from '../screen/welcome/container';
import LogInContainer from '../screen/signin/container';
import SignUpContainer from '../screen/signup/container';
import HomeContainer from '../screen/Home/container';
import ProfileContainer from '../screen/profile/container';

const LoginStackNavigator = createNativeStackNavigator();
const HomeScreenStackNavigator = createNativeStackNavigator();

// when the user is not login it will direct to signin and signup page
export const BeforeLoginStackNavigator: React.FC = () => {
  return (
    <LoginStackNavigator.Navigator initialRouteName="WelcomeScreen">
      <LoginStackNavigator.Screen
        name="WelcomeScreen"
        component={WelcomeContainer}
        options={{headerShown: false}}
      />
      <LoginStackNavigator.Screen
        name="SignInScreen"
        component={LogInContainer}
        options={{headerShown: false}}
      />
      <LoginStackNavigator.Screen
        name="SignUpScreen"
        component={SignUpContainer}
        options={{headerShown: false}}
      />
      <LoginStackNavigator.Screen
        name="AfterSignIn"
        component={AfterLoginStackNavigator}
        options={{headerShown: false}}
      />
    </LoginStackNavigator.Navigator>
  );
};

// when the user is already logged in it will navigate to home screen

export const AfterLoginStackNavigator: React.FC = () => {
  return (
    <HomeScreenStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeScreenStackNavigator.Screen
        name="HomeScreen"
        component={HomeContainer}
        options={{headerShown: false}}
      />
      <HomeScreenStackNavigator.Screen
        name="ProfileScreen"
        component={ProfileContainer}
        options={{headerShown: false}}
      />
      <HomeScreenStackNavigator.Screen
        name="AfterSignOut"
        component={BeforeLoginStackNavigator}
        options={{headerShown: false}}
      />
    </HomeScreenStackNavigator.Navigator>
  );
};
