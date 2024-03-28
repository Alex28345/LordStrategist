import { configureStore } from '@reduxjs/toolkit';
import playerSlice from "./PlayerCard";

export default configureStore({
    reducer: {
        counter: playerSlice,
    },
});