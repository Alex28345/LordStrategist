import React from 'react';
import styles from './styles.js';
import {Text, View} from 'react-native';

const Header = () => {


    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Lord Strategist</Text>
        </View>

    );
};

export default Header;
