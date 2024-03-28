import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity, Image, ViewComponent} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image style={styles.footerImage} source={require("../assets/home.png")}></Image>
            </TouchableOpacity>
            <View style={styles.footerPlusBackgroundShadow}>
                <View style={styles.footerPlusBackground}>
                    <TouchableOpacity>
                        <Image style={styles.plusFooterImage} source={require("../assets/plus.png")}></Image>
                    </TouchableOpacity>
                </View>

            </View>

            <TouchableOpacity>
                <Image style={styles.footerImage} source={require("../assets/statistique.png")}></Image>
            </TouchableOpacity>
        </View>
    );
};



export default Footer;
