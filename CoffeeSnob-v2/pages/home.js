import   React  from 'react';
import { Animated } from 'react-native';
import CafeList from '../frontend-components/cafeList';
import {styles} from '../appStyles'
import {cafes} from '../data/cafeData';

const Home = () => { 

  return (
    <>
      <Animated.View
       style={styles.headerRowContainer}
      >  
      
      </Animated.View>
      <CafeList
       cafes={cafes}  
    
      />
    </>
  )
};

export default Home;