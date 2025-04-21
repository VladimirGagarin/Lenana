import React from "react";
import { StyleSheet, Text, View, ScrollView, Image} from "react-native";
import * as Animatable from "react-native-animatable"; // 🧙‍♂️ Import Animatable
import { LinearGradient } from 'expo-linear-gradient';



function BlendedImage() {
  return (
    <View style={styles.maskContainer}>

      <View style={styles.innerImageWrapper}>
        <Image
          source={require('./assets/moses1.png')}
          style={styles.innerImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}


const ProjectScreen = () => {
    return (
      
      <LinearGradient colors={['#004dff', '#00c3ff']} style={{ flex: 1 }}>
        <Animatable.View
            animation="slideInRight"
            duration={900}
            style={{ flex: 1 }}  // important!
        >
      <ScrollView contentContainerStyle={{
              ...styles.container,
              paddingBottom: 80
            }}>
        <BlendedImage/>
  
        <Text style={styles.header}>Creative Projects by Moses</Text>
  
        {/* Animate Each Project */}
        {[
          { img: require('./assets/proj1.png'), title: "Beauty Designer" },
          { img: require('./assets/proj2.png'), title: "Barber" },
          { img: require('./assets/proj4.png'), title: "Hairdresser" },
          { img: require('./assets/proj3.png'), title: "Creative Thinker" },
        ].map((proj, index) => (
          <Animatable.View
            key={index}
            animation="fadeInUp"
            duration={1500}
            delay={index * 300}
            style={styles.projectCard}
          >
            <Image source={proj.img} style={styles.projectImage} />
            <Text style={styles.projectTitle}>{proj.title}</Text>
          </Animatable.View>
        ))}
      </ScrollView>
      </Animatable.View>
      </LinearGradient>
      
    );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#fff",
    flexGrow: 1 
  },
  maskContainer: {
    height: 250,
    width: 250,
    marginBottom: 20,
  },
  maskImage: {
    height: 250,
    width: 250,
  },
  mainImage: {
    height: 250,
    width: 250,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  projectCard: {
    width: "90%",
    backgroundColor: "#f3f3f3",
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  projectImage: {
    width: "100%",
    minHeight: 400,
    borderRadius: 10,
    resizeMode: "cover",
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
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

export default ProjectScreen;
