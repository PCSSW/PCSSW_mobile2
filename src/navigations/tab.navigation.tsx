import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenCamera, ScreenLocation, ScreenPerfil } from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
type TabParamList = {
  Perfil: undefined;
  Camera: undefined;
  Location: undefined;
}
type TabScreenNavigation = BottomTabNavigationProp <TabParamList, "Perfil">
export type TabTypes = {
  navigation: TabScreenNavigation
}

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.fourth,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.fourth
        },
        headerTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name = 'person' color={colors.white} size={24} />
          ),
        }}
      />
      
      <Tab.Screen name='Camera' component={ScreenCamera}
      options={{
        tabBarIcon: () => (
          <AntDesign name = 'camera' color={colors.white} size={24} />
        ),
      }}
      />
      <Tab.Screen name = 'Location' component={ScreenLocation}
      options={{
        tabBarIcon: () => (
          <FontAwesome name='map-marker' color={colors.white} size={24} />
        ),
      }}
      />
    </Tab.Navigator>
  )
}