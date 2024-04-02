import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { deletePlayer} from "./PlayerSlice";
import {useDispatch, useSelector} from 'react-redux';

const ListPresenter = () => {
    const data = useSelector(state => state.main.playerList);
    const dispach = useDispatch();

    const deleteCard = (id) => {
        dispach(deletePlayer(id))
    }

    const renderItem = ({ item }) => (
        <View>
            <Text >{`id: ${item.id}`}</Text>
            <Text >{`name: ${item.name}`}</Text>
            <Text >{`race: ${item.race}`}</Text>
            <Text >{`hp: ${item.hp}`}</Text>
            <Text >{`mp: ${item.mp}`}</Text>
            <Text >{`role: ${item.role}`}</Text>
            <Text >{`guild: ${item.guild}`}</Text>
            <TouchableOpacity
                onPress={() => deleteCard(item.id)}
            >
                <Text>---------------DELETE--------------------</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default ListPresenter;
