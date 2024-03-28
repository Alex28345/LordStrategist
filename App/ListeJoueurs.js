import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const data = [
    { id: 1, name: 'Uther', race: 'Human', hp: 180, mp: 150, role: 'Tank Healer', guild: 'Alliance' },
    { id: 2, name: 'Thrall', race: 'Orc', hp: 200, mp: 100, role: 'Melee DPS', guild: 'Horde' },
    { id: 3, name: 'Jaina', race: 'Human', hp: 160, mp: 200, role: 'Ranged DPS', guild: 'Alliance' },
    { id: 4, name: 'Sylvanas', race: 'Undead', hp: 170, mp: 180, role: 'Ranged DPS', guild: 'Horde' },
];

const ListeJoueur = () => {
    const renderItem = ({ item }) => (
        <View>
            <Text >{`ID: ${item.id}`}</Text>
            <Text >{`Name: ${item.name}`}</Text>
            <Text >{`Race: ${item.race}`}</Text>
            <Text >{`HP: ${item.hp}`}</Text>
            <Text >{`MP: ${item.mp}`}</Text>
            <Text >{`Role: ${item.role}`}</Text>
            <Text >{`Guild: ${item.guild}`}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    item: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default ListeJoueur;
