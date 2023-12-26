import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Tabs from './Navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import Pay from './screens/Pay';
import Home from './screens/Home';
import Splash from './Onboarding/Splash';
import SignUp from './Onboarding/SignUp';
import AppNaigation from './Navigation/AppNavigation'

const  Value = styled.Text `
    color : #333;
    font-size : 30;
`;

const App = () => {

  return (
    <View style={styles.container}>
        <AppNaigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'white',
    flex : 1
  },
});

export default App;