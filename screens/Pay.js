import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path } from "react-native-svg"
import Profile from '../Components/Header'
import Balance from '../Components/Balance';
import PrimaryButton from '../Components/PrimaryButton';
import SecondaryButton from '../Components/SecondaryButton';
import PaymentServices from '../Components/PaymentServices';

const Pay = () => {
  return (  
        
        
        <View style={styles.container}> 
        <ScrollView style={styles.scroll}>
          <View style={styles.scrollArea}>

         
            <Profile/>
            <Balance/>
            <View style={styles.buttons}>
                <PrimaryButton title={'Wallet'} width={170}/>
                <SecondaryButton title={'Transactions'} width={170}/>
            </View>
            <View style={styles.quickPay}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>QuickPay</Text>
                    <Text style={styles.p}>Edit</Text>
                </View>
                <View style={styles.services}>
                    <View style={styles.serviceWrapper}>
                        <PaymentServices/>
                        
                    </View>
                 
                    <View style={styles.serviceWrapper}>
                    </View>
                </View>
            </View>
            
        </View>
        </ScrollView>
        <View style={styles.payButton}>
                <PrimaryButton title={"Pay"}/>
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
    marginVertical : 64,
    gap : 16
  },
  col1 : {
    flexDirection : 'row',
    gap : 12
  },
  profile : {
    padding : 12,
    backgroundColor : '#fff',
    borderRadius : 12,
    flexDirection : 'row',
    gap : 12,
    width : 192
  },
  image : {
    borderRadius : 36,
    width : 36,
    height : 36,
    backgroundColor : '#F4F4F4'
  },
  p : {
    fontSize : 12,
    color : '#515151',
    fontWeight : '400',
    fontStyle : 'normal'
  },
  bodyText : {
    fontWeight : '700',
    fontSize : 15,
  },
  coins : {
    flexDirection : 'row',
    gap : 18,
    padding : 16,
    borderRadius : 12,
    backgroundColor : '#fff',
    alignItems : 'center'
  },
  coinsValue : {
    fontSize : 18
  },
  balance : {
    flexDirection : 'column',
    padding : 12,
    backgroundColor : '#fff',
    borderRadius : 12,
    gap : 8
  },
  header : {
    fontSize : 15,
    color : '#515151',
  },
  bold : {
    fontSize : 40,
    fontWeight : '700',
    color : '#000',
  },
  actions : {
    flexDirection : 'row',
    gap : 16
  },
  send : {
    flexDirection : 'column',
    gap : 16,
    padding : 16,
    backgroundColor : '#fff',
    width : 111,
    alignItems : 'center',
    borderRadius : 12
  },
  actionText : {
    fontSize : 15,
    fontWeight : '700',
    color : '#515151',
  },
  quickSend : {
    padding : 18,
    gap : 16,
    borderRadius : 12,
    backgroundColor : '#fff'
  },
  headText : {
    fontSize : 18,
    fontWeight : '700'
  },
  friendImage : {
    borderRadius : 36,
    width : 46,
    height : 46,
    backgroundColor : '#F4F4F4'
  },
  friendText : {
    fontSize : 14,
    color : '#000',
    fontWeight : '400',
    fontStyle : 'normal'
  },
  friends : {
    gap : 8,
    paddingHorizontal : 12
  },
  friendWrapper : {
    flexDirection : 'row',
    gap : 24
  },
  transaction : {
    padding : 18,
    borderRadius : 12,
    backgroundColor : '#fff',
    gap : 16
  },
  row1 : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  transactionHeader : {
    fontSize : 18,
    fontWeight : '700'
  },
  textHeader : {
    fontSize : 15,
    fontWeight : '700'
  },
  transactionWrapper : {
    flexDirection : 'column',
    gap : 16
  },
  userDetails : {
    flexDirection : 'row',
    gap : 12
  },
  transactionBody : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  date : {
    fontSize : 12,
    color : '#15151'
  },
  time : {
    fontSize : 12,
    color : '#15151'
  },
  moneyPaid : {
    fontSize : 15,
    fontWeight : '700',
    color : '#F00'
  },
  textDetails : {
    gap : 4
  },
  bottomText : {
    flexDirection : 'row',
    gap : 8
  },
  buttons : {
    flexDirection : 'row',
    gap : 16,
    justifyContent : 'space-around',
    alignContent : 'center',
    alignItems : 'center'
  },
  payButton : {
    position : 'absolute',
    bottom : 100,
    width : 370,
    right : 22
  
  },
  quickPay : {
    backgroundColor: 'white',
    paddingHorizontal : 24,
    paddingVertical : 16,
    borderRadius : 24,
    gap : 16
  },
  header : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  headerText : {
    fontSize : 18,
    fontWeight : '700'
  },
  p : {
    color : '#E3BA14',
    fontSize : 15
  },
  serviceWrapper : {
    gap : 36,
    justifyContent : 'space-between'
  },
  serviceContainer : {
    flexDirection : 'column',
    paddingHorizontal : 30,
    alignContent : 'center',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 24,
    paddingTop : 22,
    paddingBottom : 4,
    borderWidth : 1,
    borderColor  : '#C2C2C2',
    borderRadius : 24,
    width : 140,
    height : 120
  },
  services : {
    gap : 36,
    flexDirection : 'row',
  }
});

export default Pay