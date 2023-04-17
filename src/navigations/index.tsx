import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {LoginNavigation} from "./login.navigations"

export function Navigation() {
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer>
  );
}