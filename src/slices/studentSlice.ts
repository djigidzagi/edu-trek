import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Student {
    id: number,
    name: string,
    surname: string,
    phone: string,
    email: string,
    address: string,
    // place:
    groupNames: object,  //?
    // source:
    status: string,    //?
    documents: boolean,
    commentsLog: object,  //?
    // reminder: boolean,
    // reminder: Date,
    // reminder: string,
    // fullCoursePrice: number,
    // paymentsLog: any,
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


    }
})

export const {addStudent, removeStudent, updateStudentName, updateStudentSurname, updateStudentPhone, updateStudentEmail, updateStudentAddress} = studentsSlice.actions;

export default studentsSlice.reducer;