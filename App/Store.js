import {configureStore} from '@reduxjs/toolkit';
import playerSlice from "./PlayerSlice";
import filter from "./FilterSlice";

export default configureStore({
    reducer: {
        main: playerSlice,
        playerFilter: filter
    },
});