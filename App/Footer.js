import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text>Ajouter un joueur</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 40,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },
    footerText: {
        color: '#333',
        fontSize: 14,
    },
});

export default Footer;
