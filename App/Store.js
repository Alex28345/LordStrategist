import { configureStore } from '@reduxjs/toolkit';
import playerSlice from "./PlayerSlice";

export default configureStore({
    reducer: {
        main: playerSlice,
    },
});