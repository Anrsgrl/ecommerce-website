import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
    }, //add reducers here
});

export type RootState = ReturnType<typeof store.getState>;
