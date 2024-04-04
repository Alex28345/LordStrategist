import React from 'react';
import {Text, View} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GrapheHPMP = ({ playerList }) => {
    // Calcul de la moyenne des points de vie (HP)
    const totalHP = playerList.reduce((total, player) => total + player.hp, 0);
    const averageHP = totalHP / playerList.length;

    // Calcul de la moyenne des points de mana (MP)
    const totalMP = playerList.reduce((total, player) => total + player.mp, 0);
    const averageMP = totalMP / playerList.length;

    // Extracting data for the graph (HP and MP)
    const hpData = playerList.map(player => player.hp);
    const mpData = playerList.map(player => player.mp);

    // Ajout des données (HP et MP) et des moyennes correspondantes au graphique
    const data = {
        labels: ["Blue : MP | Green : HP"],
        datasets: [
            {
                data: hpData,
                color: (opacity = 1) => `rgba(0, 191, 99, ${opacity})`, // Couleur verte pour les HP
            },
            {
                data: mpData,
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Couleur bleue pour les MP
            }
        ],
    };

    return (
        <View>
            <Text>Graphe of MP and HP</Text>
            <LineChart
                data={data}
                width={350}
                height={170}
                chartConfig={{
                    backgroundColor: '#686868',
                    backgroundGradientFrom: '#707070',
                    backgroundGradientTo: '#707070',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 191, 99, ${opacity})`,
                }}
            />
            <Text>Average MP : {averageMP}</Text>
            <Text>Average HP : {averageHP}</Text>
        </View>
    );
};

export default GrapheHPMP;