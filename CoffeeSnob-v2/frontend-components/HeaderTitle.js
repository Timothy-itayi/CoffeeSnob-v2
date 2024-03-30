import React from 'react';
import { Animated } from 'react-native';

export default function HeaderTitle({ style, children }) {
  return <Animated.Text style={style}>{children}</Animated.Text>;
}