import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Student {
    id: number,
    name: string,
    surname: string,
    phone: string,
    email: string,
    address: string,
    // place:
    groupNames: object,  //? groupNames: Record<string, boolean>;
    // source:
    status: string,    //? status: "active" | "inactive" | "graduated";
    documents: boolean,
    commentsLog: object,  //? commentsLog: Record<string, string>;
    reminder: boolean,
    reminderDate: Date,
    reminderText: string,
    // fullCoursePrice: number,
    // paymentsLog: any,    //? paymentsLog: Record<string, string>;
    paymentProgress: number,
    active: boolean;
}

const initialState: Student[] = [];

export const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        addStudent: (state, action: PayloadAction<Student>) => {
            state.push(action.payload);
        },
        removeStudent: (state, action: PayloadAction<number>) => {
            return state.filter(student => student.id !== action.payload);
        },
        updateStudentName: (state, action: PayloadAction<{ id: number; name: string }>) => {
            const student = state.find(student => student.id === action.payload.id);
            if (student) {
                student.name = action.payload.name;
            }
        },
        updateStudentSurname: (state, action: PayloadAction<{ id: number; surname: string }>) => {
            const student = state.find(student => student.id === action.payload.id);
            if (student) {
                student.surname = action.payload.surname;
            }
        },
        updateStudentPhone: (state, action: PayloadAction<{ id: number; phone: string }>) => {
            const student = state.find(student => student.id === action.payload.id);
            if (student) {
                student.phone = action.payload.phone;
            }
        },
        updateStudentEmail: (state, action: PayloadAction<{ id: number; email: string }>) => {
            const student = state.find(student => student.id === action.payload.id);
            if (student) {
                student.email = action.payload.email;
            }
        },
        updateStudentAddress: (state, action: PayloadAction<{ id: number; address: string }>) => {
            const student = state.find(student => student.id === action.payload.id);
            if (student) {
                student.address = action.payload.address;
            }
        },
        updateStudentReminder: (state, action: PayloadAction<{ id: number; reminder: boolean; reminderDate: Date; reminderText: string }>) => {
            const student = state.find(student => student.id === action.payload.id);
            if (student) {
                student.reminder = action.payload.reminder;
                student.reminderDate = action.payload.reminderDate;
                student.reminderDate = action.payload.reminderDate;
            }
        },

    }
})

export const {addStudent, removeStudent, updateStudentName, updateStudentSurname, updateStudentPhone, updateStudentEmail, updateStudentAddress, updateStudentReminder} = studentsSlice.actions;

export default studentsSlice.reducer;