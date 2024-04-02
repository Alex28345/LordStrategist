import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
    name: 'playerCards',
    initialState: {
        playerList: [
            {id: 1, name: 'Gul\'dan', race: 'orc', hp: 50, mp: 200, role: 'dark sorcerer', guild: 'Hord'},
            // {id: 2, name: 'Grommash', race: 'orc', hp: 250, mp: 70, role: 'berserker', guild: 'Hord'},
            // {id: 3, name: 'Anduin', race: 'Human', hp: 70, mp: 200, role: 'Healer', guild: 'Alliance'},
            // {id: 4, name: 'Uther', race: 'Human', hp: 180, mp: 150, role: 'Tank Healer', guild: 'Alliance'}
        ],
        nextID: 5,
    },
    reducers: {
        addOrUpdatePlayer: (state, action) => {
            const data = action.payload;
            const playerIndex = state.playerList.findIndex(player => player.id === data.id);

            if (playerIndex !== -1) {
                // Player with the given id exists, update the player
                state.playerList[playerIndex] = {id: data.id, name: data.name, race: data.race, hp: data.hp, mp: data.mp, role: data.role, guild: data.guild};
            } else {
                // Player with the given id does not exist, add a new player
                state.playerList.push({id: data.id ?? state.nextID, name: data.name, race: data.race, hp: data.hp, mp: data.mp, role: data.role, guild: data.guild});
                state.nextID += 1;
            }
        },
        deletePlayer: (state, id) => {
            id = id.payload
            for (let i = 0; i < state.playerList.length; i++) {
                if (state.playerList[i]["id"] === id){
                    state.playerList.splice(i, 1);
                }
            }
        },
    }
})
export const { addOrUpdatePlayer ,deletePlayer} = playerSlice.actions


export const playerList = (state) => state.playerList
export default playerSlice.reducer;