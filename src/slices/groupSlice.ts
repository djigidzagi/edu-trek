import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Student} from "./studentSlice";

export enum WeekDays {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

export interface Group {
    id: number,
    name: string,
    whatsAppLink: string,
    skypeLink: string,
    slackLink: string,
    //(?) Full course price - Int
    startDate: Date,
    expectedFinishDate: Date,
    // autoArchiveDeactivate: boolean,  // ???
    lessonsDays: WeekDays[],
    webinarDays: WeekDays[],
    reminder: boolean,
    reminderDate: Date,
    reminderText: string,
    studentList: Student[],
    lecturerIdLessons: number,
    lecturerIdWebinars: number,
    active: boolean
}

const initialState: Group[] = [];

export const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        addGroup: (state, action: PayloadAction<Group>) => {
            state.push(action.payload);
        },
        removeGroup: (state, action: PayloadAction<number>) => {
            return state.filter((group) => group.id !== action.payload);
        },
        addStudent: (state, action: PayloadAction<{ id: number; student: Student }>) => {
            const group = state.find((group) => group.id === action.payload.id);
            if (group) {
                group.studentList.push(action.payload.student);
            }
        },
        removeStudent: (state, action: PayloadAction<{ id: number; studentId: number }>) => {
            const group = state.find((group) => group.id === action.payload.id);
            if (group) {
                group.studentList = group.studentList.filter((student) => student.id !== action.payload.studentId);
            }
        },
        updateGroupName: (state, action: PayloadAction<{ id: number; name: string }>) => {
            const group = state.find(group => group.id === action.payload.id);
            if (group) {
                group.name = action.payload.name;
            }
        },
        updateWhatsAppLink: (state, action: PayloadAction<{ id: number; whatsAppLink: string }>) => {
            const group = state.find(group => group.id === action.payload.id);
            if (group) {
                group.whatsAppLink = action.payload.whatsAppLink;
            }
        },
        updateSkypeLink: (state, action: PayloadAction<{ id: number; skypeLink: string }>) => {
            const group = state.find(group => group.id === action.payload.id);
            if (group) {
                group.skypeLink = action.payload.skypeLink;
            }
        },
        updateSlackLink: (state, action: PayloadAction<{ id: number; slackLink: string }>) => {
            const group = state.find(group => group.id === action.payload.id);
            if (group) {
                group.slackLink = action.payload.slackLink;
            }
        },
        updateStartDate: (state, action: PayloadAction<{ groupId: number; startDate: Date }>) => {
            const group = state.find((group) => group.id === action.payload.groupId);
            if (group) {
                group.startDate = action.payload.startDate;
            }
        },
        updateExpectedFinishDate: (state, action: PayloadAction<{ groupId: number; expectedFinishDate: Date }>) => {
            const group = state.find((group) => group.id === action.payload.groupId);
            if (group) {
                group.expectedFinishDate = action.payload.expectedFinishDate;
            }
        },
        updateLessonDays: (state, action: PayloadAction<{ groupId: number; lessonDays: WeekDays[] }>) => {
            const group = state.find((group) => group.id === action.payload.groupId);
            if (group) {
                group.lessonsDays = action.payload.lessonDays;
            }
        },
        updateWebinarDays: (state, action: PayloadAction<{ groupId: number; webinarDays: WeekDays[] }>) => {
            const group = state.find((group) => group.id === action.payload.groupId);
            if (group) {
                group.webinarDays = action.payload.webinarDays;
            }
        },
        updateGroupReminder: (state, action: PayloadAction<{id: number; reminder: boolean; reminderDate: Date; reminderText: string  }>) => {
            const group = state.find(group => group.id === action.payload.id);
            if (group) {
                group.reminder = action.payload.reminder;
                group.reminderDate = action.payload.reminderDate;
                group.reminderDate = action.payload.reminderDate;
            }
        },
        // updateStudentInfo: (state, action: PayloadAction<{ groupId: number; studentId: number; updatedStudent: Partial<Student> }>) => {
        //     const group = state.find((group) => group.id === action.payload.groupId);
        //     if (group) {
        //         const student = group.studentList.find((s) => s.id === action.payload.studentId);
        //         if (student) {
        //             Object.assign(student, action.payload.updatedStudent);
        //         }
        //     }
        // }
    }
})

export const {addGroup, removeGroup, updateGroupName,updateSlackLink, updateSkypeLink, updateWhatsAppLink, updateStartDate, updateExpectedFinishDate, updateLessonDays, updateWebinarDays, updateGroupReminder, addStudent, removeStudent} = groupSlice.actions;
export default groupSlice.reducer;