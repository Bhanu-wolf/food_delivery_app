/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButton from './Button';
const CustomBottomSheet: React.FC = () => {
  const snapPoints = useMemo(() => ['50%'], []);
  const bottomSheetReference = useRef<BottomSheet>(null);
  const bottomSheetClose = () => {
    bottomSheetReference.current?.close();
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheet
        index={0}
        backgroundStyle={{backgroundColor: 'grey'}}
        ref={bottomSheetReference}
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <View style={styles.bottomSheetContentContainer}>
          <View style={styles.bottomSheetHeader}>
            <Text style={styles.bottomSheetTitle}>Bottom Sheet</Text>
            <Entypo
              name="cross"
              size={45}
              style={styles.bottomSheetCroseLogo}
              onPress={bottomSheetClose}
              color={'black'}
            />
          </View>
          <CustomButton
            title="Close"
            buttonStyle={styles.bottomSheetCloseButton}
            buttonTitleStyle={styles.bottomSheetCloseButtonTitle}
            onPress={bottomSheetClose}
          />
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CustomBottomSheet;
