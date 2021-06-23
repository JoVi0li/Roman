import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/login';
import Main from './src/screens/main';
import ProjectList from './src/screens/main';

const AuthStack = createStackNavigator();

export default function Stack(){
  return(
    <NavigationContainer>

      <AuthStack.Navigator
        headerMode = 'none'
      >
        {/* <AuthStack.Screen name = 'Login' component={Login} /> */}

        <AuthStack.Screen name = 'Main' component={Main} />

        <AuthStack.Screen name = 'ProjectList' component={ProjectList} /> 

      </AuthStack.Navigator>

    </NavigationContainer>
  )
}
