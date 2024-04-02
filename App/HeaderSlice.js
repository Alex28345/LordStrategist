import { createSlice } from '@reduxjs/toolkit';

export const headerSlice = createSlice({
    name: 'headerSlice',
    initialState: {
        filter: ""
    },
    reducers: {
        updateFilter: (state, givenFilter) => {
            givenFilter = givenFilter.payload;
            if (givenFilter.length > 2){
                state.filter = givenFilter;
            }else{
                state.filter = "";
            }
        }
    }
})
export const { updateFilter} = headerSlice.actions


export const filter = (state) => state.filter;
export default headerSlice.reducer;