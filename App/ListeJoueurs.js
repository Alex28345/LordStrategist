import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector} from 'react-redux';
import {playerList} from "./PlayerCard";



const ListeJoueur = () => {
    const data = useSelector(playerList)
    const renderItem = ({ item }) => (
        <View>
            <Text >{`id: ${item.id}`}</Text>
            <Text >{`name: ${item.name}`}</Text>
            <Text >{`race: ${item.race}`}</Text>
            <Text >{`hp: ${item.hp}`}</Text>
            <Text >{`mp: ${item.mp}`}</Text>
            <Text >{`role: ${item.role}`}</Text>
            <Text >{`guild: ${item.guild}`}</Text>
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

export default ListeJoueur;
