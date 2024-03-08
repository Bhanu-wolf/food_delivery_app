import {View, TextInput} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {styles} from './style';
const SearchBarView: React.FC = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Fontisto name="search" color={'red'} size={22} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={'black'}
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBarView;
