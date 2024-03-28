import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from "./App/Header";
import Footer from "./App/Footer";

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
  const [count, setCount] = useState(3); // Utilisé pour générer un ID unique pour chaque nouvelle carte

  const addCard = () => {
    setData([...data, { id: count, name: 'New User', age: 0, profession: 'Unknown' }]);
    setCount(count + 1);
  };

  const renderItem = ({ item }) => (
      <View style={{ padding: 10, borderWidth: 1, borderColor: '#ccc', marginBottom: 10 }}>
        <Text>Name: {item.name}</Text>
        <Text>Age: {item.age}</Text>
        <Text>Profession: {item.profession}</Text>
      </View>
  );

  return (
      <View style={{ flex: 1, padding: 40 }}>
          <Header></Header>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
        <TouchableOpacity
            onPress={addCard}
            style={{ backgroundColor: 'blue', padding: 10, alignItems: 'center', borderRadius: 5 }}
        >
          <Text style={{ color: 'white' }}>Ajouter une carte</Text>
        </TouchableOpacity>
          <Footer></Footer>
      </View>
  );
};

export default App;
