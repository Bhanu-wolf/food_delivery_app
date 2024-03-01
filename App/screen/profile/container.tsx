// import React from 'react';
// import ProfieView from './view';
// import {TProfileContainer} from './type';

// const ProfileContainer: React.FC<TProfileContainer> = ({navigation, route}) => {
//   return <ProfieView navigation={navigation} route={route} />;
// };

// export default ProfileContainer;
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
    // password: Yup.string()
    //   .min(6, 'Password should be at least 6 characters')
    //   .max(20, 'Password is too long')
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
    //     'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    //   )
    //   .required('password is required'),
    // confPassword: Yup.string()
    //   .oneOf([Yup.ref('password')], 'password is not match')
    //   .required('confirm password is required'),
  });
const ProfileContainer: React.FC<TProfileContainer> = ({navigation}) => {
  // const getActiveUser = async () => {
  //   try {
  //     const activeUser = await AsyncStorage.getItem('activeUser');
  //     console.log('active User is ------->', activeUser);
  //     return activeUser;
  //   } catch (e) {
  //     // error reading value
  //   }
  // };

  const getActiveUserData = async () => {
    try {
      const activeUser = await AsyncStorage.getItem('activeUser');
      console.log('activeUser is ------------->' + activeUser);

      if (activeUser) {
        const jsonValue = await AsyncStorage.getItem(activeUser);
        if (jsonValue) {
          const jsonData = JSON.parse(jsonValue);
          console.log(
            'parse value ' +
              jsonData.name +
              jsonData.email +
              jsonData.password +
              jsonData.confPassword,
          );
          console.log('jsonDataTYpe ->>>>>>' + typeof jsonData);

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
        console.log('update waale mai------>' + prevJsonData.password);
        console.log(updatedUserName);

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
      textBody: 'Value Updated Successfully',
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
    // eslint-disable-next-line react-native/no-inline-styles
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
