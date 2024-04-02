import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
    name: 'headerSlice',
    initialState: {
        filter: ""
    },
    reducers: {
        updateFilter: (state, givenFilter) => {
            if (givenFilter.length > 2){
                state.filter = givenFilter;
            }
        }
    }
})
export const { updateFilter} = headerSlice.actions


export const filter = (state) => state.filter;
export default headerSlice.reducer;