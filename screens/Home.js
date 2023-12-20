import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path } from "react-native-svg"


const Home = () => {
  return (  
        <ScrollView>
        <View style={styles.container}> 
          <View style = {styles.col1}>
          <View style = {styles.profile}>
                  <View style ={styles.image}></View>
              <View style={styles.TextContainer}>
                  <Text style = {styles.p}>Good Morning,</Text>
                  <Text style = {styles.bodyText}>Travis White</Text>
              </View>
            </View>
            <View style = {styles.coins}>
              <Image source={require('../assets/coins.png')}/>
              <Text style={styles.coinsValue}>17,537</Text> 
              <Svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  >
                  <Path d="M10.5 14.3333C10.5001 14.7538 10.3413 15.1588 10.0554 15.4671C9.76951 15.7754 9.37763 15.9643 8.95834 15.9958L8.83334 16H7.16667C6.74619 16.0001 6.3412 15.8413 6.03288 15.5554C5.72456 15.2695 5.53571 14.8776 5.50417 14.4583L5.5 14.3333H10.5ZM8 0.166656C9.51249 0.166632 10.9659 0.754068 12.0535 1.80505C13.1412 2.85604 13.7781 4.2884 13.83 5.79999L13.8333 5.99999V9.13666L15.3517 12.1733C15.4179 12.3058 15.4511 12.4524 15.4483 12.6005C15.4455 12.7486 15.4069 12.8939 15.3357 13.0238C15.2645 13.1537 15.1629 13.2645 15.0396 13.3465C14.9162 13.4286 14.7748 13.4795 14.6275 13.495L14.5317 13.5H1.46834C1.32014 13.5 1.17414 13.4641 1.04285 13.3954C0.911566 13.3267 0.798902 13.2271 0.714518 13.1053C0.630133 12.9835 0.576543 12.843 0.55834 12.6959C0.540138 12.5488 0.557865 12.3995 0.610003 12.2608L0.648337 12.1733L2.16667 9.13666V5.99999C2.16667 4.45289 2.78125 2.96916 3.87521 1.8752C4.96918 0.781238 6.45291 0.166656 8 0.166656Z" fill="#000" /> 
              </Svg>
            </View>
          </View>
          <View style = {styles.balance}> 
              <Text style = {styles.header}>Your Balance</Text>
              <Text style = {styles.bold}>₵20,903.00</Text>
          </View>
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
  }
});

export default Home