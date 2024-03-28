import React, {useState} from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity, Image, ViewComponent} from 'react-native';
import AddCardModal from "./addCardModal";

const Footer = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.footer}>
            <AddCardModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <TouchableOpacity>
                <Image style={styles.footerImage} source={require("../assets/home.png")}></Image>
            </TouchableOpacity>
            <View style={styles.footerPlusBackgroundShadow}>
                <View style={styles.footerPlusBackground}>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
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
