import { configureStore } from '@reduxjs/toolkit';
import playerSlice from "./PlayerSlice";
import filter from "./HeaderSlice";

export default configureStore({
    reducer: {
        main: playerSlice,
        playerFilter: filter
    },
});