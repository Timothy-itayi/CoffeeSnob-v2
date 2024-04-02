import React, {useState, useEffect} from 'react';
import { Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        {
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
      > 
      <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={UserProfile} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
