import {View, Text, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {IMAGES} from '../../assets/images';
import {styles} from './style';
const OfferView: React.FC = () => {
  return (
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
  );
};

export default OfferView;
