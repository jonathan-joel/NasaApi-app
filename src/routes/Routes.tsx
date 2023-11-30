import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../views/Home';
import Detail from '../views/Detail';
import {RootStackParams, routesScreenDefaultOptionsTypes} from '../types';

const Stack = createNativeStackNavigator<RootStackParams>();

const routesScreenDefaultOptions = {
  headerStyle: {
    backgroundColor: '#262626',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerTitleAlign: 'center',
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routesScreenDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routesScreenDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
