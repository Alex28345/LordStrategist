// import React from 'react';
// import { View } from 'react-native';
// import { BarChart, XAxis } from 'react-native-svg-charts';
// import {useDispatch, useSelector} from 'react-redux';
//
// const PlayerGraph = ({ playerList }) => {
//     // Extracting data for the graph
//     const data = playerList.map(player => player.hp);
//
//     // Customizing x-axis labels
//     const xAxisData = playerList.map(player => player.name);
//
//     return (
//         <View style={{ height: 200, flexDirection: 'row' }}>
//             <BarChart
//                 style={{ flex: 1 }}
//                 data={data}
//                 svg={{ fill: 'rgb(134, 65, 244)' }}
//                 contentInset={{ top: 10, bottom: 10 }}
//                 spacingInner={0.2}
//                 spacingOuter={0.2}
//             />
//             <XAxis
//                 style={{ marginHorizontal: -10, marginTop: 5 }}
//                 data={data}
//                 formatLabel={(value, index) => xAxisData[index]}
//                 contentInset={{ left: 10, right: 10 }}
//                 svg={{ fontSize: 10, fill: 'black' }}
//             />
//         </View>
//     );
// };
//
// export default PlayerGraph;