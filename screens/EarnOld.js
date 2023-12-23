import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path } from "react-native-svg"
import Profile from '../Components/Header'
import Balance from '../Components/Balance';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';



const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
  tabBarShowLabel : true,
  headerShown : false,
  tabBarStyle : {
    position : 'absolute',
    left : 20,
    right : 20,
    bottom : 30,
    borderRadius : 28 ,
    alignItems : 'center',
    alignContent : 'center',
    height : 60,
    overflow: 'hidden',
    activeTintColor: 'pink',
    backgroundColor : 'white',
  }
  
}

const Tabs = ({ navigation }) => {
  return(
          <TopTabs.Navigator
          screenOptions={screenOptions}
          >
          <TopTabs.Screen 
                     name="Home"
                     component={ProfileScreen}
                     options={{
                       tabBarIcon: ({ focused }) => (
                      
                        <View 
                      
                        style={{
                          backgroundColor: focused ? '#E3BA14' : 'transparent', // Change to your desired active background color
                          borderRadius: 24, // Optional: Adjust the border radius if needed
                          padding: 12, // Optional: Adjust the padding if needed
                          position : 'absolute',
                          top : 6,
                          left : 6
                        }}>
                        <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24">
                         
                          <Path d="M21 19.7302V8.93651C21 8.73937 20.9548 8.54494 20.868 8.36862C20.7812 8.19229 20.6552 8.03892 20.5 7.92063L11.75 1.25397C11.5336 1.08911 11.2705 1 11 1C10.7295 1 10.4664 1.08911 10.25 1.25397L1.5 7.92063C1.34476 8.03892 1.21875 8.19229 1.13197 8.36862C1.04518 8.54494 1 8.73937 1 8.93651V19.7302C1 20.0669 1.1317 20.3899 1.36612 20.6281C1.60054 20.8662 1.91848 21 2.25 21H7.25C7.58152 21 7.89946 20.8662 8.13388 20.6281C8.3683 20.3899 8.5 20.0669 8.5 19.7302V15.9206C8.5 15.5839 8.6317 15.2609 8.86612 15.0227C9.10054 14.7846 9.41848 14.6508 9.75 14.6508H12.25C12.5815 14.6508 12.8995 14.7846 13.1339 15.0227C13.3683 15.2609 13.5 15.5839 13.5 15.9206V19.7302C13.5 20.0669 13.6317 20.3899 13.8661 20.6281C14.1005 20.8662 14.4185 21 14.75 21H19.75C20.0815 21 20.3995 20.8662 20.6339 20.6281C20.8683 20.3899 21 20.0669 21 19.7302Z" stroke="white" stroke-opacity="1.5" fill = 'none' stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        
                          />
                        </Svg>
                      </View>
                   
                       ),
                     }}
            />

          <TopTabs.Screen 
                     name="Pay"
                     component={PostsScreen}
                     options={{
                       tabBarIcon: ({ focused }) => (
                        
                        <View 
                      
                        style={{
                          backgroundColor: focused ? '#E3BA14' : 'transparent', 
                          color : focused ? '#000' : '#333',
                          borderRadius: 24, 
                          padding: 12, 
                          position : 'absolute',
                          top : 6,
                          left : 16
                        }}>
                        <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="24"
                          viewBox="0 0 24 24">
                         
                          <Path fill-rule="evenodd" clip-rule="evenodd" d="M11.418 0H15.3261C17.6343 0 19.4628 1.36239e-07 20.8932 0.174857C22.365 0.355429 23.5567 0.734857 24.4973 1.58971C25.6577 2.64686 26.0282 4.06171 26.1626 5.89829C26.8872 6.18743 27.4347 6.80114 27.4937 7.57829C27.5 7.648 27.5 7.72229 27.5 7.79086V12.2091C27.5 12.2777 27.5 12.352 27.495 12.4206C27.4347 13.1977 26.8872 13.8126 26.1626 14.1029C26.0282 15.9383 25.6577 17.3531 24.4973 18.4103C23.5567 19.2651 22.365 19.6446 20.8932 19.8251C19.4615 20 17.6343 20 15.3261 20H11.418C9.10986 20 7.2814 20 5.85102 19.8251C4.37921 19.6446 3.18744 19.2651 2.24684 18.4103C1.30749 17.5543 0.890558 16.4697 0.69214 15.1303C0.5 13.8274 0.5 12.1646 0.5 10.064V9.936C0.5 7.83543 0.5 6.17143 0.69214 4.86971C0.890558 3.53029 1.30749 2.44571 2.24684 1.58971C3.18744 0.734857 4.37921 0.355429 5.85102 0.174857C7.28265 1.36239e-07 9.10986 0 11.418 0ZM24.2575 14.2857H21.8237C19.13 14.2857 16.8243 12.4251 16.8243 10C16.8243 7.57486 19.13 5.71429 21.8225 5.71429H24.2562C24.1131 4.18171 23.7903 3.37143 23.1637 2.80229C22.6325 2.31886 21.9041 2.02857 20.6407 1.87429C19.351 1.71657 17.6494 1.71429 15.2546 1.71429H11.4871C9.09228 1.71429 7.39191 1.71657 6.09967 1.87429C4.83758 2.02857 4.10921 2.31886 3.578 2.80229C3.04679 3.28571 2.72781 3.94857 2.55828 5.09829C2.38498 6.27314 2.38247 7.82057 2.38247 10C2.38247 12.1794 2.38498 13.7269 2.55828 14.9029C2.72781 16.0514 3.04679 16.7143 3.578 17.1977C4.10921 17.6811 4.83758 17.9714 6.10093 18.1257C7.39191 18.2834 9.09228 18.2857 11.4871 18.2857H15.2546C17.6494 18.2857 19.351 18.2834 20.642 18.1257C21.9041 17.9714 22.6325 17.6811 23.1637 17.1977C23.7903 16.6286 24.1143 15.8194 24.2575 14.2857ZM5.52326 5.42857C5.52326 5.20124 5.62249 4.98323 5.79912 4.82248C5.97575 4.66173 6.21532 4.57143 6.46512 4.57143H11.4884C11.7382 4.57143 11.9777 4.66173 12.1544 4.82248C12.331 4.98323 12.4302 5.20124 12.4302 5.42857C12.4302 5.6559 12.331 5.87392 12.1544 6.03466C11.9777 6.19541 11.7382 6.28571 11.4884 6.28571H6.46512C6.21532 6.28571 5.97575 6.19541 5.79912 6.03466C5.62249 5.87392 5.52326 5.6559 5.52326 5.42857ZM25.2069 7.42857H21.8237C20.0354 7.42857 18.708 8.63886 18.708 10C18.708 11.3611 20.0354 12.5714 21.8225 12.5714H25.2358C25.4945 12.5566 25.6062 12.3977 25.615 12.3017V7.69829C25.6062 7.60229 25.4945 7.44343 25.2358 7.42972H25.2056L25.2069 7.42857Z" fill="white" fill-opacity="0.7"
                        
                          />
                        </Svg>
                      </View>
                      
                       ),
                     }}
            />
             <TopTabs.Screen 
        
                     name="Learn"
                     component={SettingsScreen}
                     options={{
                       tabBarIcon: ({ focused }) => (
                     
                        <View 
                      
                        style={{
                          backgroundColor: focused ? '#E3BA14' : 'transparent', // Change to your desired active background color
                          color : focused ? '#fff' : '#333',
                          borderRadius: 24, // Optional: Adjust the border radius if needed
                          padding: 12, // Optional: Adjust the padding if needed
                          position : 'absolute',
                          top : 6,
                          right : 6
                        }}>
                        <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="24"
                          viewBox="0 0 24 24">
                         
                          <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.4 1.29412H12C12.3183 1.29412 12.6235 1.43046 12.8485 1.67316C13.0736 1.91585 13.2 2.24501 13.2 2.58824V9.08729C13.606 9.12696 14.0077 9.20711 14.4 9.32671V2.58824C14.4 1.90179 14.1471 1.24346 13.6971 0.758076C13.247 0.272688 12.6365 0 12 0H2.4C1.76348 0 1.15303 0.272688 0.702944 0.758076C0.252856 1.24346 0 1.90179 0 2.58824V18.1176C0 18.8041 0.252856 19.4624 0.702944 19.9478C1.15303 20.4332 1.76348 20.7059 2.4 20.7059H7.5084C7.20277 20.3067 6.9384 19.8728 6.72 19.4118H2.4C2.08174 19.4118 1.77652 19.2754 1.55147 19.0327C1.32643 18.79 1.2 18.4609 1.2 18.1176H6.2484C6.13736 17.6946 6.06304 17.2614 6.0264 16.8235H1.2V2.58824C1.2 2.24501 1.32643 1.91585 1.55147 1.67316C1.77652 1.43046 2.08174 1.29412 2.4 1.29412ZM3.6 2.58824C3.28174 2.58824 2.97652 2.72458 2.75147 2.96727C2.52643 3.20997 2.4 3.53913 2.4 3.88235V5.17647C2.4 5.51969 2.52643 5.84886 2.75147 6.09155C2.97652 6.33424 3.28174 6.47059 3.6 6.47059H10.8C11.1183 6.47059 11.4235 6.33424 11.6485 6.09155C11.8736 5.84886 12 5.51969 12 5.17647V3.88235C12 3.53913 11.8736 3.20997 11.6485 2.96727C11.4235 2.72458 11.1183 2.58824 10.8 2.58824H3.6ZM10.8 3.88235V5.17647H3.6V3.88235H10.8ZM18 16.1765C18 17.721 17.4311 19.2022 16.4184 20.2943C15.4057 21.3865 14.0322 22 12.6 22C11.1678 22 9.79432 21.3865 8.78162 20.2943C7.76893 19.2022 7.2 17.721 7.2 16.1765C7.2 14.632 7.76893 13.1507 8.78162 12.0586C9.79432 10.9665 11.1678 10.3529 12.6 10.3529C14.0322 10.3529 15.4057 10.9665 16.4184 12.0586C17.4311 13.1507 18 14.632 18 16.1765ZM12.024 13.6322C11.9462 13.5746 11.8558 13.5399 11.7617 13.5315C11.6676 13.5231 11.5731 13.5413 11.4876 13.5844C11.4178 13.6175 11.3546 13.665 11.3016 13.7241C11.1898 13.8477 11.1273 14.0135 11.1276 14.1861V18.1655C11.1269 18.2513 11.1419 18.3364 11.1717 18.4159C11.2016 18.4954 11.2457 18.5678 11.3016 18.6288C11.3564 18.6876 11.4201 18.7357 11.49 18.7712C11.6118 18.8313 11.7499 18.8406 11.8776 18.7971C11.9329 18.7774 11.9854 18.7495 12.0336 18.7142L14.7888 16.6864C14.8726 16.6268 14.9402 16.5441 14.9844 16.4469C15.03 16.349 15.0534 16.2409 15.0528 16.1314C15.0522 16.0218 15.0275 15.914 14.9808 15.8167C14.9339 15.7209 14.8649 15.6398 14.7804 15.5812L12.024 13.6322Z" fill="white" fill-opacity="0.7"
                        
                          />
                        </Svg>
                      </View>
                  
                       ),
                     }}
            />
                        <TopTabs.Screen 
                        alignContent = 'center'
                        backgroundColor = 'red'
                       name="Earn"
                        component={FavoritesScreen}
                        options={{
                       tabBarIcon: ({ focused }) => (
                   
                        <View 
                      
                        style={{
                          backgroundColor: focused ? '#E3BA14' : 'transparent', // Change to your desired active background color
                          color : focused ? '#fff' : '#333',
                          borderRadius: 24, // Optional: Adjust the border radius if needed
                          padding: 12, // Optional: Adjust the padding if needed
                          position : 'absolute',
                          top : 6,
                          right : 6
                        }}>
                        <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="24"
                          viewBox="0 0 24 24">
                         
                          <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.95405 0H10.046C10.8404 0 11.5023 4.15846e-08 12.0273 0.0744186C12.5822 0.152558 13.0833 0.325581 13.4854 0.748837C13.8884 1.17302 14.0527 1.70047 14.127 2.28372C14.18 2.69302 14.1933 3.18047 14.1968 3.74419C14.7694 3.76372 15.2802 3.8 15.7345 3.86326C16.7702 4.01023 17.6088 4.31907 18.2707 5.01488C18.9318 5.71163 19.2252 6.59442 19.3648 7.68465C19.5 8.74512 19.5 10.0986 19.5 11.8084V11.9126C19.5 13.6223 19.5 14.9767 19.3648 16.0363C19.2252 17.1265 18.9318 18.0093 18.2707 18.706C17.6088 19.4019 16.7702 19.7107 15.7345 19.8577C14.727 20 13.4412 20 11.8169 20H8.18307C6.55879 20 5.27209 20 4.26554 19.8577C3.22981 19.7107 2.39116 19.4019 1.72926 18.706C1.06823 18.0093 0.774837 17.1265 0.635209 16.0363C0.5 14.9758 0.5 13.6223 0.5 11.9126V11.8084C0.5 10.0986 0.5 8.74419 0.635209 7.68465C0.774837 6.59442 1.06823 5.71163 1.72926 5.01488C2.39116 4.31907 3.22981 4.01023 4.26554 3.86326C4.7759 3.79674 5.28909 3.757 5.80321 3.74419C5.80674 3.18047 5.82088 2.69302 5.87302 2.28372C5.94726 1.70047 6.11163 1.17302 6.51372 0.748837C6.9167 0.325581 7.41777 0.153488 7.97186 0.0744186C8.49767 4.15846e-08 9.16047 0 9.95405 0ZM7.12967 3.72279C7.46372 3.72093 7.81456 3.72093 8.18307 3.72093H11.8169C12.1854 3.72093 12.5363 3.72093 12.8703 3.72279C12.8668 3.19256 12.8544 2.79256 12.8138 2.46977C12.7581 2.04093 12.6635 1.85674 12.5487 1.73581C12.4338 1.61488 12.2588 1.51535 11.8505 1.45674C11.4246 1.39721 10.8519 1.39535 10 1.39535C9.14809 1.39535 8.57544 1.39721 8.1486 1.45767C7.74121 1.51535 7.56623 1.61488 7.45135 1.73674C7.33647 1.85767 7.24191 2.04093 7.18623 2.46977C7.14558 2.79163 7.13321 3.19163 7.12967 3.72279ZM4.4414 5.24651C3.55237 5.37209 3.03981 5.60837 2.66512 6.00186C2.29219 6.39535 2.06772 6.93488 1.94842 7.8707C1.82647 8.82605 1.8247 10.0865 1.8247 11.8605C1.8247 13.6344 1.82647 14.8949 1.94842 15.8512C2.06772 16.786 2.29219 17.3256 2.666 17.7191C3.03981 18.1126 3.55237 18.3488 4.4414 18.4744C5.34986 18.6028 6.54642 18.6047 8.23167 18.6047H11.7666C13.4518 18.6047 14.6493 18.6028 15.5577 18.4744C16.4459 18.3488 16.9584 18.1126 17.3322 17.7191C17.706 17.3256 17.9305 16.786 18.0498 15.8502C18.1718 14.8949 18.1735 13.6344 18.1735 11.8605C18.1735 10.0865 18.1718 8.82698 18.0498 7.86977C17.9305 6.93488 17.706 6.39535 17.3322 6.00186C16.9584 5.60837 16.4459 5.37209 15.5568 5.24651C14.6493 5.11814 13.4518 5.11628 11.7666 5.11628H8.23167C6.54642 5.11628 5.35074 5.11814 4.4414 5.24651ZM10 7.44186C10.1758 7.44186 10.3444 7.51537 10.4687 7.6462C10.593 7.77704 10.6628 7.9545 10.6628 8.13953V8.14884C11.6252 8.40372 12.4302 9.20279 12.4302 10.3098C12.4302 10.4948 12.3604 10.6723 12.2361 10.8031C12.1118 10.9339 11.9432 11.0074 11.7674 11.0074C11.5917 11.0074 11.4231 10.9339 11.2988 10.8031C11.1745 10.6723 11.1047 10.4948 11.1047 10.3098C11.1047 9.95256 10.7282 9.45767 10 9.45767C9.27181 9.45767 8.89535 9.95256 8.89535 10.3098C8.89535 10.667 9.27181 11.1628 10 11.1628C11.224 11.1628 12.4302 12.0558 12.4302 13.4112C12.4302 14.5181 11.6252 15.3163 10.6628 15.5721V15.5814C10.6628 15.7664 10.593 15.9439 10.4687 16.0747C10.3444 16.2056 10.1758 16.2791 10 16.2791C9.82422 16.2791 9.65563 16.2056 9.53134 16.0747C9.40704 15.9439 9.33721 15.7664 9.33721 15.5814V15.5721C8.37484 15.3172 7.56977 14.5181 7.56977 13.4112C7.56977 13.2261 7.6396 13.0487 7.76389 12.9178C7.88819 12.787 8.05678 12.7135 8.23256 12.7135C8.40834 12.7135 8.57692 12.787 8.70122 12.9178C8.82552 13.0487 8.89535 13.2261 8.89535 13.4112C8.89535 13.7684 9.27181 14.2633 10 14.2633C10.7282 14.2633 11.1047 13.7684 11.1047 13.4112C11.1047 13.054 10.7282 12.5581 10 12.5581C8.77605 12.5581 7.56977 11.6651 7.56977 10.3098C7.56977 9.20279 8.37484 8.40372 9.33721 8.14884V8.13953C9.33721 7.9545 9.40704 7.77704 9.53134 7.6462C9.65563 7.51537 9.82422 7.44186 10 7.44186Z" fill="white" fill-opacity="0.8"
                        
                          />
                        </Svg>
                      </View>
                    
                       ),
                     }}
            />        
            

         
          </TopTabs.Navigator>   
  )
}


