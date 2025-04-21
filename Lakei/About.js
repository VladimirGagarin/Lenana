import React, { useState } from "react";
import {  StyleSheet,  Text,  View,  ScrollView,  Image,  TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
import { Audio } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import { IntersectionObserver, useInView } from 'react-native-intersection-observer';



function BlendedImage() {
  return (
    <View style={styles.maskContainer}>

      <View style={styles.innerImageWrapper}>
        <Image
          source={require('./assets/moses2.png')}
          style={styles.innerImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}



const AboutScreen = () => {
    const [language, setLanguage] = useState('en'); // toggle between 'en' and 'it'

    const  [currentAudio, setCurrentAudio] =  useState(null);

    const handlePlay = async (audioFile) => {
      try {
        // Stop previous audio if playing
        if (currentAudio) {
          await currentAudio.stopAsync();
          await currentAudio.unloadAsync();
        }
    
        const { sound } = await Audio.Sound.createAsync(audioFile);
        setCurrentAudio(sound);
        await sound.playAsync();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    };

    
  
    const translations = {
      header: {
        en: "Meet the Visionary: Moses Lenana Lakei",
        it: "Incontra il Visionario: Mosè Lenana Lakei",
      },
      intelligence: {
        en: "Moses has a sharp mind, capable of understanding complex ideas and solving problems with clarity and speed.",
        it: "Mosè ha una mente acuta, capace di comprendere idee complesse e risolvere problemi con chiarezza e rapidità.",
        enAudio: require("./assets/enIntel.mp3"),
        itAudio: require("./assets/itIntel.mp3")
      },
      hardworking: {
        en: "Known for his strong work ethic, Moses dedicates himself to excellence and never shies away from a challenge.",
        it: "Conosciuto per la sua forte etica del lavoro, Mosè si dedica all’eccellenza e non si tira mai indietro davanti a una sfida.",
        enAudio: require("./assets/enHw.mp3"),
        itAudio: require("./assets/itHw.mp3")
      },
      creative: {
        en: "From visual design to innovation, his creativity allows him to express unique solutions and artistic visions.",
        it: "Dal design visivo all’innovazione, la sua creatività gli consente di esprimere soluzioni uniche e visioni artistiche.",
        enAudio: require("./assets/enCr.mp3"),
        itAudio: require("./assets/itCr.mp3")
      },
      honest: {
        en: "Integrity defines him. Moses speaks the truth, acts transparently, and builds trust wherever he goes.",
        it: "L'integrità lo definisce. Mosè dice la verità, agisce con trasparenza e costruisce fiducia ovunque vada.",
        enAudio: require("./assets/enHon.mp3"),
        itAudio: require("./assets/itHon.mp3")
      },
      motivational: {
        en: "A natural motivator, Moses inspires others to rise above their limits and believe in their potential.",
        it: "Un motivatore naturale, Mosè ispira gli altri a superare i propri limiti e a credere nel proprio potenziale.",
        enAudio: require("./assets/enMotiv.mp3"),
        itAudio: require("./assets/itMotiv.mp3")
      },
      empathetic: {
        en: "Moses deeply understands others’ emotions and perspectives, making him a compassionate and supportive presence.",
        it: "Mosè comprende profondamente le emozioni e le prospettive degli altri, rendendolo una presenza compassionevole e di supporto.",
        enAudio: require("./assets/enEmp.mp3"),
        itAudio: require("./assets/itEmp.mp3")
      },
      resilient: {
        en: "In the face of adversity, Moses stands strong. His resilience keeps him moving forward with courage and hope.",
        it: "Di fronte alle avversità, Mosè rimane forte. La sua resilienza lo spinge avanti con coraggio e speranza.",
        enAudio: require("./assets/enRes.mp3"),
        itAudio: require("./assets/itRes.mp3")
      },
      visionaryTrait: {
        en: "More than a dreamer, Moses envisions the future and takes steps to shape it with purpose and direction.",
        it: "Più che un sognatore, Mosè immagina il futuro e prende iniziative per plasmarlo con scopo e direzione.",
        enAudio: require("./assets/enVis.mp3"),
        itAudio: require("./assets/itVis.mp3")
      },      
      toggle: {
        en: "Switch to Italiano",
        it: "Passa a English",
      }
    };

    const headerstitles = {
      intelligence: {
        en: "Intelligence",
        it: "Intelligenza"
      },
      hardworking: {
        en: "Hardworking",
        it: "Diligente"
      },
      creative: {
        en: "Creative",
        it: "Creativo"
      },
      honest: {
        en: "Honest",
        it: "Onesto"
      },
      motivational: {
        en: "Motivational",
        it: "Motivazionale"
      },
      empathetic: {
        en: "Empathetic",
        it: "Empatico"
      },
      resilient: {
        en: "Resilient",
        it: "Resiliente"
      },
      visionaryTrait: {
        en: "Visionary",
        it: "Visionario"
      }
    };
    
    
    const avatars = {
      intelligence: require("./assets/avatars/intelligence.png"),
      hardworking: require("./assets/avatars/hardworking.png"),
      creative: require("./assets/avatars/creative.png"),
      honest: require("./assets/avatars/honest.png"),
      motivational: require("./assets/avatars/motivational.png"),
      empathetic: require("./assets/avatars/empathetic.png"),
      resilient: require("./assets/avatars/resilient.png"),
      visionaryTrait: require("./assets/avatars/visionaryTrait.png")
    };

    const icons = {
      intelligence: "💡",
      hardworking: "⚒️",
      creative: "🎨",
      honest: "🤝",
      motivational: "🔥",
      empathetic: "💞",
      resilient: "🛡️",
      visionaryTrait: "🌠"
    };
    
    
    const TraitCard = ({ traitKey }) => {
      return (
        <Animatable.View
            animation="slideInRight"
            duration={900}
            style={styles.container}
        >
        <View style={styles.card}>
          <Image source={avatars[traitKey]} style={styles.avatar} />
          <Text style={styles.title}>
            {icons[traitKey]} {headerstitles[traitKey][language]}
          </Text>
          <Text style={styles.body}>{translations[traitKey][language]}</Text>
    
          <TouchableOpacity
            style={styles.playBtn}
            onPress={() =>
              handlePlay(translations[traitKey][language === "en" ? "enAudio" : "itAudio"])
            }
          >
            <Ionicons name="play-circle" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        </Animatable.View>
      );
    };
    
  
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
  
        <Text style={styles.header}>{translations.header[language]}</Text>
  
        {Object.keys(headerstitles).map((trait) => (
          <TraitCard key={trait} traitKey={trait} />
        ))}

  
        <TouchableOpacity
          style={[styles.toggleButton, { marginTop: 20 }]}
          onPress={() => setLanguage((prev) => (prev === 'en' ? 'it' : 'en'))}
        >
          <Text style={styles.toggleTextBtn}>{translations.toggle[language]}</Text>
        </TouchableOpacity>
      </ScrollView>
      </Animatable.View>
      </LinearGradient>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1 
  },
  imageContainer: {
    marginBottom: 20,
  },
  maskImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  mainImage: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',  // Shadow color
    shadowOffset: { width: 0, height: 5 },  // Vertical shadow position
    shadowOpacity: 0.1,  // Shadow transparency
    shadowRadius: 10,  // Shadow spread
    elevation: 5,  // For Android shadow
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center"
  },
  body: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
    textAlign: 'center',
  },
  toggleButton: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    
  },
  toggleTextBtn:{
    color: "#fff"
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 10,
    borderColor: '#ddd',
    border: "2px solid"
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

  playBtn: {
    backgroundColor: '#004dff', // Button color
    padding: 15,
    borderRadius: 50, // Circular button
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Shadow for Android
    position: 'absolute', // Makes the button position absolute relative to the parent container
    top: 10, // Position from the bottom
    right: 10, // Position from the right
  },

  
  
});

export default AboutScreen;
