import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {THeaderView} from './type';
const HeaderView: React.FC<THeaderView> = ({navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.navIconContainer}>
        <Fontisto name="nav-icon-list-a" color={'red'} size={22} />
      </TouchableOpacity>
      <View style={styles.headerLogoContainer}>
        <Text style={styles.title}>Foodie</Text>
        <Ionicons name="fast-food-outline" color={'red'} size={35} />
      </View>
      <TouchableOpacity
        style={styles.profileIconContainer}
        onPress={() => {
          navigation.navigate('ProfileScreen');
        }}>
        <EvilIcons name="user" color={'red'} size={45} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderView;
