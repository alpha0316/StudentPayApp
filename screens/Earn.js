import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path } from "react-native-svg"
import Profile from '../Components/Header'
import Balance from '../Components/Balance';


const Home = () => {
  return (  
        <ScrollView>
        <View style={styles.container}> 
        <Profile/>
        <View style = { styles.subsContainer}>
            <Text style = {{fontSize : 16 , fontWeight : '700'}}>You’ve no active Subscription</Text>
            <Text style = {{color : '#6F6F6F', textAlign: 'center' , alignItems : 'center', justifyContent : 'center', alignContent : 'center'}}>Explore the subscriptions below {'\n'} and receive exciting benefits and packages </Text>
        </View>
       
        
        </View>
        </ScrollView>
        
      
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#F4F4F4',
    marginHorizontal : 24,
    marginVertical : 64,
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

export default Home