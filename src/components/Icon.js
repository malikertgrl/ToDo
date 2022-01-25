import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { Colors } from '../constants';

const Icon = ({ name, color }) => {

    const { isDarkMode } = useSelector(state => state.SystemReducer)


    return <FontAwesome5 name={name} color={color ? color : isDarkMode ? "red" : Colors.backGroundColor} size={25} />



};

export default Icon;


