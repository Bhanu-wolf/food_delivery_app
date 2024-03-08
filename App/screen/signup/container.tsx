import React from 'react';
import SignUpView from './view';
import * as Yup from 'yup';
import {TSignUpContainer, TSignUpValidationSchema, TUserInfo} from './type';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';

const SignUpValidationSchema: TSignUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Minimum 2 Character')
    .max(24, 'Maximum 24 Character')
    .required('Name is required'),
  email: Yup.string()
    .email('enter your correct email')
    .required('email is required'),
  password: Yup.string()
    .min(6, 'Password should be at least 6 characters')
    .max(20, 'Password is too long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    )
    .required('password is required'),
  confPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'password is not match')
    .required('confirm password is required'),
});
const SignUpContainer: React.FC<TSignUpContainer> = ({navigation}) => {
  const storeUserData = async (userInfo: TUserInfo) => {
    try {
      const jsonValue = JSON.stringify(userInfo);
      await AsyncStorage.setItem(`${userInfo.email}`, jsonValue);
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Congrats Sign Up Successfully',
        button: 'close',
        onHide: () => navigation.replace('SignInScreen'),
      });
    } catch (error) {
      console.log('error');
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Failed',
        textBody: 'Oops! Sign Up failed',
        button: 'close',
      });
    }
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <AlertNotificationRoot theme="dark">
      <SignUpView
        SignUpValidationSchema={SignUpValidationSchema}
        navigation={navigation}
        storeUserData={storeUserData}
      />
    </AlertNotificationRoot>
  );
};

export default SignUpContainer;
