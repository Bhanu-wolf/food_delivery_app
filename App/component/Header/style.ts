import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 2,
    padding: 8,
    height: 60,
    alignItems: 'center',
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    backgroundColor: 'white',
    elevation: 20,
    marginBottom: 5,
  },
  navIconContainer: {position: 'absolute', left: 7},
  headerLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    // borderWidth: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: 'red',
  },
  profileIconContainer: {position: 'absolute', right: 7},
});
