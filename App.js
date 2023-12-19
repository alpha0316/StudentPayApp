import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './screens/Home';

const  Value = styled.Text `
    color : #333;
    font-size : 30;
`;

export default function App() {

  return (
      <SafeAreaView style={styles.container}>
          <Home/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#F4F4F4'
  },
});
