import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path } from "react-native-svg"
import Profile from '../Components/Header'
import Balance from '../Components/Balance';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Components/Header'
import SubsPage from '../EarnPages/SubsPage';


const ProfileScreen = () => (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Content</Text>
    </View>
  );
  
  const PostsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Posts</Text>
    </View>
  );
  
  const SettingsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
  
  const FavoritesScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites</Text>
    </View>
  );
  
  const TopTabs = createMaterialTopTabNavigator()

  const screenOptions = {
    tabBarShowLabel : false,
    headerShown : false,

    tabBarStyle : {
      
     backgroundColor : '#fff',
     alignContent : 'center',
     borderRadius : 12,
     overflow: 'hidden',
     gap : 12
    }
    
  }


  const EarnNavLinks = ({ navigation }) => {
    return(
            
            <TopTabs.Navigator
            screenOptions={screenOptions}
            >
              
              <TopTabs.Screen 
                       name="Home"
                       component={SubsPage}
                       options={{
                         tabBarIcon: ({ focused }) => (
                        
                          <View style ={{borderRadius:24, height : '200' , width : '200' }}>
                        
                        <Text  
                          style={{
                            alignItems : 'center',
                            alignItems : 'center',
                            justifyContent  : 'center',
                            paddingHorizontal : 4,
                            paddingVertical : 12,
                            color: focused ? 'black' : '#6F6F6F',
                            right :24,
                            top : -10,
                            height : 45,
                            fontWeight : focused? 'bold' : '300',
                            width : 85,
                          }}>Subscribe</Text>
                        </View>
                     
                         ),
                       }}
              />
  
            <TopTabs.Screen 
                       name="Pay"
                       component={PostsScreen}
                       options={{
                        tabBarIcon: ({ focused }) => (
                       
                         <View style ={{borderRadius:24, height : '200' , width : '200' }}>
                       
                       <Text  
                         style={{
                           alignItems : 'center',
                           alignItems : 'center',
                           justifyContent  : 'center',
                           paddingHorizontal : 4,
                           paddingVertical : 12,
                           color: focused ? 'black' : '#6F6F6F',
                           right :24,
                           top : -10,
                           height : 45,
                           fontWeight : focused? 'bold' : '300',
                           width : 85,
                         }}>Subscribe</Text>
                       </View>
                    
                        ),
                      }}
              />
               <TopTabs.Screen 
          
                       name="Learn"
                       component={SettingsScreen}
                       
              />
                          <TopTabs.Screen 
                          
                          
                         name="Earn"
                          component={FavoritesScreen}
                          
              />        
              
  
           
            </TopTabs.Navigator>   
    )
  }






export default EarnNavLinks