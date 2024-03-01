import {
  View,
  Text,
  Image,
  SafeAreaView,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useCallback} from 'react';
import {styles} from './style';
import {IMAGES} from '../../assets/images';
import CustomButton from '../../component/Button';
import {TWelcomeView} from './type';
import {useFocusEffect} from '@react-navigation/native';
const WelcomeView: React.FC<TWelcomeView> = ({navigation}) => {
  const onBackPress = () => {
    Alert.alert(
      'Exit App',
      'You want to exit from app',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ],
      {cancelable: true},
    );
    return true;
  };
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Foodie</Text>
      <View style={styles.logoContainer}>
        <Image source={IMAGES.HOME_PAGE_LOGO} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="signin"
          buttonStyle={styles.button}
          buttonTitleStyle={styles.buttonText}
          onPress={() => navigation.navigate('SignInScreen')}
          isValid={true}
        />
        <CustomButton
          title="signup"
          buttonStyle={styles.button}
          buttonTitleStyle={styles.buttonText}
          onPress={() => navigation.navigate('SignUpScreen')}
          isValid={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomeView;
