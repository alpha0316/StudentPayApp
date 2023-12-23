import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SecondaryButton = ({ onPress, title, width }) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, { width }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth : 1,
    borderColor : '#E3BA14',
    
  },
  buttonText: {
    color: '#E3BA14',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SecondaryButton;
