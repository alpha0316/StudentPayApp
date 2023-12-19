import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Svg, { Path } from "react-native-svg"
import Home from '../screens/Home'
import Earn from '../screens/Earn'
import Learn from '../screens/Learn'
import Pay from '../screens/Pay'

const Tab = createBottomTabNavigator()
const screenOptions = {
    tabBarShowLabel : false,
    headerShown : false,
    tabBarStyle : {
      position : 'absolute',
      left : 20,
      right : 20,
      bottom : 30,
      backgroundColor : '#E9E9E9',
      borderRadius : 24,
      justifyContent : 'space-around',
      alignItems : 'center',
      alignContent : 'center',
      paddingHorizontal : 4,
      height : 60
    }
    
}

const Tabs = () => {
    return(
            <Tab.Navigator
            screenOptions={screenOptions}
            >
            <Tab.Screen 
            name = 'Home' 
            component={Home}
            options = {{
                tabBarIcon: ({focused}) =>{
                    <View style={{alignItems:'center', justifyContent : "center", backgroundColor : '#E3BA14' }}>
                        <Svg
                        width="25" height="25" viewBox="0 0 25 25"  backgroundColor = '#E3BA14' fill="none">
                        <Path d="M1.47311 7.69885C0.523748 8.01669 0.431701 9.31686 1.32035 9.84364L7.81768 13.6881C7.98088 13.7848 8.16689 13.8326 8.3526 13.8256C8.53832 13.8185 8.71556 13.7569 8.8623 13.6484L16.3347 8.11453C16.5503 7.95381 16.8345 8.23799 16.6745 8.45431L11.1405 15.9254C11.0321 16.0721 10.9705 16.2493 10.9634 16.4351C10.9563 16.6208 11.0041 16.8068 11.1009 16.97L14.9474 23.4707C15.4735 24.3587 16.7737 24.2666 17.0922 23.318L24.2015 2.13813C24.5157 1.20347 23.5876 0.275411 22.6523 0.588849L1.47311 7.69885Z" fill="#000" /> 
                        </Svg>
                    </View>
                }
            }}
            />
            <Tab.Screen name = 'Earn' component={Earn}/>
            </Tab.Navigator>   
    )
}

const styles = StyleSheet.create({
    nav: {
      flex : 1,
      backgroundColor : '#000',
      position : 'absolute',
      bottom : 24,
      left : 20,
      right : 20,
      elevation : 0,
      backgroundColor : '#00000',
      borderRadius : 24,
      height : 90,
      alignItems : 'flex-end',
      justifyContent : 'space-around'
    },
  });
  

export default Tabs