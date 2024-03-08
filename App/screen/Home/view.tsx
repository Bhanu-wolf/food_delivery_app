import {SafeAreaView, ScrollView, BackHandler} from 'react-native';
import React, {useEffect, useState} from 'react';

import {styles} from './style';

import {THomeView} from './type';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import HeaderContainer from '../../component/Header/container';
import SearchBarContainer from '../../component/SearchBar/container';
import CategoriesContainer from '../../component/Categories/container';
import OfferContainer from '../../component/Offer/container';
const HomeView: React.FC<THomeView> = ({navigation, onBackPress}) => {
  const [foodData, setFoodData] = useState([]);
  const foodRef = firestore().collection('FoodData');
  useEffect(() => {
    foodRef.onSnapshot(snapshot => {
      const fetchData: any = [];
      snapshot.docs.forEach(doc => {
        fetchData.push(doc.data());
      });
      setFoodData(fetchData);
    });
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.outerContainer}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        {/*----------- Home Head Nav ----------------*/}
        <HeaderContainer navigation={navigation} />

        {/* ----------Search Bar Container------------ */}
        <SearchBarContainer />
        {/* Categories */}
        <CategoriesContainer />
        {/* Offer Slider */}
        <OfferContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;
