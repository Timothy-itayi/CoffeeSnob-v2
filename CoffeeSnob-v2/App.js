import React, {useState, useEffect} from 'react';
import { Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-vector-icons';
import Home from './pages/home'; // Make sure to adjust the import path based on your project structure
import SignUp from './authentication/signup'; // Adjust import path
import UserProfile from './pages/userprofile'; // Adjust import path





const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [errorLoadingFonts, setErrorLoadingFonts] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        if( Platform.OS === 'ios '){
           await Font.loadAsync({
          'Sling': require('./assets/fonts/Sling.ttf'),
          'SlingBold': require('./assets/fonts/SlingBold.ttf'),
          'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
          'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
          'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
        });
        }
       
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts', error);
        setErrorLoadingFonts(true);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    if (errorLoadingFonts) {
      return <Text>Error loading fonts. Please try again later</Text>;
    }
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={({ route, focused }) => ({
        //   tabBarIcon: ({ color, size }) => {
        //     let iconName;

        //     if (route.name === 'Home') {
        //       iconName = focused ? 'home' : 'home-outline';
        //     } else if (route.name === 'Profile') {
        //       iconName = focused ? 'person' : 'person-outline';
        //     } else if (route.name === 'SignUp') {
        //       iconName = 'person-add';
        //     }

        //     // You need to replace this with a suitable alternative for icons
        //     return <Icon name={iconName} size={size} color={color} />;
        //   },
        // })}
        // tabBarOptions={{
        //   activeTintColor: 'blue', // Change the color of the active tab icon
        //   inactiveTintColor: 'gray', // Change the color of the inactive tab icon
        // }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={UserProfile} />
        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
