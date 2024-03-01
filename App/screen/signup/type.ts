import * as Yup from 'yup';
export type TSignUpValidationSchema = Yup.ObjectSchema<{
  email: string;
  password?: string;
}>;
export type TSignUpView = {
  SignUpValidationSchema: TSignUpValidationSchema;
  navigation: any;
  storeUserData: (value: TUserInfo) => void;
};
export type TSignUpContainer = {
  navigation: any;
};
export type TUserInfo = {
  name: string;
  email: string;
  password: string;
  confPassword: string;
};
