/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
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
import {TSignUpView, TUserInfo} from './type';
import {Formik} from 'formik';
import {styles} from './style';
import CustomButton from '../../component/Button';
import BottomSheet from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const SignUpView: React.FC<TSignUpView> = ({
  SignUpValidationSchema,
  navigation,
  storeUserData,
}) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const [isLogInSuccess, setIsLogInSuccess] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confPasswordFocus, setConfPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: '',
              email: '',
              password: '',
              confPassword: '',
            }}
            validationSchema={SignUpValidationSchema}
            onSubmit={values => {
              let userData: TUserInfo = {
                name: values.name,
                email: values.email,
                password: values.password,
                confPassword: values.confPassword,
              };
              storeUserData(userData);
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleBlur,
              setTouched,
            }) => (
              <View>
                <View>
                  <Text style={[styles.title]}>Sign Up</Text>
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
                      setPasswordFocus(false);
                      setConfPasswordFocus(false);
                      setNameFocus(true);
                      setTouched({
                        ...touched,
                        ['name']: true,
                      });
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
                      setPasswordFocus(false);
                      setConfPasswordFocus(false);
                      setNameFocus(false);
                      setTouched({
                        ...touched,
                        ['email']: true,
                      });
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
                <View style={styles.formColumnContainer}>
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
                      setTouched({
                        ...touched,
                        ['password']: true,
                      });
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
                )}
                {/*--------------------------------------- confirm Password */}
                <View style={styles.formColumnContainer}>
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
                      // touched.confPassword = true;
                      setTouched({
                        ...touched,
                        ['confPassword']: true,
                      });
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
                )}
                <CustomButton
                  title={'SignUp'}
                  onPress={handleSubmit}
                  buttonStyle={styles.buttonStyle}
                  buttonTitleStyle={styles.buttonTitleStyle}
                  isValid={isValid}
                />
              </View>
            )}
          </Formik>
          <View style={styles.bottomInfoContainer}>
            <Text style={styles.oR}>OR</Text>
            <Text style={styles.signInWith}>Sign Up With</Text>
          </View>
          <View style={styles.socialMedia}>
            <TouchableOpacity>
              <AntDesign
                name="google"
                size={30}
                color="#DB4437"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="instagram"
                size={30}
                color="#FA7E1E"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="facebook-square"
                size={30}
                color="#426782"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.footer}>
            <Text style={styles.signUp}>
              Already have an account?
              <Text
                style={{color: 'red', fontSize: 20}}
                onPress={() => navigation.navigate('SignInScreen')}>
                {' '}
                Sign In
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpView;
