import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from "./App/Header";
import Footer from "./App/Footer";
import AddCardModal from "./App/addCardModal";
import styles from "./App/styles";
import ListeJoueur from "./App/ListeJoueurs";


const App = () => {
    const [data, setData] = useState([
        { id: 1, name: 'John', age: 30, profession: 'Developer' },
        { id: 2, name: 'Alice', age: 25, profession: 'Designer' },
    ]);
    const [modalVisible, setModalVisible] = useState(true);

    const addCard = () => {
        alert('add card')
    }
    const openModal = () => {
        console.log('open modal')
        setModalVisible(true);
    };

  const renderItem = ({ item }) => (
      <View style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 }}>
        <Text>Name: {item.name}</Text>
        <Text>Age: {item.age}</Text>
        <Text>Profession: {item.profession}</Text>
      </View>
  );

  return (
      <View style={styles.body}>
          <Header></Header>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
          <ListeJoueur></ListeJoueur>
          <TouchableOpacity onPress={openModal}>
              <Text>Ouvrir la modale</Text>
          </TouchableOpacity>
        <AddCardModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Footer></Footer>

    </View>
  );
};

export default App;
