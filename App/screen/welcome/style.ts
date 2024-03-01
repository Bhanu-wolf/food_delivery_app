import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 40,
    color: 'white',
    fontStyle: 'italic',
    fontWeight: '800',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#DB4437',
    // borderWidth: 3,
  },
  logoContainer: {
    marginBottom: 20,
    borderColor: 'black',
  },
  logo: {
    height: 300,
    width: 650,

    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    // borderWidth: 3,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    width: '40%',
    borderColor: 'grey',

    borderWidth: 3,
  },
  buttonText: {
    color: '#34282C',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '700',
    fontStyle: 'italic',
  },
});
