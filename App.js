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

const App = () => {

  return (
      <Provider store={store}>
          <View style={styles.body}>
              <Header></Header>
              <ListPresenter></ListPresenter>
              <Footer></Footer>
          </View>
      </Provider>
  );
};

export default App;
