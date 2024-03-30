import   React from 'react';
import { Animated, Text  } from 'react-native';
import CafeList from '../frontend-components/cafeList';
import HeaderTitle from '../frontend-components/HeaderTitle';

import {cafes} from '../data/cafeData';




const Home = () => { 

  return (
    <>
      <Animated.View
      //  style={styles.headerRowContainer}
      >
     
        <HeaderTitle  >
          <Text >Coffee Snob.</Text>
        </HeaderTitle>
      </Animated.View>
      <CafeList
       cafes={cafes}  
    
      />
    </>
  )
};

export default Home;