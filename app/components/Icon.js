import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';

const Icon = props => {
    return (
        <TouchableOpacity style={{ ...props.iconStyle }} onPress={props.action}>
            <Ionicons name={props.name} size={props.size} color={props.color} />
        </TouchableOpacity>
    )
}

export default Icon;