// SignUpScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert , Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../Components/PrimaryButton';
import SecondaryButton from '../Components/SecondaryButton';
import SignUp from './SignUp';


const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };


  return (

    <View style={styles.container}>

        <View style={{marginBottom : 24}}>
            <Text style={{fontSize:32, fontWeight : '700'}}>Sign In!</Text>
            <Text style={{color : '#515151'}}>Fill your details or continue with social media</Text>
        </View>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <PrimaryButton title={'Sign Up'}/>

        <View style ={styles.orGoogle}>
            <View style={styles.line}></View>
            <Text style={{fontSize : 16}}>Or sign in with</Text>
            <View style={styles.line}></View>
        </View>
        <View style={styles.google}>
            <SecondaryButton title={'Sign Up With Google'}  />
        </View>

        <View style={{flexDirection: 'row', gap : 8, marginTop : 100 , marginHorizontal : 40}}>
            <Text style = {{color : '#515151', fontSize : 16}} >Don’t have an account?</Text>
            <Text style = {{fontSize : 16 , fontWeight: '700'}} onPress={navigateToSignUp} >Register</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 246,
    gap : 16,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius : 24
  },
  orGoogle : {
    flexDirection : 'row',
    alignItems : 'center',
    gap : 24,
    color : '#515151',
  },
  line : {
    height: 1,
    width: 105,
    color : 'black',
    borderWidth : 1,
    color : '#515151', 
  },
  google : {
    marginTop : 24
  }
});

export default SignIn;
