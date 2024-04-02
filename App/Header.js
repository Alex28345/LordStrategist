import React, {useState} from 'react';
import styles from './styles.js';
import {View, Text, TextInput} from 'react-native';
import {updateFilter} from "./HeaderSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const [givenFilter, setGivenFilter] = useState("");
    const data2 = useSelector(state => state.playerFilter.filter);
    const dispatch = useDispatch();
    const updatingFilter = (text) => {
        dispatch(updateFilter(text));
        setGivenFilter(text);
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Lord Strategist</Text>
            <TextInput
                placeholder={"Type a filter"}
                value={givenFilter}
                onChangeText={updatingFilter}
            />
            <Text style={styles.headerTitle}>{data2}</Text>
        </View>

    );
};

export default Header;
