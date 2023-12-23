import react from "react";
import {View , Text , StyleSheet , Image} from 'react-native'
import Svg, { Path } from "react-native-svg"

const Header = () =>{
    return(
        
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
    )
}

const styles = StyleSheet.create({
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
  }
})

export default Header