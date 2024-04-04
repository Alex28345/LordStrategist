import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {deletePlayer, setPlayerList, sortBy} from "./PlayerSlice";
import {useDispatch, useSelector} from 'react-redux';
import styles from "./styles";
import CardModal from "./CardModal";
import {updateFilter} from "./FilterSlice";
import {loadPlayerListFromStorage} from "./StorageSaver";

const ListPresenter = () => {
    const data = useSelector(state => state.main.playerList);
    const [modalVisible, setModalVisible] = useState(false);
    const filter = useSelector(state => state.playerFilter.filter);
    const filteredData = data.filter(player =>
        Object.values(player).some(value =>
            value.toString().toLowerCase().includes(filter.toLowerCase())
        )
    );
    //barre de recherche
    const [givenFilter, setGivenFilter] = useState("");
    const [idEdited, setIdEdited] = useState("");
    const data2 = useSelector(state => state.playerFilter.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadPlayerList() {
            const playerList = await loadPlayerListFromStorage();
            if (playerList !== null)
                dispatch(setPlayerList(playerList));
        }

        loadPlayerList().then(r => console.log("Player list loaded")).catch(e => console.log(e));
    }, [dispatch]);

    const updatingFilter = (text) => {
        dispatch(updateFilter(text));
        setGivenFilter(text);
    }
    //

    const editCard = (id) => {
        setModalVisible(true);
        setIdEdited(id);
    }

    const deleteCard = (id) => {
        dispatch(deletePlayer(id))
    }
    const sortPlayerCard = (sortType) => {
        dispatch(sortBy(sortType))
    }

    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{`ID\t\t\t ${item.id}`}</Text>
            <Text style={styles.itemText}>{`Name\t\t ${item.name}`}</Text>
            <Text style={styles.itemText}>{`Race\t\t ${item.race}`}</Text>
            <Text style={styles.itemText}>{`HP\t\t\t ${item.hp}`}</Text>
            <Text style={styles.itemText}>{`MP\t\t\t ${item.mp}`}</Text>
            <Text style={styles.itemText}>{`Role\t\t ${item.role}`}</Text>
            <Text style={styles.itemText}>{`Guild\t\t ${item.guild}`}</Text>
            <CardModal modalVisible={modalVisible} setModalVisible={setModalVisible} id={idEdited}/>
            <TouchableOpacity style={styles.itemButtonEdit} onPress={() => editCard(item.id)}>
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
            <View style={styles.filters}>
                <Text style={styles.filterItem}>Sort by :</Text>
                <TouchableOpacity onPress={() => sortPlayerCard("name")}>
                    <Text style={styles.filterItem}>Name</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortPlayerCard("race")}>
                    <Text style={styles.filterItem}>Race</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortPlayerCard("hp")}>
                    <Text style={styles.filterItem}>HP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortPlayerCard("mp")}>
                    <Text style={styles.filterItem}>MP</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortPlayerCard("role")}>
                    <Text style={styles.filterItem}>Role</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sortPlayerCard("guild")}>
                    <Text style={styles.filterItem}>Guild</Text>
                </TouchableOpacity>
            </View>
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
