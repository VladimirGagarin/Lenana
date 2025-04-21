import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Linking, TouchableOpacity} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';

function BlendedImage() {
  return (
    <View style={styles.maskContainer}>

      <View style={styles.innerImageWrapper}>
        <Image
          source={require('./assets/moses3.png')}
          style={styles.innerImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}


const whatsappMessage = "Hello Moses Lakei, I saw your portfolio and I'd love to connect!";
const whatsappURL = `https://wa.me/254794949856?text=${encodeURIComponent(whatsappMessage)}`;

const ContactScreen = () => {
  return (
    
    <LinearGradient colors={['#004dff', '#00c3ff']} style={{ flex: 1 }}>

    <Animatable.View
          animation="flipInY"
          duration={900}
          style={{ flex: 1 }}  // important!
    >
    <ScrollView contentContainerStyle={{
              ...styles.container,
              paddingBottom: 80
            }}>

         {/* 🖼️ Masked Image */}
      <BlendedImage/>

    <Text style={styles.header}>Let's Connect!</Text>

      {/* QR Code */}

      {/* QR Code for APK Download */}
      <View style={styles.qrContainer}>
        <QRCode value="https://vladimirgagarin.github.io/Lenana/" size={200} />
        <Text style={styles.qrText}>Download the App 📲</Text>
      </View>

      <View style={styles.qrContainer}>
        <QRCode value={whatsappURL} size={200} />
        <Text style={styles.qrText}>Scan to WhatsApp me</Text>
        <FontAwesome name="whatsapp" size={40} color="#25D366" />
      </View>

      {/* Social Icons */}
      <View style={styles.iconsRow}>
        <TouchableOpacity onPress={() => Linking.openURL(whatsappURL)}>
          <FontAwesome name="whatsapp" size={40} color="#25D366" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=61550804163923")}>
          <FontAwesome name="facebook" size={40} color="#0056b3" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/musa.lakei.lenana/")}>
          <FontAwesome name="instagram" size={40} color="#C13584" />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>Or reach me at: mosesLenanaLakei@gmail.com</Text>
    </ScrollView>
    </Animatable.View>
    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1 
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  qrText: {
    marginTop: 10,
    fontSize: 16,
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginBottom: 30,
  },
  footerText: {
    fontSize: 16,
    color: "#000",
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
  bgColor: {
    color:'#fff',
  }
  
});

export default ContactScreen;
