import React, {useState} from 'react';
import styles from './styles.js';
import {View, Text, TextInput} from 'react-native';
import {updateFilter} from "./HeaderSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {


    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Lord Strategist</Text>
        </View>

    );
};

export default Header;
