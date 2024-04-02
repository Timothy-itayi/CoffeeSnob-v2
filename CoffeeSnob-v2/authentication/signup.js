import React, { useEffect } from 'react';
import { View, Text, TextInput} from 'react-native';
import {styles } from '../appStyles'
import  HeaderTitle from '../frontend-components/HeaderTitle'
import {GoogleSignin , GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


const SignUp = () => {

useEffect(() => {
  GoogleSignin.configure({
    webClientId: '609263451524-d3ovn2pb6k5bkddijcnan4vj9pq04vgs.apps.googleusercontent.com'
  });
}, []);

  const handleGoogleSignIn = async () => {
   try {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    await auth().signiInwithCredential(googleCredential);

   } catch (error){
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {

    } else if (error.code === statusCodes.IN_PROGRESS) {

    } else {

      console.error('Google Sign-In error', error);
    }
  };

  

  return (

 
    <View style={styles.Signupcontainer}>
      <View>
      <HeaderTitle   style={styles.headerTitleContainer}  >
          <Text style={styles.headerText}>Coffee Snob.</Text>
        </HeaderTitle>
      </View>
    
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry />
     
        <GoogleSigninButton color={GoogleSigninButton.Color.Dark} size={GoogleSigninButton.Size.Wide} onPress={handleGoogleSignIn} />
      </View>
  );
};
}

export default SignUp;



