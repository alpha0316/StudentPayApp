import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image , Dimensions, ScrollView, scrollEnabled } from 'react-native';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import Svg, { Path , Rect } from "react-native-svg"
import Profile from '../Components/Header'
import SearchBar from '../Components/SearchBar';


const Home = () => {
  return (  
        <ScrollView>
        <View style={styles.container}> 
        <Profile/>
        <Text style = {styles.pText}>
            Each learning activity completed will attract
            points for the user that can be redeemed on Cash
        </Text>
        <SearchBar/> 
         
         <View style={styles.Categories}>
            <Text style={styles.categoryHeader}>Categories</Text>
            <View>
            <ScrollView
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}

                >
                    <View style = {styles.categoryContainer}>
                    <View style ={styles.categoryImage}>

                    </View>
                    <Text>Money</Text>
                </View>
                <View style = {styles.categoryContainer}>
                    <View style ={styles.categoryImage}>

                    </View>
                    <Text>Wealth</Text>
                </View>
                <View style = {styles.categoryContainer}>
                    <View style ={styles.categoryImage}>

                    </View>
                    <Text>Investment</Text>
                </View><View style = {styles.categoryContainer}>
                    <View style ={styles.categoryImage}>

                    </View>
                    <Text>Loan</Text>
                </View>
                <View style = {styles.categoryContainer}>
                    <View style ={styles.categoryImage}>

                    </View>
                    <Text>Investment</Text>
                </View>
                <View style = {styles.categoryContainer}>
                    <View style ={styles.categoryImage}>

                    </View>
                    <Text>Saving</Text>
                </View>
            </ScrollView>
                
            </View>
            
         </View>
         <View style={styles.Categories}>
            <Text style={styles.categoryHeader}>Posts</Text>
            <View>
            <ScrollView
                  horizontal = {true}
                  showsHorizontalScrollIndicator = {false}
                  style = {
                    {flexDirection : 'row' , gap : 12}
                  }
                >
                <View style = {styles.postContainer}>
                    <View style={styles.row1}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <Path d="M3.8161 21.4911C2.62223 20.338 1.66995 18.9587 1.01484 17.4337C0.359723 15.9086 0.0148947 14.2684 0.000471959 12.6086C-0.0139507 10.9489 0.30232 9.30288 0.930832 7.76668C1.55934 6.23047 2.48751 4.83482 3.66117 3.66117C4.83482 2.48751 6.23047 1.55934 7.76668 0.930832C9.30288 0.30232 10.9489 -0.0139507 12.6086 0.000471959C14.2684 0.0148947 15.9086 0.359723 17.4337 1.01484C18.9587 1.66995 20.338 2.62223 21.4911 3.8161C23.7681 6.17363 25.028 9.33116 24.9995 12.6086C24.971 15.8861 23.6564 19.0212 21.3388 21.3388C19.0212 23.6564 15.8861 24.971 12.6086 24.9995C9.33116 25.028 6.17363 23.7681 3.8161 21.4911ZM19.7286 19.7286C21.605 17.8522 22.6592 15.3072 22.6592 12.6536C22.6592 9.99996 21.605 7.45501 19.7286 5.5786C17.8522 3.7022 15.3072 2.64804 12.6536 2.64804C9.99996 2.64804 7.45501 3.7022 5.5786 5.5786C3.7022 7.45501 2.64804 9.99996 2.64804 12.6536C2.64804 15.3072 3.7022 17.8522 5.5786 19.7286C7.45501 21.605 9.99996 22.6592 12.6536 22.6592C15.3072 22.6592 17.8522 21.605 19.7286 19.7286ZM8.9036 7.6536L18.9036 12.6536L8.9036 17.6536V7.6536Z" fill="#E3BA14"/>
                        </Svg>
                    </View>
                    <Text style={styles.mainPostText}>Fundamental principles Of Money</Text>
                    <View style = {styles.row3}>
                        <View style={styles.student}>
                            <Text>Student</Text>
                            <View style={styles.avaterWrapper}>
                              <View style={styles.avatar1}></View>
                              <View style={styles.avatar2}></View>
                              <View style={styles.avatar3}></View>
                            </View>
                        </View>
                        <View style={styles.prof}>
                            <Image source={require('../assets/prof.png')} />
                            <View style={styles.profDetails}>
                                <Text style={styles.profName}>Prof Evans </Text>
                                <Text style={styles.exp}>10+ years exp </Text>
                            </View>
                        </View>
                    </View>
                    <View style= {styles.line}>
                    </View>
                    <View style={style = { flexDirection : 'row' , gap : 8 }}>
                        <Text style ={styles.coursesText}>30 Lessons</Text>
                        <Text style ={styles.hoursText}>( 10+ hours )</Text>
                    </View>
                </View>
                <View style = {styles.postContainer}>
                    <View style={styles.row1}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <Path d="M3.8161 21.4911C2.62223 20.338 1.66995 18.9587 1.01484 17.4337C0.359723 15.9086 0.0148947 14.2684 0.000471959 12.6086C-0.0139507 10.9489 0.30232 9.30288 0.930832 7.76668C1.55934 6.23047 2.48751 4.83482 3.66117 3.66117C4.83482 2.48751 6.23047 1.55934 7.76668 0.930832C9.30288 0.30232 10.9489 -0.0139507 12.6086 0.000471959C14.2684 0.0148947 15.9086 0.359723 17.4337 1.01484C18.9587 1.66995 20.338 2.62223 21.4911 3.8161C23.7681 6.17363 25.028 9.33116 24.9995 12.6086C24.971 15.8861 23.6564 19.0212 21.3388 21.3388C19.0212 23.6564 15.8861 24.971 12.6086 24.9995C9.33116 25.028 6.17363 23.7681 3.8161 21.4911ZM19.7286 19.7286C21.605 17.8522 22.6592 15.3072 22.6592 12.6536C22.6592 9.99996 21.605 7.45501 19.7286 5.5786C17.8522 3.7022 15.3072 2.64804 12.6536 2.64804C9.99996 2.64804 7.45501 3.7022 5.5786 5.5786C3.7022 7.45501 2.64804 9.99996 2.64804 12.6536C2.64804 15.3072 3.7022 17.8522 5.5786 19.7286C7.45501 21.605 9.99996 22.6592 12.6536 22.6592C15.3072 22.6592 17.8522 21.605 19.7286 19.7286ZM8.9036 7.6536L18.9036 12.6536L8.9036 17.6536V7.6536Z" fill="#E3BA14"/>
                        </Svg>
                    </View>
                    <Text style={styles.mainPostText}>Fundamental principles Of Money</Text>
                    <View style = {styles.row3}>
                        <View style={styles.student}>
                            <Text>Student</Text>
                            <View style={styles.avaterWrapper}>
                              <View style={styles.avatar1}></View>
                              <View style={styles.avatar2}></View>
                              <View style={styles.avatar3}></View>
                            </View>
                        </View>
                        <View style={styles.prof}>
                            <Image source={require('../assets/prof.png')} />
                            <View style={styles.profDetails}>
                                <Text style={styles.profName}>Prof Evans </Text>
                                <Text style={styles.exp}>10+ years exp </Text>
                            </View>
                        </View>
                    </View>
                    <View style= {styles.line}>
                    </View>
                    <View style={style = { flexDirection : 'row' , gap : 8 }}>
                        <Text style ={styles.coursesText}>30 Lessons</Text>
                        <Text style ={styles.hoursText}>( 10+ hours )</Text>
                    </View>
                </View>
                <View style = {styles.postContainer}>
                    <View style={styles.row1}>
                        <Svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <Path d="M3.8161 21.4911C2.62223 20.338 1.66995 18.9587 1.01484 17.4337C0.359723 15.9086 0.0148947 14.2684 0.000471959 12.6086C-0.0139507 10.9489 0.30232 9.30288 0.930832 7.76668C1.55934 6.23047 2.48751 4.83482 3.66117 3.66117C4.83482 2.48751 6.23047 1.55934 7.76668 0.930832C9.30288 0.30232 10.9489 -0.0139507 12.6086 0.000471959C14.2684 0.0148947 15.9086 0.359723 17.4337 1.01484C18.9587 1.66995 20.338 2.62223 21.4911 3.8161C23.7681 6.17363 25.028 9.33116 24.9995 12.6086C24.971 15.8861 23.6564 19.0212 21.3388 21.3388C19.0212 23.6564 15.8861 24.971 12.6086 24.9995C9.33116 25.028 6.17363 23.7681 3.8161 21.4911ZM19.7286 19.7286C21.605 17.8522 22.6592 15.3072 22.6592 12.6536C22.6592 9.99996 21.605 7.45501 19.7286 5.5786C17.8522 3.7022 15.3072 2.64804 12.6536 2.64804C9.99996 2.64804 7.45501 3.7022 5.5786 5.5786C3.7022 7.45501 2.64804 9.99996 2.64804 12.6536C2.64804 15.3072 3.7022 17.8522 5.5786 19.7286C7.45501 21.605 9.99996 22.6592 12.6536 22.6592C15.3072 22.6592 17.8522 21.605 19.7286 19.7286ZM8.9036 7.6536L18.9036 12.6536L8.9036 17.6536V7.6536Z" fill="#E3BA14"/>
                        </Svg>
                    </View>
                    <Text style={styles.mainPostText}>Fundamental principles Of Money</Text>
                    <View style = {styles.row3}>
                        <View style={styles.student}>
                            <Text>Student</Text>
                            <View style={styles.avaterWrapper}>
                              <View style={styles.avatar1}></View>
                              <View style={styles.avatar2}></View>
                              <View style={styles.avatar3}></View>
                            </View>
                        </View>
                        <View style={styles.prof}>
                            <Image source={require('../assets/prof.png')} />
                            <View style={styles.profDetails}>
                                <Text style={styles.profName}>Prof Evans </Text>
                                <Text style={styles.exp}>10+ years exp </Text>
                            </View>
                        </View>
                    </View>
                    <View style= {styles.line}>
                    </View>
                    <View style={style = { flexDirection : 'row' , gap : 8 }}>
                        <Text style ={styles.coursesText}>30 Lessons</Text>
                        <Text style ={styles.hoursText}>( 10+ hours )</Text>
                    </View>
                </View>
            </ScrollView>    
            </View>
         </View>
        
         <View style={styles.Categories}>
            <Text style={styles.categoryHeader}>Money Talk</Text>
            <View style = {styles.articleWrapper}>
                <View style={styles.articleContainer}>
                  <View style = { styles.articleDetails}>
                    <View style={{
                       backgroundColor : '#F4F4F4',
                       height : 40,
                       width :40,
                       borderRadius : 12
                    }}>
                      
                    </View>
                    <View style={styles.articleText}>
                        <Text style={{fontSize : 15}} >Earning while Young</Text>
                        <Text style = {{ color : '#6F6F6F'}}>Learn fundamentally the princi...</Text>
                    </View>
                  </View>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                      <Rect x="3.5" y="3.5" width="23" height="23" rx="11.5" stroke="black" stroke-opacity="0.1"/>
                      <Rect width="29" height="29" rx="14.5" fill="white"/>
                      <Path d="M11.3497 10.4077H19.6026V18.6607M19.0295 10.9808L10.6619 19.3484" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                </View>
                <View style={styles.articleContainer}>
                  <View style = { styles.articleDetails}>
                    <View style={{
                       backgroundColor : '#F4F4F4',
                       height : 40,
                       width :40,
                       borderRadius : 12
                    }}>
                      
                    </View>
                    <View style={styles.articleText}>
                        <Text style={{fontSize : 15}} >Earning while Young</Text>
                        <Text style = {{ color : '#6F6F6F'}}>Learn fundamentally the princi...</Text>
                    </View>
                  </View>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                      <Rect x="3.5" y="3.5" width="23" height="23" rx="11.5" stroke="black" stroke-opacity="0.1"/>
                      <Rect width="29" height="29" rx="14.5" fill="white"/>
                      <Path d="M11.3497 10.4077H19.6026V18.6607M19.0295 10.9808L10.6619 19.3484" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
                </View>
                <View style={styles.articleContainer}>
                  <View style = { styles.articleDetails}>
                    <View style={{
                       backgroundColor : '#F4F4F4',
                       height : 40,
                       width :40,
                       borderRadius : 12
                    }}>
                      
                    </View>
                    <View style={styles.articleText}>
                        <Text style={{fontSize : 15}} >Earning while Young</Text>
                        <Text style = {{ color : '#6F6F6F'}}>Learn fundamentally the princi...</Text>
                    </View>
                  </View>
                  <Svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                      <Rect x="3.5" y="3.5" width="23" height="23" rx="11.5" stroke="black" stroke-opacity="0.1"/>
                      <Rect width="29" height="29" rx="14.5" fill="white"/>
                      <Path d="M11.3497 10.4077H19.6026V18.6607M19.0295 10.9808L10.6619 19.3484" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </Svg>
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
  pText : {
    color : '#000'
  },
  Categories : {
    backgroundColor : 'white',
    paddingVertical : 12,
    paddingHorizontal : 16,
    gap : 16,
    borderRadius : 16
  },
  categoryWrapper : {
    flexDirection : 'row',
    gap : 24
  },
  categoryContainer : {
    alignItems : 'center',
    gap : 8,
    paddingRight : 20
  },
  categoryHeader : {
    fontSize : 18,
    fontWeight : '700'
  },
  categoryImage : {
    backgroundColor : '#F4F4F4',
    height : 63,
    width :74,
    borderRadius : 12
  },
  postContainer : {
    padding : 12,
    borderRadius : 12,
    backgroundColor : '#EBF8FF',
    gap : 12,
    marginRight : 16
  },
  mainPostText : {
    fontWeight : '700'
  },
  student : {
    gap : 2,
    alignContent : 'center',
    alignItems : 'center'
  },
  row3 : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    alignContent : 'flex-start'
  },
  avatar1 : {
    height : 14,
    width : 14,
    backgroundColor : '#D9D9D9',
    borderRadius : 24,
    borderWidth : 1
  },
  avaterWrapper: {
    flexDirection : 'row',
    gap : 2
  },
  avatar2 : {
    height : 14,
    width : 14,
    backgroundColor : '#D9D9D9',
    borderRadius : 24,
    borderWidth : 1,
    left : -5
  },
  avatar3 : {
    height : 14,
    width : 14,
    backgroundColor : '#D9D9D9',
    borderRadius : 24,
    borderWidth : 1,
    left : -10
  },
  prof : {
    gap : 8,
    flexDirection : 'row',
    alignItems : 'center'
  },
  line : {
    width : 'auto',
    height : 1,
    backgroundColor : '#C2C2C2',
    zIndex : 1
  },
  articleWrapper : {
    gap : 12
  },
  articleDetails : {
    flexDirection : 'row',
    gap : 12,
    alignContent : 'center',
    alignItems : 'center'
  },
  articleContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignContent : 'center',
    alignItems : 'center',
    padding : 12,
    border : 12,
    borderWidth : 1,
    borderColor : '#c1c1c1c1',
    borderRadius : 12
  }
});

export default Home