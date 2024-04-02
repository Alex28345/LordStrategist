import store from "./Store";
import {Text, View} from "react-native";
import styles from "./styles";
import Header from "./Header";
import ListPresenter from "./ListPresenter";
import Footer from "./Footer";
import {Provider} from "react-redux";
import PlayerGraph from "./GrapheHP";


const StatsPage = () =>{
    const playerList = [
        { id: 1, name: 'Gul\'dan', race: 'orc', hp: 50, mp: 200, role: 'dark sorcerer', guild: 'Hord' },
        { id: 2, name: 'Grommash', race: 'orc', hp: 250, mp: 70, role: 'berserker', guild: 'Hord' },
        { id: 3, name: 'Anduin', race: 'Human', hp: 70, mp: 200, role: 'Healer', guild: 'Alliance' },
        { id: 4, name: 'Uther', race: 'Human', hp: 180, mp: 150, role: 'Tank Healer', guild: 'Alliance' }
    ];
    return (
        <Text>J'en peu plus</Text>
        /*<View>
            <PlayerGraph playerList={playerList}/>
        </View>*/
    )
}

export default StatsPage;