import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path , G , Defs , Rect } from "react-native-svg"
import Profile from '../Components/Header'
import Balance from '../Components/Balance';
import SecondaryButton from '../Components/SecondaryButton';


const SubsPage = () => {
  return (  
        <ScrollView>
            <View style={styles.container}>
                <View style = { styles.subsContainer}>
                    <Text style = {{fontSize : 16 , fontWeight : '700'}}>You’ve no active Subscription</Text>
                    <Text style = {{color : '#6F6F6F', textAlign: 'center' , alignItems : 'center', justifyContent : 'center', alignContent : 'center'}}>Explore the subscriptions below {'\n'} and receive exciting benefits and packages </Text>
                </View>
                <View style={styles.subsInfoContainer}>
                    <Text style={{fontSize : 18, fontWeight : '700'}} >Student Monthly Subsription</Text>
                    <View>
                        <View style = {styles.subsInfo}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <Path d="M12.5 13.521C11.5331 13.521 10.6057 13.9051 9.92201 14.5888C9.23829 15.2726 8.85417 16.1999 8.85417 17.1668C8.85417 18.1338 9.23829 19.0611 9.92201 19.7448C10.6057 20.4286 11.5331 20.8127 12.5 20.8127C13.4669 20.8127 14.3943 20.4286 15.078 19.7448C15.7617 19.0611 16.1458 18.1338 16.1458 17.1668C16.1458 16.1999 15.7617 15.2726 15.078 14.5888C14.3943 13.9051 13.4669 13.521 12.5 13.521ZM10.9375 17.1668C10.9375 16.7524 11.1021 16.355 11.3952 16.062C11.6882 15.7689 12.0856 15.6043 12.5 15.6043C12.9144 15.6043 13.3118 15.7689 13.6049 16.062C13.8979 16.355 14.0625 16.7524 14.0625 17.1668C14.0625 17.5812 13.8979 17.9787 13.6049 18.2717C13.3118 18.5647 12.9144 18.7293 12.5 18.7293C12.0856 18.7293 11.6882 18.5647 11.3952 18.2717C11.1021 17.9787 10.9375 17.5812 10.9375 17.1668Z" fill="black"/>
                                <Path d="M18.2562 5.82923L14.9448 1.18652L2.76875 10.9136L2.09375 10.9063V10.9167H1.5625V23.4167H23.4375V10.9167H22.4354L20.4417 5.08444L18.2562 5.82923ZM20.2344 10.9167H9.78854L17.5687 8.26465L19.1542 7.75736L20.2344 10.9167ZM16.1979 6.53131L8.16667 9.26882L14.5271 4.18757L16.1979 6.53131ZM3.64583 19.4261V14.9053C4.08531 14.7495 4.48449 14.4977 4.81427 14.1681C5.14405 13.8385 5.39611 13.4395 5.55208 13.0001H19.4479C19.6038 13.4396 19.8559 13.8388 20.1856 14.1686C20.5154 14.4984 20.9146 14.7504 21.3542 14.9063V19.4271C20.9146 19.5831 20.5154 19.8351 20.1856 20.1649C19.8559 20.4946 19.6038 20.8939 19.4479 21.3334H5.55417C5.39811 20.8935 5.1458 20.494 4.81565 20.164C4.48549 19.834 4.08583 19.5819 3.64583 19.4261Z" fill="black"/>
                                </Svg>
                            <Text style={{color : '#6F6F6F'}}>Start earning up to 1000/month {'\n'}including no transaction fees</Text>
                        </View>
                        <View style = {styles.subsInfo}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <G clip-path="url(#clip0_325_1933)">
                                    <Path d="M13 0.5L16.125 5.1875H14.5625V8.3125H11.4375V5.1875L9.875 5.1875L13 0.5ZM2.0625 23.9375V11.4375L23.9375 11.4375V23.9375L2.0625 23.9375ZM0.5 25.5L25.5 25.5L25.5 9.875L0.5 9.875L0.5 25.5Z" fill="#E3BA14"/>
                                    <Path d="M13 22.375C11.7568 22.375 10.5645 21.8811 9.68544 21.0021C8.80636 20.123 8.3125 18.9307 8.3125 17.6875C8.3125 16.4443 8.80636 15.252 9.68544 14.3729C10.5645 13.4939 11.7568 13 13 13H5.1875V14.5625L3.625 14.5625V20.8125H5.1875V22.375L13 22.375ZM17.6875 17.6875C17.6875 18.9307 17.1936 20.123 16.3146 21.0021C15.4355 21.8811 14.2432 22.375 13 22.375H20.8125V20.8125H22.375V14.5625H20.8125V13L13 13C14.2432 13 15.4355 13.4939 16.3146 14.3729C17.1936 15.252 17.6875 16.4443 17.6875 17.6875Z" fill="#E3BA14"/>
                                </G>
                                <Defs>
                                    <Rect width="25" height="25" fill="white" transform="matrix(-1 0 0 -1 25.5 25.5)"/>
                                </Defs>
                        </Svg>
                            <Text style={{color : '#6F6F6F'}}> Except withdrawing from the platform to  {'\n'}another platform</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.subsCategory}>
                    <View style={styles.subsCard}>
                        <View style={styles.headerText}>
                            <Text style ={{fontSize : 18, fontWeight : '700'}} >GHC 50 Offer</Text>
                            <Text style ={{ color : '#6F6F6F' }}>Silver Offer</Text>
                        </View>
                        <Text style ={{ color : '#6F6F6F' }}>
                        Start earning up to 1000/month including no {'\n'} 
                        transaction fees, except withdrawing from {'\n'} 
                        the platform to another platform
                        </Text>
                        <SecondaryButton title={'Subscribe'}/>
                    </View>
                    <View style={styles.subsCard}>
                        <View style={styles.headerText}>
                            <Text style ={{fontSize : 18, fontWeight : '700'}} >GHC 50 Offer</Text>
                            <Text style ={{ color : '#6F6F6F' }}>Silver Offer</Text>
                        </View>
                        <Text style ={{ color : '#6F6F6F' }}>
                        Start earning up to 1000/month including no {'\n'} 
                        transaction fees, except withdrawing from {'\n'} 
                        the platform to another platform
                        </Text>
                        <SecondaryButton title={'Subscribe'}/>
                    </View>
                    <View style={styles.subsCard}>
                        <View style={styles.headerText}>
                            <Text style ={{fontSize : 18, fontWeight : '700'}} >GHC 50 Offer</Text>
                            <Text style ={{ color : '#6F6F6F' }}>Silver Offer</Text>
                        </View>
                        <Text style ={{ color : '#6F6F6F' }}>
                        Start earning up to 1000/month including no {'\n'} 
                        transaction fees, except withdrawing from {'\n'} 
                        the platform to another platform
                        </Text>
                        <SecondaryButton title={'Subscribe'}/>
                    </View>
                </View>
            </View>
            
        </ScrollView>
        
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    marginTop : 24,
    marginBottom : 86,
    gap : 16
  },
  subsContainer : {
    paddingHorizontal : 40,
    paddingVertical : 27,
    borderRadius : 12,
    backgroundColor : 'white',
    alignItems : 'center'
  },
  subsInfoContainer : {
    gap : 12
  },
  subsInfo : {
    padding : 12,
    backgroundColor : 'white',
    flexDirection : 'row',
    gap : 12,
    borderRadius : 12,
    marginBottom : 12
  },
  headerText : {
    flexDirection : 'row',
    gap : 12,
    alignItems : 'flex-end'
  },
  subsCard : {
    paddingVertical : 24,
    paddingHorizontal : 16,
    borderRadius : 24,
    backgroundColor : 'white',
    gap : 16
  },
  subsCategory : {
    gap : 16
  }
});

export default SubsPage