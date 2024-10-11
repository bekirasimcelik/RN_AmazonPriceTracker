import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stacknavigator from './src/navigation/Stacknavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Stacknavigator />
    </NavigationContainer>
  );
}
