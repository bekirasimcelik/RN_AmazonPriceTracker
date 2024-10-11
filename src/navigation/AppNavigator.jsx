import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PriceScreen from '../screens/PriceScreen';
import SearchScreen from '../screens/SearchScreen';
import {useAuth} from '../context/AuthContext';

const Tab = createBottomTabNavigator();

export default function AppNavigator({navigation}) {
  const {user} = useAuth();

  useEffect(() => {
    if (!user) {
      navigation.navigate('Login');
    }
  }, [user, navigation]);

  if (!user) {
    return null;
  }
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Price Alert" component={PriceScreen} />
    </Tab.Navigator>
  );
}
