import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


function BlendedImage() {
  return (
    <View style={styles.maskContainer}>

      <View style={styles.innerImageWrapper}>
        <Image
          source={require('./assets/moses.png')}
          style={styles.innerImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}




const HomeScreen = () => {
    const navigation = useNavigation();
    const [language, setLanguage] = useState('en'); // 'en' or 'it'

    const translations = {
        name: {
          en: "Moses Lenana Lakei",
          it: "Mosè Lenana Lakei",
        },
        about: {
          en: "More About",
          it: "Scopri di più",
        },
        toggle: {
          en: "Switch to Italiano",
          it: "Passa a English",
        }
    };

    return (
      
      <LinearGradient colors={['#004dff', '#00c3ff']} style={{ flex: 1 }}>
        <Animatable.View
          animation="flipInX"
          duration={900}
          style={{ flex: 1 }}  // important!
      >
      <ScrollView contentContainerStyle={{
              ...styles.container,
              paddingBottom: 80
            }}>
      <BlendedImage></BlendedImage>

      <Text style={styles.name}>{translations.name[language]}</Text>

      <Text style={styles.name}> 摩西 莱娜娜 莱克</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Text style={styles.buttonText}>{translations.about[language]}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { marginTop: 10 }]} onPress={() =>
          setLanguage((prev) => (prev === 'en' ? 'it' : 'en'))
      }>
          <Text style={styles.buttonText}>{translations.toggle[language]}</Text>
      </TouchableOpacity>

    </ScrollView>
    </Animatable.View>
    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 40,
    backgroundColor: '#fff',
    flexGrow: 1,  // Make sure ScrollView can stretch if necessary
  },
  imageContainer: {
    marginBottom: 20,
    backgroundColor: 'transparent',  // Add this to be safe
  } ,
  maskImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  mainImage: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  maskContainer: {
    width: 350,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  
  innerImageWrapper: {
    width: 260,
    height: 260,
    overflow: 'hidden',
    borderRadius: 130, // makes it circular-ish, change this based on your mask
    zIndex: 1,
  },
  
  innerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 130,
  },
  
});

export default HomeScreen;
