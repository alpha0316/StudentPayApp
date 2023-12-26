import React, { useEffect } from 'react';
import { View, Text, StyleSheet ,SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SignUp from '../Onboarding/SignUp';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Add any initialization logic here
    // This can include loading assets, fetching data, etc.
    // Once initialization is done, you can navigate to the next screen

    setTimeout(() => {
      // Navigate to the next screen after a certain duration
      navigation.replace('SignUp');
    }, 2000); // Adjust the duration as needed
  }, [navigation]);
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.text}>Student Pay</Text>
        </View>
    </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'white',
    top : 350,
    alignItems : 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Splash