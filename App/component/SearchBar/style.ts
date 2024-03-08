import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 5,
    alignItems: 'center',
    height: 45,
    padding: 5,
    backgroundColor: 'white',
    elevation: 20,
  },
  searchInput: {
    marginLeft: 20,
    width: '90%',
    fontSize: 16,
    textAlignVertical: 'center',
    height: 50,
    color: 'black',
  },
});
