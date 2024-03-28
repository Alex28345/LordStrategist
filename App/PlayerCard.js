import { createSlice } from '@reduxjs/toolkit';

export const playerSlice = createSlice({
    name: 'playerCards',
    initialState: {
        player: [
            {id: 1, name: 'Gul\'dan', race: 'orc', hp: 50, mp: 200, role: 'dark sorcerer', guild: 'Hord'},
            {id: 2, name: 'Grommash', race: 'orc', hp: 250, mp: 70, role: 'berserker', guild: 'Hord'},
            {id: 3, name: 'Anduin', race: 'Human', hp: 70, mp: 200, role: 'Healer', guild: 'Alliance'},
            {id: 4, name: 'Uther', race: 'Human', hp: 180, mp: 150, role: 'Tank Healer', guild: 'Alliance'}
        ],
        nextID: 5,
    },
    reducers: {
        addPlayer: (state, data) => {
            state.player.push({id: state.nextID, name: data['name'], race: data['race'], hp: data['hp'], mp: data['mp'], role: data['role'], guild: ['guild']});
            state.nextID += 1;
        },
        deletePlayer: (state, id) => {
            for (let i = 0; i < state.player.length; i++) {
                if (state.player[i]["id"] === id){
                    state.player.splice(i, 1);
                }
            }
        },

    }
})

export const playerList = (state) => state.player;
export default playerSlice.reducer;