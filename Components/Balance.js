import react from "react";
import { StyleSheet, View , Text } from "react-native";

const Balance = () => {
    return (
        <View style = {styles.balance}> 
              <Text style = {styles.header}>Your Balance</Text>
              <Text style = {styles.bold}>₵20,903.00</Text>
          </View>
    )
}

const styles = StyleSheet.create({
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
})
export default Balance