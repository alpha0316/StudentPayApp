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
        <Balance/>
          <View style = {styles.actions}>
            <View style={styles.send}>
                <Svg
                   width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <Path d="M1.47311 7.69885C0.523748 8.01669 0.431701 9.31686 1.32035 9.84364L7.81768 13.6881C7.98088 13.7848 8.16689 13.8326 8.3526 13.8256C8.53832 13.8185 8.71556 13.7569 8.8623 13.6484L16.3347 8.11453C16.5503 7.95381 16.8345 8.23799 16.6745 8.45431L11.1405 15.9254C11.0321 16.0721 10.9705 16.2493 10.9634 16.4351C10.9563 16.6208 11.0041 16.8068 11.1009 16.97L14.9474 23.4707C15.4735 24.3587 16.7737 24.2666 17.0922 23.318L24.2015 2.13813C24.5157 1.20347 23.5876 0.275411 22.6523 0.588849L1.47311 7.69885Z" fill="#000" /> 
                </Svg>
                <Text style = {styles.actionText}>Send</Text>
            </View>
            <View style={styles.send}> 
                <Svg
                   width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <Path d="M11 22L8.25 17.875H9.625V15.125H12.375V17.875H13.75L11 22ZM20.625 1.375V12.375H1.375V1.375H20.625ZM22 0H0V13.75H22V0Z" fill="#000" /> 
                  <Path d="M11 2.75C12.094 2.75 13.1432 3.1846 13.9168 3.95818C14.6904 4.73177 15.125 5.78098 15.125 6.875C15.125 7.96902 14.6904 9.01823 13.9168 9.79182C13.1432 10.5654 12.094 11 11 11H17.875V9.625H19.25V4.125H17.875V2.75H11ZM6.875 6.875C6.875 5.78098 7.3096 4.73177 8.08318 3.95818C8.85677 3.1846 9.90598 2.75 11 2.75H4.125V4.125H2.75V9.625H4.125V11H11C9.90598 11 8.85677 10.5654 8.08318 9.79182C7.3096 9.01823 6.875 7.96902 6.875 6.875Z" fill="#000" /> 
                </Svg> 
                <Text style = {styles.actionText}>Withdraw</Text>
            </View>
            <View style={styles.send}>
            <Svg
                   width="22" height="22" viewBox="0 0 22 22" transform="matrix(-1 0 0 -1 22 22)" fill="none">
                  <Path d="M11 22L8.25 17.875H9.625V15.125H12.375V17.875H13.75L11 22ZM20.625 1.375V12.375H1.375V1.375H20.625ZM22 0H0V13.75H22V0Z" fill="#000" /> 
                  <Path d="M11 2.75C12.094 2.75 13.1432 3.1846 13.9168 3.95818C14.6904 4.73177 15.125 5.78098 15.125 6.875C15.125 7.96902 14.6904 9.01823 13.9168 9.79182C13.1432 10.5654 12.094 11 11 11H17.875V9.625H19.25V4.125H17.875V2.75H11ZM6.875 6.875C6.875 5.78098 7.3096 4.73177 8.08318 3.95818C8.85677 3.1846 9.90598 2.75 11 2.75H4.125V4.125H2.75V9.625H4.125V11H11C9.90598 11 8.85677 10.5654 8.08318 9.79182C7.3096 9.01823 6.875 7.96902 6.875 6.875Z" fill="#000" />

                </Svg> 
                <Text style = {styles.actionText}>Deposit</Text>
            </View>
          </View>
          <View style = {styles.quickSend}>
            
              <Text style = {styles.headText}>Quick Send</Text>
              <View style={styles.friendWrapper}>
                <ScrollView
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}
                  style = {styles.friendWrapper}
                >
                    <View style = {styles.friends}>
                      <View style ={styles.friendImage}></View>
                      <Text style = {styles.friendText}>Charles</Text>
                  </View>
                  <View style = {styles.friends}>
                      <View style ={styles.friendImage}></View>
                      <Text style = {styles.friendText}>Charles</Text>
                  </View>
                  <View style = {styles.friends}>
                      <View style ={styles.friendImage}></View>
                      <Text style = {styles.friendText}>Charles</Text>
                  </View>
                  <View style = {styles.friends}>
                      <View style ={styles.friendImage}></View>
                      <Text style = {styles.friendText}>Charles</Text>
                  </View>
                  <View style = {styles.friends}>
                      <View style ={styles.friendImage}></View>
                      <Text style = {styles.friendText}>Charles</Text>
                  </View>
                  <View style = {styles.friends}>
                      <View style ={styles.friendImage}></View>
                      <Text style = {styles.friendText}>Charles</Text>
                  </View>
                  <View style = {styles.friends}>
                      <View style ={styles.friendImage}></View>
                      <Text style = {styles.friendText}>Charles</Text>
                  </View>
                </ScrollView>
                  

              </View>
              
          </View>
          <View style={styles.transaction}>
              <View style = { styles.row1 }>
                  <Text style={styles.transactionHeader}>Recent Transactions</Text>
                  <Text style={styles.p}>See All</Text>
              </View>
              <View style={styles.transactionContainer}>
                  <View style={styles.transactionWrapper}>
                        <View style={styles.transactionBody}>
                          <View style={styles.userDetails}>
                            <View style ={styles.friendImage}></View>
                            <View style = {styles.textDetails}>
                                  <Text style = {styles.textHeader}>Groceries</Text>
                                  <View style={styles.bottomText}>
                                      <Text style={styles.date}>Fri, 14 Oct</Text>
                                      <Text style={styles.time}>3:30pm</Text>
                                  </View>
                              </View>
                            </View>
                          <Text style={styles.moneyPaid}>-$45.67</Text>    
                        
                        </View>
                        <View style={styles.transactionBody}>
                          <View style={styles.userDetails}>
                            <View style ={styles.friendImage}></View>
                            <View style = {styles.textDetails}>
                                  <Text style = {styles.textHeader}>Groceries</Text>
                                  <View style={styles.bottomText}>
                                      <Text style={styles.date}>Fri, 14 Oct</Text>
                                      <Text style={styles.time}>3:30pm</Text>
                                  </View>
                              </View>
                            </View>
                          <Text style={styles.moneyPaid}>-$45.67</Text>    
                        
                        </View>
                        <View style={styles.transactionBody}>
                          <View style={styles.userDetails}>
                            <View style ={styles.friendImage}></View>
                            <View style = {styles.textDetails}>
                                  <Text style = {styles.textHeader}>Groceries</Text>
                                  <View style={styles.bottomText}>
                                      <Text style={styles.date}>Fri, 14 Oct</Text>
                                      <Text style={styles.time}>3:30pm</Text>
                                  </View>
                              </View>
                            </View>
                          <Text style={styles.moneyPaid}>-$45.67</Text>    
                        
                        </View>
                        <View style={styles.transactionBody}>
                          <View style={styles.userDetails}>
                            <View style ={styles.friendImage}></View>
                            <View style = {styles.textDetails}>
                                  <Text style = {styles.textHeader}>Groceries</Text>
                                  <View style={styles.bottomText}>
                                      <Text style={styles.date}>Fri, 14 Oct</Text>
                                      <Text style={styles.time}>3:30pm</Text>
                                  </View>
                              </View>
                            </View>
                          <Text style={styles.moneyPaid}>-$45.67</Text>    
                        
                        </View>
                        <View style={styles.transactionBody}>
                          <View style={styles.userDetails}>
                            <View style ={styles.friendImage}></View>
                            <View style = {styles.textDetails}>
                                  <Text style = {styles.textHeader}>Groceries</Text>
                                  <View style={styles.bottomText}>
                                      <Text style={styles.date}>Fri, 14 Oct</Text>
                                      <Text style={styles.time}>3:30pm</Text>
                                  </View>
                              </View>
                            </View>
                          <Text style={styles.moneyPaid}>-$45.67</Text>    
                        
                        </View>
                        <View style={styles.transactionBody}>
                          <View style={styles.userDetails}>
                            <View style ={styles.friendImage}></View>
                            <View style = {styles.textDetails}>
                                  <Text style = {styles.textHeader}>Groceries</Text>
                                  <View style={styles.bottomText}>
                                      <Text style={styles.date}>Fri, 14 Oct</Text>
                                      <Text style={styles.time}>3:30pm</Text>
                                  </View>
                              </View>
                            </View>
                          <Text style={styles.moneyPaid}>-$45.67</Text>    
                        
                        </View>
                        <View style={styles.transactionBody}>
                          <View style={styles.userDetails}>
                            <View style ={styles.friendImage}></View>
                            <View style = {styles.textDetails}>
                                  <Text style = {styles.textHeader}>Groceries</Text>
                                  <View style={styles.bottomText}>
                                      <Text style={styles.date}>Fri, 14 Oct</Text>
                                      <Text style={styles.time}>3:30pm</Text>
                                  </View>
                              </View>
                            </View>
                          <Text style={styles.moneyPaid}>-$45.67</Text>    
                        
                        </View>
                  </View>
              </View>
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
  }
});

export default Home