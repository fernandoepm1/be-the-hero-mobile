import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import IncidentDetails from './pages/IncidentDetails';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Incidents" component={Incidents} />
        <AppStack.Screen name="IncidentDetails" component={IncidentDetails} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}