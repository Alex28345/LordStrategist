import React from 'react';
import {Text, View} from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const GuildGraph = ({ playerList }) => {
    if (playerList.length <= 0) {
        return (
            <View>
            </View>
        )
    }
    // Fonction pour compter le nombre de joueurs par guilde
    const countPlayersByGuild = () => {
        const guildCounts = {};
        playerList.forEach(player => {
            if (guildCounts[player.guild]) {
                guildCounts[player.guild] += 1;
            } else {
                guildCounts[player.guild] = 1;
            }
        });
        return guildCounts;
    };

    const guildCounts = countPlayersByGuild();

    // Extraction des noms de guilde et du nombre de joueurs pour le graphique
    const guildNames = Object.keys(guildCounts);
    const playerCounts = Object.values(guildCounts);

    // Configuration du graphique
    const data = {
        labels: guildNames,
        datasets: [
            {
                data: playerCounts,
                color: (opacity = 1) => `rgba(0, 191, 255, ${opacity})`, // Couleur bleue
            },
        ],
    };

    return (
        <View>
            <Text>Number of players in each guild</Text>
            <BarChart
                data={data}
                width={350}
                height={200}
                yAxisSuffix=""
                fromZero
                chartConfig={{
                    backgroundColor: '#686868',
                    backgroundGradientFrom: '#707070',
                    backgroundGradientTo: '#707070',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(0, 191, 255, ${opacity})`, // Couleur bleue
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                }}
            />
        </View>
    );
};

export default GuildGraph;
