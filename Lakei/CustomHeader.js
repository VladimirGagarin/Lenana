// CustomHeader.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CustomHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require('./assets/moses.png')}  // Replace with your logo path
        style={styles.logo}
      />
      <Text style={styles.title}>Moses Lenana Lakei 摩西</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      height: 70,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      elevation: 4,
    },
    logo: {
      width: 35,
      height: 35,
      marginRight: 10,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
});
