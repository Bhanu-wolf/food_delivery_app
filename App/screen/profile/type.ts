import * as Yup from 'yup';
export type TProfileEditValidationSchema = Yup.ObjectSchema<{
  email: string;
  name: string;
}>;
export type TProfileContainer = {
  navigation: any;
};

export type TProfileView = {
  navigation: any;
  profileEditValidationSchema: TProfileEditValidationSchema;
  getActiveUserData: () => any;
  updataActiveUserDetail: (
    updatedUserName: string,
    prevUserEmail: string,
  ) => void;
  signOut: () => any;
};
export type TFormValueType = {
  name: string;
  email: string;
};
export type TUserData = {
  name: string;
  email: string;
  password: string;
  confPassword: string;
};
