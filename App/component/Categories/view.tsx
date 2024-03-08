import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
const CategoriesView: React.FC = () => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.category}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryItemBox}>
          <FontAwesome6 name="burger" color={'black'} size={30} />
          <Text style={styles.categoryItemTitle}>Burger</Text>
        </View>
        <View style={styles.categoryItemBox}>
          <FontAwesome5 name="pizza-slice" color={'black'} size={30} />
          <Text style={styles.categoryItemTitle}>Pizza</Text>
        </View>
        <View style={styles.categoryItemBox}>
          <MaterialCommunityIcons name="noodles" color={'black'} size={45} />
          <Text style={styles.categoryItemTitle}>Noodle</Text>
        </View>
        <View style={styles.categoryItemBox}>
          <MaterialCommunityIcons name="pasta" color={'black'} size={30} />
          <Text style={styles.categoryItemTitle}>Pasta</Text>
        </View>
        <View style={styles.categoryItemBox}>
          <Entypo name="cake" color={'black'} size={30} />
          <Text style={styles.categoryItemTitle}>Cake</Text>
        </View>
        <View style={styles.categoryItemBox}>
          <FontAwesome6 name="burger" color={'black'} size={30} />
          <Text style={styles.categoryItemTitle}>Burger</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoriesView;
