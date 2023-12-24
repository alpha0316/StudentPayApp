import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path , G , Defs , Rect , Stop } from "react-native-svg"
import Profile from '../Components/Header'
import Balance from '../Components/Balance';
import PrimaryButton from '../Components/PrimaryButton';



const Referral = () => {
  return (  
        <ScrollView
        showsHorizontalScrollIndicator = {false}
        >
            <View style={styles.container}>
                  <View style ={styles.row1}>
                      <View style={styles.usersContainer}>
                           <View style={styles.userRow1}>
                           <Svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M4.72222 4C4.72222 2.93913 5.12024 1.92172 5.82871 1.17157C6.53718 0.421427 7.49807 0 8.5 0C9.50193 0 10.4628 0.421427 11.1713 1.17157C11.8798 1.92172 12.2778 2.93913 12.2778 4C12.2778 5.06087 11.8798 6.07828 11.1713 6.82843C10.4628 7.57857 9.50193 8 8.5 8C7.49807 8 6.53718 7.57857 5.82871 6.82843C5.12024 6.07828 4.72222 5.06087 4.72222 4ZM4.72222 10C3.46981 10 2.2687 10.5268 1.38311 11.4645C0.497518 12.4021 0 13.6739 0 15C0 15.7956 0.298511 16.5587 0.829864 17.1213C1.36122 17.6839 2.08189 18 2.83333 18H14.1667C14.9181 18 15.6388 17.6839 16.1701 17.1213C16.7015 16.5587 17 15.7956 17 15C17 13.6739 16.5025 12.4021 15.6169 11.4645C14.7313 10.5268 13.5302 10 12.2778 10H4.72222Z" fill="#6F6F6F" fill-opacity="0.6"/>
                            </Svg>
                                <View style ={{alignItems : 'flex-end'}}>
                                  <Text style={{fontSize : 20, fontWeight : '700' }}>45</Text> 
                                  <Text style={{fontSize : 20, fontWeight : '700' }}>Users</Text>
                                  <Text style ={{color : '#6F6F6F', paddingTop : 8}}>Total Referrals</Text>
                                </View>
          
                           </View>
                           
                      </View>
                      <View style={styles.usersContainer}>
                           <View style={styles.userRow1}>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                              <Path d="M0.997846 6.60472C0.248316 6.85566 0.175644 7.88216 0.877239 8.29805L6.00693 11.3333C6.13578 11.4097 6.28264 11.4474 6.42926 11.4418C6.57588 11.4363 6.71581 11.3876 6.83167 11.302L12.7312 6.9329C12.9014 6.80602 13.1258 7.03038 12.9995 7.20116L8.63036 13.0996C8.54471 13.2155 8.49607 13.3554 8.4905 13.502C8.48493 13.6487 8.52267 13.7955 8.59903 13.9244L11.6359 19.0567C12.0513 19.7578 13.0778 19.6851 13.3293 18.9361L18.9421 2.21449C19.1901 1.47657 18.4574 0.743857 17.7189 0.99132L0.997846 6.60472Z" fill="#6F6F6F" fill-opacity="0.6"/>
                            </Svg>
                                <View style ={{alignItems : 'flex-end'}}>
                                  <Text style={{fontSize : 20, fontWeight : '700' }}>17,537</Text> 
                                  <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                  <Path d="M12.5 25L8.79425 21.3496H3.65044V16.2058L0 12.5L3.65044 8.79425V3.65044H8.79425L12.5 0L16.2058 3.65044H21.3496V8.79425L25 12.5L21.3496 16.2058V21.3496H16.2058L12.5 25ZM9.26438 17.2013L12.5 15.2378L15.7356 17.2013L14.8783 13.5232L17.7544 11.0343L13.9657 10.7301L12.5 7.24558L11.0343 10.7301L7.24558 11.0343L10.1217 13.5232L9.26438 17.2013Z" fill="#E3BA14"/>

                                  </Svg>
                                  <Text style ={{color : '#6F6F6F', paddingTop : 8}}>Points Gained</Text>
                                </View>
          
                           </View>
                           
                      </View>
                      
                  </View> 
                  <Text style ={{fontSize : 18, fontWeight : '700'}}>Referral System</Text>
                  <View style={styles.subsInfoContainer}>
                    <View>
                        <View style = {styles.subsInfo}>
                          <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <Path d="M1.47311 7.40808C0.523748 7.72593 0.431701 9.0261 1.32035 9.55287L7.81768 13.3974C7.98088 13.4941 8.16689 13.5419 8.3526 13.5348C8.53832 13.5278 8.71556 13.4662 8.8623 13.3577L16.3347 7.82376C16.5503 7.66305 16.8345 7.94723 16.6745 8.16355L11.1405 15.6346C11.0321 15.7813 10.9705 15.9586 10.9634 16.1443C10.9563 16.33 11.0041 16.516 11.1009 16.6792L14.9474 23.18C15.4735 24.0679 16.7737 23.9759 17.0922 23.0272L24.2015 1.84737C24.5157 0.912706 23.5876 -0.0153525 22.6523 0.298085L1.47311 7.40808Z" fill="#E3BA14"/>
                          </Svg>
                            <Text style={{color : '#6F6F6F'}}>Send referral codes to other and earn points {'\n'}that can be withdraw as Cash that can be {'\n'}redeemed</Text>
                        </View>
                        <View style = {styles.subsInfo}>
                           <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                             <Path d="M12.5 13.021C11.5331 13.021 10.6057 13.4051 9.922 14.0888C9.23827 14.7726 8.85416 15.6999 8.85416 16.6668C8.85416 17.6338 9.23827 18.5611 9.922 19.2448C10.6057 19.9286 11.5331 20.3127 12.5 20.3127C13.4669 20.3127 14.3943 19.9286 15.078 19.2448C15.7617 18.5611 16.1458 17.6338 16.1458 16.6668C16.1458 15.6999 15.7617 14.7726 15.078 14.0888C14.3943 13.4051 13.4669 13.021 12.5 13.021ZM10.9375 16.6668C10.9375 16.2524 11.1021 15.855 11.3951 15.562C11.6882 15.2689 12.0856 15.1043 12.5 15.1043C12.9144 15.1043 13.3118 15.2689 13.6048 15.562C13.8979 15.855 14.0625 16.2524 14.0625 16.6668C14.0625 17.0812 13.8979 17.4787 13.6048 17.7717C13.3118 18.0647 12.9144 18.2293 12.5 18.2293C12.0856 18.2293 11.6882 18.0647 11.3951 17.7717C11.1021 17.4787 10.9375 17.0812 10.9375 16.6668Z" fill="black"/>
                              <Path d="M18.2562 5.32923L14.9448 0.686523L2.76875 10.4136L2.09375 10.4063V10.4167H1.5625V22.9167H23.4375V10.4167H22.4354L20.4417 4.58444L18.2562 5.32923ZM20.2344 10.4167H9.78854L17.5687 7.76465L19.1542 7.25736L20.2344 10.4167ZM16.1979 6.03131L8.16667 8.76882L14.5271 3.68757L16.1979 6.03131ZM3.64583 18.9261V14.4053C4.08531 14.2495 4.48449 13.9977 4.81427 13.6681C5.14405 13.3385 5.39611 12.9395 5.55208 12.5001H19.4479C19.6038 12.9396 19.8559 13.3388 20.1856 13.6686C20.5154 13.9984 20.9146 14.2504 21.3542 14.4063V18.9271C20.9146 19.0831 20.5154 19.3351 20.1856 19.6649C19.8559 19.9946 19.6038 20.3939 19.4479 20.8334H5.55417C5.39811 20.3935 5.1458 19.994 4.81565 19.664C4.48549 19.334 4.08583 19.0819 3.64583 18.9261Z" fill="black"/>
                            </Svg>
                            <Text style={{color : '#6F6F6F',}}>For every friend you bring in the {'\n'}register or subscribe to the premium,{'\n'}you earn points </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.code}>
                    <Text style={{fontSize : 18, fontWeight: '700'}}>Share your Referral code with your {'\n'}Friends And Earn A Commission and {'\n'}Points </Text>
                    <Text style={{fontSize : 15 , color : '#6F6F6F' }}>Earn up to 1500 coins for every 5 friends you {'\n'}share your referral code with. </Text>
                    <View style={styles.yourCode}>
                      <Text style={{color : '#6F6F6F' }}>Your Code</Text>
                      <Text style={{fontSize : 18, fontWeight: '700'}}>4Q48FKVLA </Text>
                    </View>
                </View>
                <View style={styles.share}>
                    <PrimaryButton title={'Share'} width={300}/>
                    <Svg xmlns="http://www.w3.org/2000/svg" width="38" height="44" viewBox="0 0 38 44" fill="none">
                      <Path d="M25.84 0.888672H17.6193C13.8953 0.888672 10.944 0.888672 8.63656 1.20112C6.25944 1.52201 4.33622 2.19756 2.82044 3.71967C1.30256 5.24178 0.629111 7.17345 0.310333 9.559C1.5729e-07 11.877 0 14.8389 0 18.5777V30.9023C0 34.0859 1.94222 36.8134 4.70145 37.9577C4.56 36.0366 4.56 33.3449 4.56 31.1029V20.5262C4.56 17.8219 4.56 15.4891 4.80911 13.6229C5.07722 11.6216 5.681 9.70467 7.23056 8.14878C8.78011 6.59289 10.6907 5.98701 12.6836 5.71678C14.5413 5.46767 16.8636 5.46767 19.5594 5.46767H26.0406C28.7343 5.46767 31.0523 5.46767 32.9122 5.71678C32.3549 4.29468 31.3821 3.07345 30.1206 2.21225C28.8591 1.35105 27.3674 0.889818 25.84 0.888672Z" fill="black"/>
                      <Path d="M7.59998 20.7266C7.59998 14.9717 7.59998 12.0943 9.38175 10.3062C11.1614 8.51807 14.0262 8.51807 19.76 8.51807H25.84C31.5716 8.51807 34.4385 8.51807 36.2203 10.3062C38 12.0943 38 14.9717 38 20.7266V30.9022C38 36.6571 38 39.5345 36.2203 41.3226C34.4385 43.1107 31.5716 43.1107 25.84 43.1107H19.76C14.0283 43.1107 11.1614 43.1107 9.38175 41.3226C7.59998 39.5345 7.59998 36.6571 7.59998 30.9022V20.7266Z" fill="black"/>
                    </Svg>
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
  row1 : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    
  },
  usersContainer : {
    paddingHorizontal : 24,
    paddingVertical : 16,
    width: 174,
    gap : 8,
    justifyContent : 'space-between',
    borderRadius : 12,
    backgroundColor : 'white'
  },
  userRow1 : {
    justifyContent : 'space-between',
    flexDirection : 'row',
    alignItems : 'flex-start',
    alignContent : 'center'
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
  code : {
    padding : 18,
    backgroundColor : 'white',
    borderRadius : 24,
    gap : 12
  },
  yourCode : {
    padding : 16,
    borderStyle: 'dashed',
    borderWidth : 1,
    borderColor : '#6F6F6F',
    borderRadius : 12
  },
  share : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  }
});

export default Referral