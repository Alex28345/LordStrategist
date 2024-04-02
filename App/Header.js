import React, {useState} from 'react';
import styles from './styles.js';
import {View, Text, TextInput} from 'react-native';
import {updateFilter} from "./HeaderSlice";
import {useDispatch} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const updatingFilter = (text) => {
        dispatch(updateFilter(text));
        console.log(text);

    }
    const [givenFilter] = useState('');
    return (

        <View style={styles.header}>
            <Text style={styles.headerTitle}>Lord Strategist</Text>
            <TextInput
                placeholder={"Type a filter"}
                value={givenFilter}
                onChange={() => updatingFilter(givenFilter)}
            />
            <Text> {givenFilter}</Text>
        </View>

    );
};

export default Header;
