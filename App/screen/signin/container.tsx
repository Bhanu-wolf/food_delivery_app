import React from 'react';
import LogInView from './view';
import * as Yup from 'yup';
import {TLogInContainer, TLogInValidationSchema, TUserInfo} from './type';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';

// -----------------------------------------------------------------------------------------------------------------------------------------

const logInValidationSchema: TLogInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('enter the correct email')
    .required('email is required'),
  //email: Yup.string().email().required(),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .max(20, 'Password is too long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('password filed is required'),
  //password: Yup.string().required(),
});
const LogInContainer: React.FC<TLogInContainer> = ({navigation}) => {
  const getUserData = async (userInfo: TUserInfo) => {
    let jsonData: TUserInfo;
    try {
      const jsonValue = await AsyncStorage.getItem(`${userInfo.email}`);
      if (jsonValue) {
        jsonData = JSON.parse(jsonValue);

        if (
          jsonData.email === userInfo.email &&
          jsonData.password === userInfo.password
        ) {
          await AsyncStorage.setItem('activeUser', userInfo.email);
          await AsyncStorage.setItem('isLoggedIn', 'true');

          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Sign In Successfully',
            button: 'close',
            onHide: () => {
              navigation.navigate('AfterSignIn');
            },
          });
        } else {
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: 'Failed',
            textBody: 'Oops Invalid Credentials',
            button: 'close',
          });
        }
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Failed',
          textBody: 'Oops Account  does not exist',
          button: 'close',
        });
      }
    } catch (error) {
      console.log('error');
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Failed',
        textBody: 'Error',
        button: 'close',
      });
    }
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <AlertNotificationRoot theme="dark">
      <GestureHandlerRootView style={{flex: 1}}>
        <LogInView
          logInValidationSchema={logInValidationSchema}
          navigation={navigation}
          getUserData={getUserData}
        />
      </GestureHandlerRootView>
    </AlertNotificationRoot>
  );
};

export default LogInContainer;
