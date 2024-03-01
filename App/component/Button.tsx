import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TCustomButton} from './type';

const CustomButton: React.FC<TCustomButton> = ({
  title,
  onPress,
  buttonStyle,
  buttonTitleStyle,
  isValid,
}) => {
  return (
    <TouchableOpacity
      disabled={isValid === true ? false : true}
      style={buttonStyle}
      onPress={() => {
        onPress();
      }}>
      <Text style={buttonTitleStyle}>{title ? title : 'Click me'}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
