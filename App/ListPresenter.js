import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput} from 'react-native';
import { deletePlayer} from "./PlayerSlice";
import {useDispatch, useSelector} from 'react-redux';
import styles from "./styles";
import CardModal from "./CardModal";
import {updateFilter} from "./HeaderSlice";

const ListPresenter = () => {
    const data = useSelector(state => state.main.playerList);
    const dispach = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    //barre de recherche
    const [givenFilter, setGivenFilter] = useState("");
    const data2 = useSelector(state => state.playerFilter.filter);
    const dispatch = useDispatch();
    const updatingFilter = (text) => {
        dispatch(updateFilter(text));
        setGivenFilter(text);
    }
    //


    const deleteCard = (id) => {
        dispach(deletePlayer(id))
    }

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{`ID\t\t\t ${item.id}`}</Text>
            <Text style={styles.itemText}>{`Name\t\t ${item.name}`}</Text>
            <Text style={styles.itemText}>{`Race\t\t ${item.race}`}</Text>
            <Text style={styles.itemText}>{`HP\t\t\t ${item.hp}`}</Text>
            <Text style={styles.itemText}>{`MP\t\t\t ${item.mp}`}</Text>
            <Text style={styles.itemText}>{`Role\t\t ${item.role}`}</Text>
            <Text style={styles.itemText}>{`Guild\t\t ${item.guild}`}</Text>
            <CardModal modalVisible={modalVisible} setModalVisible={setModalVisible} id={item.id} />
            <TouchableOpacity style={styles.itemButtonEdit} onPress={() => setModalVisible(true)}>
                <Text>EDIT</Text>
                <Image style={styles.itemButtonImage} source={require("../assets/edit.png")}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemButtonDelete}
                onPress={() => deleteCard(item.id)}
            >
                <Text>DELETE</Text>
                <Image style={styles.itemButtonImage} source={require("../assets/cross.png")}></Image>
            </TouchableOpacity>

        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput style={styles.searchBar}
                placeholder={"  Type a filter"}
                value={givenFilter}
                onChangeText={updatingFilter}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                scrollEnabled={true}
                style={styles.flatList}
                contentContainerStyle={{alignItems: "center"}}
            />
        </View>
    );
};

export default ListPresenter;
