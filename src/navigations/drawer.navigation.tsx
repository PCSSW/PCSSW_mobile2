import React from 'react';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenCamera, ScreenPerfil } from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, AntDesign } from '@expo/vector-icons';
type DrawerParamList = {
  Perfil: undefined;
  Camera: undefined;
}
type DrawerScreenNavigation = DrawerNavigationProp<DrawerParamList, "Perfil">
export type DrawerTypes = {
  navigation: DrawerScreenNavigation
}

export function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Perfil" component={ScreenPerfil}
        options={{
          drawerIcon: () => (
            <Ionicons name='person' size={24} color={colors.white} />
          )
        }}
      />
      <Drawer.Screen name="Camera" component={ScreenCamera}
        options={{
          drawerIcon: () => (
            <AntDesign name='camera' size={24} color={colors.white} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}