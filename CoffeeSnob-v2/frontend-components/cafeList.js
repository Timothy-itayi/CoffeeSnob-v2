import React from 'react';
import { Animated, View } from 'react-native';
import CafeCard from '../frontend-components/cafeCard';
import {styles} from '../appStyles';
import {cafes} from '../data/cafeData'

const CafeList = (cafes) => {

  
  // const filteredCafes = useMemo(() => {
  //   let filtered = cafes.filter((cafe) => {
  //     const cityMatch = selectedCity ? cafe.city === selectedCity : true;
  //     let filterMatch = true;

  //     return cityMatch && filterMatch;
  //   });

  
  //   return filtered;
  // }, [cafes, selectedCity]);

  return (
    <Animated.FlatList
      data={cafes}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <View>
          <CafeCard cafe={item} />
        </View>
      )}
     
    />
  );
};

export default CafeList;