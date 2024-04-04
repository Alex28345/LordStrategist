import {createSlice} from '@reduxjs/toolkit';
import {savePlayerListToStorage} from "./StorageSaver";

export const playerSlice = createSlice({
    name: 'playerCards',
    initialState: {
        playerList: [
            {id: 1, name: 'Gul\'dan', race: 'orc', hp: 50, mp: 200, role: 'dark sorcerer', guild: 'Hord'},
            {id: 2, name: 'Grommash', race: 'orc', hp: 250, mp: 70, role: 'berserker', guild: 'Hord'},
            {id: 3, name: 'Anduin', race: 'Human', hp: 70, mp: 200, role: 'Healer', guild: 'Alliance'},
            {id: 4, name: 'Uther', race: 'Human', hp: 180, mp: 150, role: 'Tank Healer', guild: 'Alliance'}
        ]
    },
    reducers: {
        setPlayerList: (state, action) => {
            state.playerList = action.payload;
        },
        addOrUpdatePlayer: (state, action) => {
            const data = action.payload;
            const playerIndex = state.playerList.findIndex(player => player.id === data.id);

            if (playerIndex !== -1) {
                // Player with the given id exists, update the player
                state.playerList[playerIndex] = {id: data.id, name: data.name, race: data.race, hp: data.hp, mp: data.mp, role: data.role, guild: data.guild};
            } else {
                // Player with the given id does not exist, add a new player
                const maxID = Math.max(...state.playerList.map(player => player.id)) + 1;
                state.playerList.push({id: data.id ?? maxID, name: data.name, race: data.race, hp: data.hp, mp: data.mp, role: data.role, guild: data.guild});
                console.log("prime");
            }
            savePlayerListToStorage(state.playerList).catch(e => console.log(e));
        },
        deletePlayer: (state, id) => {
            id = id.payload
            for (let i = 0; i < state.playerList.length; i++) {
                if (state.playerList[i]["id"] === id){
                    state.playerList.splice(i, 1);
                }
            }
            savePlayerListToStorage(state.playerList).catch(e => console.log(e));
        },
        sortBy: (state, sortType) => {
            sortType = sortType.payload;
            switch (sortType) {
                case "name":
                    state.playerList.sort((a, b) => a.name > b.name ? 1 : -1);
                    break;
                case "race":
                    state.playerList.sort((a, b) => a.race > b.race ? 1 : -1)
                    break;
                case "hp":
                    state.playerList.sort((a, b) => a.hp > b.hp ? 1 : -1)
                    break;
                case "mp":
                    state.playerList.sort((a, b) => a.mp > b.mp ? 1 : -1)
                    break;
                case "role":
                    state.playerList.sort((a, b) => a.role > b.role ? 1 : -1)
                    break;
                case "guild":
                    state.playerList.sort((a, b) => a.guild > b.guild ? 1 : -1)
                    break;

            }
        }
    }

})
export const { addOrUpdatePlayer ,deletePlayer ,sortBy, setPlayerList} = playerSlice.actions

export const playerList = (state) => state.playerList
export default playerSlice.reducer;