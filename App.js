import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Tabs from './Navigation/Tabs';
import { NavigationContainer } from '@react-navigation/native';

const  Value = styled.Text `
    color : #333;
    font-size : 30;
`;

export default function App() {

  return (
      <NavigationContainer>
          <Tabs/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#F4F4F4',
  
  },
});
