
/**
 * Dependencias
*/import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Stacks
 */
import MainStack from './stacks/MainStack';
import ComprasStack from './stacks/ComprasStack';

const Tab = createBottomTabNavigator();

const PAGES = {
  homeStack: 'Home',
  comprasStack: 'Compras'
}

const MainNavigation = () => {

  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let rn = route.name;

      if (rn === PAGES.homeStack) {
        iconName = focused ? 'home' : 'home-outline';

      } else if (rn === PAGES.comprasStack) {
        iconName = focused ? 'list' : 'list-outline';

      }
      return <Ionicons name={iconName} size={size} color={color} />;
    }
  })

  return (
    <Tab.Navigator initialRouteName={PAGES.homeStack} screenOptions={screenOptions}>
      <Tab.Screen
        name={PAGES.homeStack}
        component={MainStack}
      />

      <Tab.Screen
        name={PAGES.comprasStack}
        component={ComprasStack}
      />
    </Tab.Navigator>

  )
}

export default MainNavigation;