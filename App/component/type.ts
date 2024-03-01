export type TCustomButton = {
  title: string;
  onPress?: () => void;
  buttonStyle?: {[key: string]: string | number};
  isValid?: boolean;
  buttonTitleStyle?: {[key: string]: string | number};
};
