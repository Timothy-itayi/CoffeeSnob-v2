import React from 'react';
import { Animated, View } from 'react-native';
import CafeCard from '../frontend-components/cafeCard';
import {styles} from '../appStyles'


const CafeList = ({cafes}) => {   

  const cafeArray = Object.values(cafes)
  return (
    <Animated.FlatList
      data={cafeArray}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <CafeCard cafe={item} />
        </View>
      )}
     contentContainerStyle={styles.listContent}
    />
  );
};

export default CafeList;