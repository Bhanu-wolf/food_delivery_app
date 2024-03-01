import * as Yup from 'yup';
export type TLogInValidationSchema = Yup.ObjectSchema<{
  email: string;
  password?: string;
}>;
export type TLogInView = {
  logInValidationSchema: TLogInValidationSchema;
  navigation: any;
  getUserData: (userInfo: TUserInfo) => void;
};
export type TLogInContainer = {
  navigation: any;
};
export type TUserInfo = {
  email: string;
  password: string;
};
