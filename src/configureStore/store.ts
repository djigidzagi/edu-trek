import { configureStore } from '@reduxjs/toolkit';
import studentsReducer from '../slices/studentSlice';
import groupsReducer from '../slices/groupSlice';

export const store = configureStore({
    reducer: {
        students: studentsReducer,
        groups: groupsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;