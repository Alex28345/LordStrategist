import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Header = () => {

    return (
        <View style={styles.header}>
            <TouchableOpacity >
                <Image
                    source={require('../assets/statistique.png')}
                    style={styles.image}
                />

            </TouchableOpacity>
            <Text style={styles.headerText}>Lord Strategist</Text>
            <Text>Players Number :</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 50,
        height: 50
    }
});

export default Header;
