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

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app aaaaa!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 30, profession: 'Developer' },
    { id: 2, name: 'Alice', age: 25, profession: 'Designer' },
  ]);

  const renderItem = ({ item }) => (
      <View style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 }}>
        <Text>Name: {item.name}</Text>
        <Text>Age: {item.age}</Text>
        <Text>Profession: {item.profession}</Text>
      </View>
  );

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
