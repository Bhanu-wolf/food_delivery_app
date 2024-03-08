import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {TFormValueType, TProfileView, TUpdateValue, TUserData} from './type';
import {Formik, useFormikContext} from 'formik';
import {styles} from './style';
import CustomButton from '../../component/Button';
import BottomSheet from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileView: React.FC<TProfileView> = ({
  profileEditValidationSchema,
  navigation,
  getActiveUserData,
  updataActiveUserDetail,
  signOut,
}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userData, setUserData] = useState<TUserData>();
  const getUserDataFunction = async () => {
    const data = await getActiveUserData();
    if (data) {
      setUserName(data.name);
      setUserEmail(data.email);
    }
  };
  useEffect(() => {
    getUserDataFunction();
  }, []);

  let changeUserName;
  const [emailFocus, setEmailFocus] = useState(false);
  //   const [passwordFocus, setPasswordFocus] = useState(false);
  //   const [confPasswordFocus, setConfPasswordFocus] = useState(false);
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [showConfPassword, setShowConfPassword] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Formik
            initialValues={
              {name: userName, email: userEmail} || {
                name: '',
                email: '',
                //   password: '',
                //   confPassword: '',
              }
            }
            enableReinitialize
            validationSchema={profileEditValidationSchema}
            onSubmit={values => {
              updataActiveUserDetail(values.name, userEmail);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleBlur,
            }) => (
              <View>
                <View>
                  <Text style={[styles.title]}>Profile</Text>
                </View>
                <View style={styles.formColumnContainer}>
                  <AntDesign
                    name="user"
                    size={25}
                    color={nameFocus ? 'red' : 'grey'}
                    style={styles.formLogo}
                  />
                  <TextInput
                    value={values.name}
                    onChangeText={handleChange('name')}
                    placeholder="Full Name"
                    style={styles.inputText}
                    onFocus={() => {
                      setEmailFocus(false);
                      //   setPasswordFocus(false);
                      //   setConfPasswordFocus(false);
                      setNameFocus(true);
                      touched.name = true;
                    }}
                    onBlur={() => {
                      handleBlur('name');
                      setNameFocus(false);
                    }}
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={styles.errorMessage}>{errors.name}</Text>
                )}
                <View style={styles.formColumnContainer}>
                  <Entypo
                    name="email"
                    size={25}
                    color={emailFocus ? 'red' : 'grey'}
                    style={styles.formLogo}
                  />
                  <TextInput
                    value={values.email}
                    onChangeText={handleChange('email')}
                    placeholder="Email"
                    style={styles.inputText}
                    onFocus={() => {
                      setEmailFocus(true);
                      //   setPasswordFocus(false);
                      //   setConfPasswordFocus(false);
                      setNameFocus(false);
                      touched.email = true;
                    }}
                    onBlur={() => {
                      handleBlur('email');
                      setEmailFocus(false);
                    }}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}

                {/* ---------password------------ */}
                {/* <View style={styles.formColumnContainer}>
                  <FontAwesome
                    name="lock"
                    size={25}
                    color={passwordFocus ? 'red' : 'grey'}
                    style={[styles.formLogo]}
                  />
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    placeholder="Password"
                    style={styles.inputText}
                    onFocus={() => {
                      setEmailFocus(false);
                      setPasswordFocus(true);
                      setConfPasswordFocus(false);
                      setNameFocus(false);
                      touched.password = true;
                    }}
                    secureTextEntry={showPassword === false ? true : false}
                    onBlur={() => {
                      handleBlur('password');
                      setPasswordFocus(false);
                      if (showPassword) {
                        setShowPassword(false);
                      }
                    }}
                  />
                  <FontAwesome
                    name={showPassword ? 'eye' : 'eye-slash'}
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                    size={25}
                    style={[styles.formLogo, {position: 'absolute', right: 20}]}
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )} */}
                {/*--------------------------------------- confirm Password */}
                {/* <View style={styles.formColumnContainer}>
                  <FontAwesome
                    name="lock"
                    size={25}
                    color={confPasswordFocus ? 'red' : 'grey'}
                    style={[styles.formLogo]}
                  />
                  <TextInput
                    value={values.confPassword}
                    onChangeText={handleChange('confPassword')}
                    placeholder="Confirm Password"
                    style={styles.inputText}
                    onFocus={() => {
                      setEmailFocus(false);
                      setPasswordFocus(false);
                      setConfPasswordFocus(true);
                      setNameFocus(false);
                      touched.confPassword = true;
                    }}
                    onBlur={() => {
                      handleBlur('confPassword');
                      setConfPasswordFocus(false);
                      if (showConfPassword) {
                        setShowConfPassword(false);
                      }
                    }}
                    secureTextEntry={showConfPassword === false ? true : false}
                  />
                  <FontAwesome
                    name={showConfPassword ? 'eye' : 'eye-slash'}
                    onPress={() => {
                      setShowConfPassword(!showConfPassword);
                    }}
                    size={25}
                    style={[styles.formLogo, {position: 'absolute', right: 20}]}
                  />
                </View>
                {touched.confPassword && errors.confPassword && (
                  <Text style={styles.errorMessage}>{errors.confPassword}</Text>
                )} */}

                <CustomButton
                  title={'Save'}
                  onPress={handleSubmit}
                  buttonStyle={styles.buttonStyle}
                  buttonTitleStyle={styles.buttonTitleStyle}
                  isValid={isValid}
                />
                <CustomButton
                  title={'Logout'}
                  onPress={signOut}
                  buttonStyle={styles.buttonStyle}
                  buttonTitleStyle={styles.buttonTitleStyle}
                  isValid={isValid}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileView;
