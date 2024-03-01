import React from 'react';
import LogInContainer from './screen/signin/container';
import WelcomeContainer from './screen/welcome/container';
import RootNavigator from './Navigation/root';
import CustomBottomSheet from './component/BottomSheet';
const Root: React.FC = () => {
  return (
    <>
      {/* <WelcomeContainer /> */}
      {/* <LogInContainer /> */}
      <RootNavigator />
      {/* <CustomBottomSheet /> */}
    </>
  );
};
export default Root;
