import { configureStore } from '@reduxjs/toolkit';
import studentsReducer, {Student} from '../slices/studentSlice';
import groupsReducer, { Group } from '../slices/groupSlice';

export interface RootState {
    groups: Group[]; // Группы должны быть массивом объектов типа Group
    students: Student[]; // Студенты должны быть массивом объектов типа Student
}
export const store = configureStore({
    reducer: {
        students: studentsReducer,
        groups: groupsReducer,
    }
});

// export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;