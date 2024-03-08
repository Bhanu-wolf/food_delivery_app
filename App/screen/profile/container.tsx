import React from 'react';
import ProfileView from './view';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import {TProfileContainer, TProfileEditValidationSchema} from './type';

const profileEditValidationSchema: TProfileEditValidationSchema =
  Yup.object().shape({
    name: Yup.string()
      .min(2, 'Minimum 2 Character')
      .max(24, 'Maximum 24 Character')
      .required('Name is required'),
    email: Yup.string()
      .email('enter your correct email')
      .required('email is required'),
  });
const ProfileContainer: React.FC<TProfileContainer> = ({navigation}) => {
  const getActiveUserData = async () => {
    try {
      const activeUser = await AsyncStorage.getItem('activeUser');
      if (activeUser) {
        const jsonValue = await AsyncStorage.getItem(activeUser);
        if (jsonValue) {
          const jsonData = JSON.parse(jsonValue);

          return jsonData;
        }
      }
    } catch (e) {
      // error reading value
    }
  };
  const updataActiveUserDetail = async (
    updatedUserName: string,
    prevUserEmail: string,
  ) => {
    try {
      // fetching the previous details of user
      const prevJsonValue = await AsyncStorage.getItem(prevUserEmail);
      if (prevJsonValue) {
        const prevJsonData = JSON.parse(prevJsonValue);

        //updating the new userValue
        const userNewData = {
          name: updatedUserName,
          email: prevJsonData.email,
          password: prevJsonData.password,
          confPassword: prevJsonData.confPassword,
        };
        const jsonValue = JSON.stringify(userNewData);
        await AsyncStorage.setItem(prevUserEmail, jsonValue);
      }
    } catch (e) {
      // saving error
    }
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'Details Updated Successfully',
      button: 'close',
      onHide: () => {
        navigation.navigate('HomeScreen');
      },
    });
  };
  const signOut = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'false');
    navigation.navigate('AfterSignOut');
  };
  return (
    <AlertNotificationRoot theme="dark">
      <ProfileView
        profileEditValidationSchema={profileEditValidationSchema}
        navigation={navigation}
        getActiveUserData={getActiveUserData}
        updataActiveUserDetail={updataActiveUserDetail}
        signOut={signOut}
      />
    </AlertNotificationRoot>
  );
};

export default ProfileContainer;
