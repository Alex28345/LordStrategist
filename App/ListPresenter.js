import React, {useState} from 'react';
import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {deletePlayer} from "./PlayerSlice";
import {useDispatch, useSelector} from 'react-redux';
import styles from "./styles";
import CardModal from "./CardModal";
import {updateFilter} from "./FilterSlice";

const ListPresenter = () => {
    const data = useSelector(state => state.main.playerList);
    const dispach = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const filter = useSelector(state => state.playerFilter.filter);
    const filteredData = data.filter(
        player => player.name.toLocaleLowerCase().includes(filter.toLowerCase()));

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
            <Text >{`id: ${item.id}`}</Text>
            <Text >{`name: ${item.name}`}</Text>
            <Text >{`race: ${item.race}`}</Text>
            <Text >{`hp: ${item.hp}`}</Text>
            <Text >{`mp: ${item.mp}`}</Text>
            <Text >{`role: ${item.role}`}</Text>
            <Text >{`guild: ${item.guild}`}</Text>
            <TouchableOpacity style={styles.itemButton}
                onPress={() => deleteCard(item.id)}
            >
                <Text>DELETE</Text>
                <Image style={styles.itemButtonImage} source={require("../assets/cross.png")}></Image>
            </TouchableOpacity>
            <CardModal modalVisible={modalVisible} setModalVisible={setModalVisible} id={item.id} />
            <TouchableOpacity style={styles.itemButton} onPress={() => setModalVisible(true)}>
                <Text>EDIT</Text>
                <Image style={styles.itemButtonImage} source={require("../assets/edit.png")}></Image>
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
                data={filteredData}
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