const EarnOld = () => {
  return (  

    <View style={styles.container}> 
        
        <Tabs />
        <Profile/>
          <View style={styles.scrollArea}> 
       
        <View style = { styles.subsContainer}>
            <Text style = {{fontSize : 16 , fontWeight : '700'}}>You’ve no active Subscription</Text>
            <Text style = {{color : '#6F6F6F', textAlign: 'center' , alignItems : 'center', justifyContent : 'center', alignContent : 'center'}}>Explore the subscriptions below {'\n'} and receive exciting benefits and packages </Text>
        </View>
       
        
        </View>
       
  </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#F4F4F4',
  },
  scroll : {
    flexGrow : 1
  },
  scrollArea : {
    marginHorizontal : 24,
    flexGrow : 1,
    gap : 16
  },
  subsContainer : {
    paddingHorizontal : 40,
    paddingVertical : 27,
    borderRadius : 12,
    backgroundColor : 'white',
    alignItems : 'center'
  }
});

export default Earn

///const TopTab = createMaterialTopTabNavigator();

///const screenOptions = {
 /// tabBarShowLabel : true,
///  headerTitle : false,
/// /// headerShown: false,
///  headerTitle: 'User Profile',
///  headerStyle: {
///    backgroundColor: '#000', // Background color of the header
///  },
///  headerTitleContainerStyle: {
///    left: 0, // Set left padding to 0 to reduce the width of the title container
 /// },
 /// headerTintColor: '#fff', // Text color of the header
/// headerTitleStyle: {
 ///   fontWeight: 'bold', // Font weight of the header title
///
 /// },
  
///}

///const ProfileTopTabNavigator = () => (
  ///<TopTab.Navigator
  ///screenOptions={screenOptions}
  ///>
    ///<TopTab.Screen name="Profile" component={ProfileScreen} />
    ///<TopTab.Screen name="Posts" component={PostsScreen} />
    ///<TopTab.Screen name="Settings" component={SettingsScreen} />
    ////<TopTab.Screen name="Favorites" component={FavoritesScreen} />
 /// </TopTab.Navigator>
///);

// Create a stack navigator for the profile page with a header
////const ProfileStack = createStackNavigator();
////const ProfileStackNavigator = () => (
////  <ProfileStack.Navigator>
////      <ProfileStack.Screen
////      name="Profile"
////      component={ProfileTopTabNavigator}
////      options={{ headerTitle: ' Profile' }}
////    />
////  </ProfileStack.Navigator>
////); 
