import { StatusBar } from 'expo-status-bar';
import { View, useColorScheme , ActivityIndicator, Image, Text} from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect} from "react";


import HomeScreen from './Home.js';
import AboutScreen from './About.js';
import ContactScreen from './Contact.js';
import ProjectScreen from './Project.js';
import CustomHeader from './CustomHeader.js';


const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme(); // detects system light/dark

   // ✅ Moved here
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => setIsLoading(false), 5000);
     return () => clearTimeout(timer);
   }, []);



  // Mapping screen name to title
  const getTitle = (routeName) => {
    switch (routeName) {
      case 'Home':
        return 'Welcome Home';
      case 'About':
        return 'About Us';
      case 'Projects':
        return 'Our Projects';
      case 'Contact':
        return 'Get in Touch';
      default:
        return '';
    }
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: scheme === 'dark' ? '#000' : '#fff'
        }}
      >
        <Image
          source={require('./assets/moses3Logo.jpg')}
          style={{ width: 120, height: 120, marginBottom: 20 }}
          resizeMode="contain"
        />
        <ActivityIndicator size="large" color="#00aaff" />
        <Text style={{ marginTop: 20, fontSize: 16, color: scheme === 'dark' ? '#fff' : '#000' }}>
         Moses Lenana is almost with you...
        </Text>
      </View>
    );
  }
  

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={{ flex: 1 }}>
        <CustomHeader />
        <Tab.Navigator
          screenOptions={({ route }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Projects':
                iconName = 'briefcase';
                break;
              case 'About':
                iconName = 'information-circle';
                break;
              case 'Contact':
                iconName = 'call';
                break;
            }

            return {
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons
                  name={focused ? iconName : `${iconName}-outline`}
                  size={size}
                  color={color}
                />
              ),
              tabBarActiveTintColor: scheme === 'dark' ? '#ffcc00' : '#0000ff',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                backgroundColor: '#fff',
                borderTopWidth: 0.5,
                borderTopColor: '#ddd',
                height: 60,
                paddingBottom: 5,
              },
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 12,
              },
              headerShown: false,
            };
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
          <Tab.Screen name="Projects" component={ProjectScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </View>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}
