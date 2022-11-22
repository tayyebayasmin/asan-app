import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import { EditProfile, Home } from '~screens/app';
import {selectIsLoggedIn} from '~store/slices/user';
import {LoginScreen} from '../screens/auth';

import ScreenNames from './routes';

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();
const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ScreenNames.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.EDITPROFILE} component={EditProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
export {default as ScreenNames} from './routes';
