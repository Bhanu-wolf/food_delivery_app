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
import {TLogInView, TUserInfo} from './type';
import {Formik} from 'formik';
import {styles} from './style';
import CustomButton from '../../component/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LogInView: React.FC<TLogInView> = ({
  logInValidationSchema,
  navigation,
  getUserData,
}) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const [isLogInSuccess, setIsLogInSuccess] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.formContainer}>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={logInValidationSchema}
            onSubmit={values => {
              let userInfo: TUserInfo = {
                email: values.email,
                password: values.password,
              };
              getUserData(userInfo);
            }}>
            {({
              values,
              errors,
              isValid,
              handleChange,
              handleSubmit,
              handleBlur,

              touched,
              setTouched,
            }) => (
              <View>
                <View>
                  <Text style={[styles.title]}>Sign In</Text>
                </View>
                <View style={styles.formColumnContainer}>
                  <AntDesign
                    name="user"
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
                      setShowPassword(false);
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
                    onBlur={() => {
                      handleBlur('password');
                      setPasswordFocus(false);
                      if (showPassword) {
                        setShowPassword(false);
                      }
                    }}
                    onChangeText={handleChange('password')}
                    placeholder="Password"
                    style={styles.inputText}
                    onFocus={() => {
                      setEmailFocus(false);
                      setPasswordFocus(true);
                      setTouched({
                        ...touched,
                        ['password']: true,
                      });
                    }}
                    secureTextEntry={showPassword === false ? true : false}
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

                <CustomButton
                  title={'Sign In'}
                  onPress={handleSubmit}
                  buttonStyle={styles.buttonStyle}
                  buttonTitleStyle={styles.buttonTitleStyle}
                  isValid={isValid}
                />
              </View>
            )}
          </Formik>
          <View style={styles.bottomInfoContainer}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
            <Text style={styles.oR}>OR</Text>
            <Text style={styles.signInWith}>Sign In With</Text>
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
              Don't have an account?
              <Text
                style={{color: 'red', fontSize: 20}}
                onPress={() => navigation.navigate('SignUpScreen')}>
                {' '}
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LogInView;
