import React from 'react';
import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenCamera, ScreenPerfil, ScreenCarro } from "../screens"
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
            <Ionicons name='person' size={24} color={colors.black} />
          )
        }}
      />
      <Drawer.Screen name="Camera" component={ScreenCamera}
        options={{
          drawerIcon: () => (
            <AntDesign name='camera' size={24} color={colors.black} />
          )
        }}
      />
      <Drawer.Screen name = "Acelerometro" component={ScreenCarro} 
        options={{
          drawerIcon: () => (
            <AntDesign name="car" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}