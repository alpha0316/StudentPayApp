import React from 'react'
import { StyleSheet, View , Image , Text , TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Svg, { Path } from "react-native-svg"
import { SvgXml } from 'react-native-svg';
import Home from '../screens/Home'
import Earn from '../screens/Earn';
import Learn from '../screens/Learn'
import Pay from '../screens/Pay'
import Header from '../Components/Header';
import Tabs from '../Navigation/Tabs'
import Splash from '../Onboarding/Splash';
import SignUp from '../Onboarding/SignUp';
import SignIn from '../Onboarding/SignIn';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Tabs" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;