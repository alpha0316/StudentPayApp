import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';


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
              <Image source={require('../assets/Notification.png')} />
            </View>
          </View>
          <View style = {styles.balance}> 
              <Text style = {styles.header}>Your Balance</Text>
              <Text style = {styles.bold}>₵20,903.00</Text>
          </View>
          <View style = {styles.actions}>
            <View style={styles.send}>
                <Image source={require('../assets/send.png')} />
                <Text style = {styles.actionText}>Send</Text>
            </View>
            <View style={styles.send}>
                <Image source={require('../assets/Withdraw.png')} />
                <Text style = {styles.actionText}>Withdraw</Text>
            </View>
            <View style={styles.send}>
                <Image source={require('../assets/Deposit.png')} />
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
    marginVertical : 52,
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