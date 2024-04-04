import {Text, View} from "react-native";
import GrapheHPMP from "./GrapheHPMP";
import GuildGraph from "./GrapheGuild";
import {useSelector} from 'react-redux';


const StatsPage = () => {
    const data = useSelector(state => state.main.playerList);

    return (

        <View>
            <GrapheHPMP playerList={data}/>
            <Text></Text>
            <GuildGraph playerList={data}/>
        </View>
    )
}

export default StatsPage;