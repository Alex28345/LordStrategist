import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from "./App/Header";
import Footer from "./App/Footer";
import ListPresenter from "./App/ListPresenter";
import {Provider} from "react-redux";
import styles from "./App/styles";
import AddCardModal from "./App/addCardModal";
import store from "./App/Store";
import StatsPage from "./App/StatsPage";

const App = () => {
    const [currentPage, setCurrentPage] = useState('Home'); // State pour suivre la page actuelle

    // Fonction pour changer de page
    const navigateTo = (pageName) => {
        setCurrentPage(pageName);
    };

    // Rendu en fonction de la page actuelle
    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <ListPresenter />;
            case 'Stats':
                return <StatsPage />;
            default:
                return <ListPresenter />;
        }
    };

    return (
      <Provider store={store}>
          <View style={styles.body}>
              <Header />
              {renderPage()}
              <Footer navigateTo={navigateTo} />
          </View>
      </Provider>
    );
};

export default App;
