// import {StyleSheet} from 'react-native';

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 10,
//     fontSize: 16,
//   },
// });
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: 380,

    flex: 1,
    justifyContent: 'center',
    marginTop: 40,
  },
  title: {
    color: 'red',
    fontSize: 30,
    marginTop: 1,
    fontWeight: '600',
    textAlign: 'center',
  },
  formColumnContainer: {
    width: '85%',
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 5,
    elevation: 20,
    backgroundColor: 'white',
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 18,
    marginLeft: 15,
    width: '80%',
    // borderWidth: 3,
  },
  formLogo: {marginLeft: 3},
  errorMessage: {color: 'red', fontSize: 15, fontWeight: '700'},
  bottomSheetMessage: {fontSize: 20, color: 'black', textAlign: 'center'},
  buttonStyle: {
    backgroundColor: '#EA4335',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '83%',
    marginTop: 4,
    alignSelf: 'center',
    elevation: 20,
    height: 50,
  },
  buttonTitleStyle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 3,
    height: 44,
    textAlignVertical: 'center',
  },
  bottomInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  forgotPassword: {
    fontSize: 17,
    color: 'grey',
    marginVertical: 3,
  },
  oR: {
    color: 'red',
    fontSize: 19,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  signInWith: {
    fontSize: 20,
    marginVertical: 3,
    fontWeight: '400',
  },
  socialMedia: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-around',
  },
  icon: {
    height: 50,
    borderRadius: 13,
    backgroundColor: 'white',
    padding: 10,
    elevation: 20,
    margin: 10,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 10,
  },
  signUp: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  footer: {marginBottom: 10},
});
