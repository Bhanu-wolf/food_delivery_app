import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  categoryContainer: {
    // borderWidth: 3,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 20,
    elevation: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  category: {
    fontSize: 25,
    fontWeight: '400',
    color: 'red',
    textAlign: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: 'red',
    marginBottom: 5,
  },
  categoryItemBox: {
    margin: 8,
    padding: 15,
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryItemTitle: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    margin: 5,
    color: 'black',
  },
});
