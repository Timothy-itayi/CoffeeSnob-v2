import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from '../appStyles';

const CustomButton = ({ onPress, title, style}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.buttonText]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;