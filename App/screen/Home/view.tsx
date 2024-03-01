import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import Swiper from 'react-native-swiper';
import {IMAGES} from '../../assets/images';
import {THomeView} from './type';
import {useFocusEffect} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
const HomeView: React.FC<THomeView> = ({navigation}) => {
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
  console.log('--------------->', foodData);

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
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.navIconContainer}>
            <Fontisto name="nav-icon-list-a" color={'red'} size={22} />
          </TouchableOpacity>
          <View style={styles.headerLogoContainer}>
            <Text style={styles.title}>Foodie{` `}</Text>
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

        {/* ----------Search Bar Container------------ */}
        <View style={styles.searchBarContainer}>
          <Fontisto name="search" color={'red'} size={22} />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        {/* Categories */}
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
              <MaterialCommunityIcons
                name="noodles"
                color={'black'}
                size={45}
              />
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
        {/* Offer Slider */}
        <View style={styles.offerSliderContainer}>
          {/* <Text style={styles.offerText}>Offers</Text> */}
          <Swiper
            height={200}
            style={styles.sliderContainer}
            showsButtons={true}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            activeDotColor={'red'}
            dotColor={'white'}
            autoplay={true}>
            <View>
              <Image
                source={IMAGES.BURGER_OFFER}
                style={[styles.sliderImage]}
                resizeMode="cover"
              />
            </View>
            <View>
              <Image
                source={IMAGES.PIZZA_OFFER}
                style={styles.sliderImage}
                resizeMode="stretch"
              />
            </View>
            <View>
              <Image
                source={IMAGES.NOODLES_OFFER}
                style={styles.sliderImage}
                resizeMode="stretch"
              />
            </View>

            <View>
              <Image
                source={IMAGES.CAKE_OFFER}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeView;
