import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'headerSlice',
    initialState: {
        filter: ""
    },
    reducers: {
        updateFilter: (state, givenFilter) => {
            givenFilter = givenFilter.payload;
            if (givenFilter.length > 1){
                state.filter = givenFilter;
            }else{
                state.filter = "";
            }
        }
    }
})
export const { updateFilter} = filterSlice.actions


export const filter = (state) => state.filter;
export default filterSlice.reducer;