import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path , G , Defs , Rect , Mask } from "react-native-svg"
import Profile from '../Components/Header'
import Balance from '../Components/Balance';
import PrimaryButton from '../Components/PrimaryButton';


const Points = () => {
  return (  
        <ScrollView style ={{gap : 12}}>
            <View style={styles.container}>
                <View>
                    <ScrollView
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}
                  style = {{gap : 8 , marginBottom : 16}}
                >
                    <View style = {styles.coinsDaysLevelWrapper}>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Mon</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Tue</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Wed</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Thu</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Fri</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Sat</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Sun</Text>
                    </View>
                    </View >
                    <View style = {styles.coinsMothLevelWrapper}>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Apr</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>May</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Jun</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Jul</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Aug</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Sep</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Sep</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Oct</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Nov</Text>
                    </View>
                    <View style={styles.daysContainer}>
                        <View style={styles.day} >
                            <View style={styles.mainMeter}>
                                <View style={styles.active}>
                                </View>   
                            </View>
                        </View>   
                        <Text style={{color : '#6F6F6F'}}>Dec</Text>
                    </View>
                    </View >
                   
                    </ScrollView>
                    <Text style ={{fontSize : 18, fontWeight : '700', marginBottom : 12}}>Referral System</Text>
                    <View style={styles.subsInfoContainer}>
                    <View>
                        <View style = {styles.subsInfo}>
                          <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <Path d="M1.47311 7.40808C0.523748 7.72593 0.431701 9.0261 1.32035 9.55287L7.81768 13.3974C7.98088 13.4941 8.16689 13.5419 8.3526 13.5348C8.53832 13.5278 8.71556 13.4662 8.8623 13.3577L16.3347 7.82376C16.5503 7.66305 16.8345 7.94723 16.6745 8.16355L11.1405 15.6346C11.0321 15.7813 10.9705 15.9586 10.9634 16.1443C10.9563 16.33 11.0041 16.516 11.1009 16.6792L14.9474 23.18C15.4735 24.0679 16.7737 23.9759 17.0922 23.0272L24.2015 1.84737C24.5157 0.912706 23.5876 -0.0153525 22.6523 0.298085L1.47311 7.40808Z" fill="#E3BA14"/>
                          </Svg>
                            <Text style={{color : '#6F6F6F'}}>Earn points for key activities on the platform </Text>
                        </View>
                        <View style = {styles.subsInfo}>
                           <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                             <Path d="M12.5 13.021C11.5331 13.021 10.6057 13.4051 9.922 14.0888C9.23827 14.7726 8.85416 15.6999 8.85416 16.6668C8.85416 17.6338 9.23827 18.5611 9.922 19.2448C10.6057 19.9286 11.5331 20.3127 12.5 20.3127C13.4669 20.3127 14.3943 19.9286 15.078 19.2448C15.7617 18.5611 16.1458 17.6338 16.1458 16.6668C16.1458 15.6999 15.7617 14.7726 15.078 14.0888C14.3943 13.4051 13.4669 13.021 12.5 13.021ZM10.9375 16.6668C10.9375 16.2524 11.1021 15.855 11.3951 15.562C11.6882 15.2689 12.0856 15.1043 12.5 15.1043C12.9144 15.1043 13.3118 15.2689 13.6048 15.562C13.8979 15.855 14.0625 16.2524 14.0625 16.6668C14.0625 17.0812 13.8979 17.4787 13.6048 17.7717C13.3118 18.0647 12.9144 18.2293 12.5 18.2293C12.0856 18.2293 11.6882 18.0647 11.3951 17.7717C11.1021 17.4787 10.9375 17.0812 10.9375 16.6668Z" fill="black"/>
                              <Path d="M18.2562 5.32923L14.9448 0.686523L2.76875 10.4136L2.09375 10.4063V10.4167H1.5625V22.9167H23.4375V10.4167H22.4354L20.4417 4.58444L18.2562 5.32923ZM20.2344 10.4167H9.78854L17.5687 7.76465L19.1542 7.25736L20.2344 10.4167ZM16.1979 6.03131L8.16667 8.76882L14.5271 3.68757L16.1979 6.03131ZM3.64583 18.9261V14.4053C4.08531 14.2495 4.48449 13.9977 4.81427 13.6681C5.14405 13.3385 5.39611 12.9395 5.55208 12.5001H19.4479C19.6038 12.9396 19.8559 13.3388 20.1856 13.6686C20.5154 13.9984 20.9146 14.2504 21.3542 14.4063V18.9271C20.9146 19.0831 20.5154 19.3351 20.1856 19.6649C19.8559 19.9946 19.6038 20.3939 19.4479 20.8334H5.55417C5.39811 20.3935 5.1458 19.994 4.81565 19.664C4.48549 19.334 4.08583 19.0819 3.64583 18.9261Z" fill="black"/>
                            </Svg>
                            <Text style={{color : '#6F6F6F',}}>The points can be converted to cash</Text>
                        </View>
                        <View style = {styles.subsInfo}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
                            <Mask id="mask0_279_1870" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="-1" y="0" width="30" height="30">
                                 <Path d="M14 2L17.314 4.41754L21.4166 4.40997L22.6765 8.31386L26 10.7188L24.725 14.6176L26 18.5165L22.6765 20.9214L21.4166 24.8253L17.314 24.8177L14 27.2353L10.686 24.8177L6.58336 24.8253L5.32348 20.9214L2 18.5165L3.27501 14.6176L2 10.7188L5.32348 8.31386L6.58336 4.40997L10.686 4.41754L14 2Z" fill="white" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                  <Path d="M9.5838 14.6178L12.7382 17.7722L19.047 11.4634" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            </Mask>
                             <G mask="url(#mask0_279_1870)">
                            <Path d="M-1.14124 -0.523438H29.1411V29.7589H-1.14124V-0.523438Z" fill="black"/>
                            </G>
                        </Svg>
                            <Text style={{color : '#6F6F6F',}}>Every 10,000 points is equivalent to Ghc1</Text>
                        </View>
                        <View style={styles.points}>
                            <View style ={styles.totalPoints}>
                                <Text style = {{fontSize : 15}}>Total Points</Text>
                            <View style={{flexDirection : 'row', gap : 4}}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                  <Path d="M12.5 25L8.79425 21.3496H3.65044V16.2058L0 12.5L3.65044 8.79425V3.65044H8.79425L12.5 0L16.2058 3.65044H21.3496V8.79425L25 12.5L21.3496 16.2058V21.3496H16.2058L12.5 25ZM9.26438 17.2013L12.5 15.2378L15.7356 17.2013L14.8783 13.5232L17.7544 11.0343L13.9657 10.7301L12.5 7.24558L11.0343 10.7301L7.24558 11.0343L10.1217 13.5232L9.26438 17.2013Z" fill="#E3BA14"/>
                                </Svg>
                                <Text style={{fontSize : 20 , fontWeight : '700'}}>17,537</Text>
                            </View>
                            </View>
                            <View style ={styles.totalPoints}>
                                <Text style = {{fontSize : 15}}>Redeemed</Text>
                            <View style={{flexDirection : 'row', gap : 4}}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                  <Path d="M12.5 25L8.79425 21.3496H3.65044V16.2058L0 12.5L3.65044 8.79425V3.65044H8.79425L12.5 0L16.2058 3.65044H21.3496V8.79425L25 12.5L21.3496 16.2058V21.3496H16.2058L12.5 25ZM9.26438 17.2013L12.5 15.2378L15.7356 17.2013L14.8783 13.5232L17.7544 11.0343L13.9657 10.7301L12.5 7.24558L11.0343 10.7301L7.24558 11.0343L10.1217 13.5232L9.26438 17.2013Z" fill="#E3BA14"/>
                                </Svg>
                                <Text style={{fontSize : 20 , fontWeight : '700'}}>17,537</Text>
                            </View>
                            </View>
                            
                            
                           
                        </View>
                     
                    </View>
                    <PrimaryButton title={'Redeem'} />
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
    gap : 16,
    flexDirection : 'row'
  },
  coinsDaysLevelWrapper : {
    padding : 16,
    borderRadius : 12,
    backgroundColor : 'white',
    gap : 27,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    marginRight : 16
  },
  coinsMothLevelWrapper : {
    padding : 16,
    borderRadius : 12,
    backgroundColor : 'white',
    gap : 10,
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    marginRight : 16
  },
  day : {
    
  },
  daysContainer : {
    gap : 8,
    alignItems : 'center'
  },
  mainMeter : {
    width: 9,
    height: 100,
    borderRadius : 12,
    backgroundColor : '#e2e2e2',
    justifyContent : "flex-end"
  },
  active : {
    width: 9,
    height: 34,
    borderRadius : 12,
    backgroundColor : '#EFE72A'
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
    marginBottom : 12,
    alignItems : 'center',
    alignContent : 'center'
  },
  totalPoints : {
    padding : 24,
    borderRadius : 24,
    backgroundColor : 'white',
    flex : 1,
    flexDirection : 'column',
    gap: 12,
    flex : 1,
    alignItems : 'center',
    width : 170
  },
  points : {
    flexDirection : 'row',
    gap : 16,
    marginBottom : 12
  }

});

export default Points