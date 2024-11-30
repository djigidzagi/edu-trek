// import React from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "../configureStore/store";
// import {Button} from "@mui/material";
//
// const CreateGroup = () => {
//     const group = useSelector((state: RootState) => state.groups);
//     const dispatch = useDispatch();
//
//
//     return (
//         <div className="createGroupBox">
//             <div className="createGroupDivLeft">
//                 <label>Create Group</label>
//                 <label>Name:
//                     <input type="text" name="name" value={} onChange={} />
//                 </label>
//                 <label>WhatsApp:
//                     <input type="text" name="whatsUpp" value={} onChange={} />
//                 </label>
//                 <label>Skype:
//                     <input type="text" name="skype" value={} onChange={} />
//                 </label>
//                 <label>Slack:
//                     <input type="text" name="slack" value={} onChange={} />
//                 </label>
//                 <label>Start date:
//                     <input type="date" name="startDate" value={} onChange={} />
//                 </label>
//                 <label>EFD:
//                     <input type="date" name="endDate" value={} onChange={} />
//                 </label>
//                 <label>Lessons:
//
//                 </label>
//                 <label>Webinars:
//
//                 </label>
//             </div>
//             <div className="createGroupDivRight">
//                 <label>Add Student
//                     <input type="text" name="students" value={} onChange={} />
//                 </label>
//                 <p>Please find the contact using Name or ID</p>
//                 <p>Pressing Submit you confirm that <b>selected students</b> are changing their status to Students of group <b>GroupName</b></p>
//             </div>
//             <Button
//                 className={"button-cancel-reminder"}
//                 variant="text"
//                 sx={{ color: '#2ecc71', borderRadius: '20px', fontSize: '16px', marginRight: '8px' }}
//                 onClick={}
//             >
//                 Cancel
//             </Button>
//             <Button
//                 variant="contained"
//                 sx={{ backgroundColor: '#2ecc71', color: '#fff', borderRadius: '20px', padding: '6px 16px' }}
//                 onClick={}
//             >
//                 Create
//             </Button>
//         </div>
//     );
// };
//
// export default CreateGroup;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../configureStore/store";
// import { addGroup } from "../slices/groupSlice";
// import { Student } from "../slices/studentSlice";
// import Button from "@mui/material/Button";
// import { WeekDays } from "../slices/groupSlice";
//
// const weekDays = Object.values(WeekDays);
//
// const CreateGroup = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         whatsAppLink: "",
//         skypeLink: "",
//         slackLink: "",
//         startDate: "",
//         expectedFinishDate: "",
//         lessonsDays: [] as WeekDays[],
//         webinarDays: [] as WeekDays[],
//         selectedStudents: [] as Student[]
//     });
//
//     const students = useSelector((state: RootState) => state.students); // Все студенты из стейта
//     const dispatch = useDispatch();
//
//     // Обновление полей формы
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };
//
//     // Обработка выбора дней недели
//     const toggleDaySelection = (type: "lessonsDays" | "webinarDays", day: WeekDays) => {
//         setFormData((prev) => ({
//             ...prev,
//             [type]: prev[type].includes(day)
//                 ? prev[type].filter((d) => d !== day)
//                 : [...prev[type], day]
//         }));
//     };
//
//     // Обработка добавления студента
//     const handleAddStudent = (searchQuery: string) => {
//         const student = students.find(
//             (s) => s.id.toString() === searchQuery || `${s.name} ${s.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         if (student && !formData.selectedStudents.includes(student)) {
//             setFormData((prev) => ({ ...prev, selectedStudents: [...prev.selectedStudents, student] }));
//         }
//     };
//
//     // Отправка формы
//     const handleSubmit = () => {
//         const newGroup = {
//             id: Date.now(),
//             ...formData,
//             startDate: new Date(formData.startDate),
//             expectedFinishDate: new Date(formData.expectedFinishDate),
//             studentList: formData.selectedStudents,
//             lecturerIdLessons: 0, // Можно задать значение позже
//             lecturerIdWebinars: 0, // Можно задать значение позже
//             reminder: false,
//             reminderDate: new Date(),
//             reminderText: "",
//             active: true
//         };
//
//         dispatch(addGroup(newGroup));
//         setFormData({
//             name: "",
//             whatsAppLink: "",
//             skypeLink: "",
//             slackLink: "",
//             startDate: "",
//             expectedFinishDate: "",
//             lessonsDays: [],
//             webinarDays: [],
//             selectedStudents: []
//         });
//     };
//
//     return (
//         <div className="createGroupBox">
//             <div className="createGroupDivLeft">
//                 <label>Create Group</label>
//                 <label>
//                     Name:
//                     <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     WhatsApp:
//                     <input type="text" name="whatsAppLink" value={formData.whatsAppLink} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Skype:
//                     <input type="text" name="skypeLink" value={formData.skypeLink} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Slack:
//                     <input type="text" name="slackLink" value={formData.slackLink} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Start Date:
//                     <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
//                 </label>
//                 <label>
//                     Expected Finish Date:
//                     <input type="date" name="expectedFinishDate" value={formData.expectedFinishDate} onChange={handleInputChange} />
//                 </label>
//
//                 {/* Выбор дней уроков */}
//                 <label>Lessons:</label>
//                 <div className="daysGrid">
//                     {weekDays.map((day) => (
//                         <div
//                             key={day}
//                             className={`day ${formData.lessonsDays.includes(day) ? "selected" : ""}`}
//                             onClick={() => toggleDaySelection("lessonsDays", day)}
//                         >
//                             {day[0]}
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* Выбор дней вебинаров */}
//                 <label>Webinars:</label>
//                 <div className="daysGrid">
//                     {weekDays.map((day) => (
//                         <div
//                             key={day}
//                             className={`day ${formData.webinarDays.includes(day) ? "selected" : ""}`}
//                             onClick={() => toggleDaySelection("webinarDays", day)}
//                         >
//                             {day[0]}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//
//             <div className="createGroupDivRight">
//                 {/* Добавление студентов */}
//                 <label>
//                     Add Student:
//                     <input
//                         type="text"
//                         placeholder="Search by name or ID"
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") {
//                                 handleAddStudent((e.target as HTMLInputElement).value);
//                                 (e.target as HTMLInputElement).value = "";
//                             }
//                         }}
//                     />
//                 </label>
//                 <p>Please find the contact using Name or ID</p>
//                 <p>
//                     Pressing Submit you confirm that <b>selected students</b> are changing their status to Students of group{" "}
//                     <b>{formData.name}</b>
//                 </p>
//                 <ul>
//                     {formData.selectedStudents.map((student) => (
//                         <li key={student.id}>
//                             {student.name} {student.surname} ({student.id})
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <Button
//                 className="button-cancel-reminder"
//                 variant="text"
//                 sx={{ color: "#2ecc71", borderRadius: "20px", fontSize: "16px", marginRight: "8px" }}
//                 onClick={() => setFormData({
//                     name: "",
//                     whatsAppLink: "",
//                     skypeLink: "",
//                     slackLink: "",
//                     startDate: "",
//                     expectedFinishDate: "",
//                     lessonsDays: [],
//                     webinarDays: [],
//                     selectedStudents: []
//                 })}
//             >
//                 Cancel
//             </Button>
//             <Button
//                 variant="contained"
//                 sx={{ backgroundColor: "#2ecc71", color: "#fff", borderRadius: "20px", padding: "6px 16px" }}
//                 onClick={handleSubmit}
//             >
//                 Create
//             </Button>
//         </div>
//     );
// };
//
// export default CreateGroup;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../configureStore/store";
import { addGroup } from "../slices/groupSlice";
import { Student } from "../slices/studentSlice";
import Button from "@mui/material/Button";
import { WeekDays } from "../slices/groupSlice";
import CloseIcon from "@mui/icons-material/Close";
import CreateGroupStyles from "../styles/CreateGroupStyles.css"

const weekDays = Object.values(WeekDays);

const CreateGroup = () => {
    const [formData, setFormData] = useState({
        name: "",
        whatsAppLink: "",
        skypeLink: "",
        slackLink: "",
        startDate: "",
        expectedFinishDate: "",
        lessonsDays: [] as WeekDays[],
        webinarDays: [] as WeekDays[],
        selectedStudents: [] as Student[],
    });

    const students = useSelector((state: RootState) => state.students);
    const dispatch = useDispatch();

    // Обновление полей формы
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Обработка выбора дней недели
    const toggleDaySelection = (type: "lessonsDays" | "webinarDays", day: WeekDays) => {
        setFormData((prev) => ({
            ...prev,
            [type]: prev[type].includes(day)
                ? prev[type].filter((d) => d !== day)
                : [...prev[type], day],
        }));
    };


    // Обработка добавления студента
    const handleAddStudent = (searchQuery: string) => {
        const student = students.find(
            (s) => s.id.toString() === searchQuery || `${s.name} ${s.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (student && !formData.selectedStudents.includes(student)) {
            setFormData((prev) => ({ ...prev, selectedStudents: [...prev.selectedStudents, student] }));
        }
    };

    // Сброс формы
    const resetForm = () => {
        setFormData({
            name: "",
            whatsAppLink: "",
            skypeLink: "",
            slackLink: "",
            startDate: "",
            expectedFinishDate: "",
            lessonsDays: [],
            webinarDays: [],
            selectedStudents: [],
        });
    };

    // Отправка формы
    const handleSubmit = () => {
        const newGroup = {
            id: Date.now(),
            ...formData,
            startDate: new Date(formData.startDate),
            expectedFinishDate: new Date(formData.expectedFinishDate),
            studentList: formData.selectedStudents,
            lecturerIdLessons: 0,
            lecturerIdWebinars: 0,
            reminder: false,
            reminderDate: new Date(),
            reminderText: "",
            active: true,
        };

        dispatch(addGroup(newGroup));
        resetForm();
    };

    return (
        // <div className="createGroupBox">
        //     {/* Зеленая рамка и крестик */}
        //     <div className="formHeader">
        //         <span>Create Group</span>
        //         <span>Add Student</span>
        //         <CloseIcon className="closeIcon" onClick={resetForm} />
        //     </div>
        //
        //     <div className="formContent">
        //         {/* Левый блок */}
        //         <div className="createGroupDivLeft">
        //             <label>
        //                 <b>Name:</b>
        //                 <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        //             </label>
        //             <label>
        //                 <b>WhatsApp:</b>
        //                 <input type="text" name="whatsAppLink" value={formData.whatsAppLink} onChange={handleInputChange} />
        //             </label>
        //             <label>
        //                 <b>Skype:</b>
        //                 <input type="text" name="skypeLink" value={formData.skypeLink} onChange={handleInputChange} />
        //             </label>
        //             <label>
        //                 <b>Slack:</b>
        //                 <input type="text" name="slackLink" value={formData.slackLink} onChange={handleInputChange} />
        //             </label>
        //             <label>
        //                 <b>Start Date:</b>
        //                 <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
        //             </label>
        //             <label>
        //                 <b>EFD:</b>
        //                 <input
        //                     type="date"
        //                     name="expectedFinishDate"
        //                     value={formData.expectedFinishDate}
        //                     onChange={handleInputChange}
        //                 />
        //             </label>
        //
        //             <label><b>Lessons:</b></label>
        //             <div className="daysGrid">
        //                 {weekDays.map((day) => (
        //                     <div
        //                         key={day}
        //                         className={`day ${formData.lessonsDays.includes(day) ? "selected" : ""}`}
        //                         onClick={() => toggleDaySelection("lessonsDays", day)}
        //                     >
        //                         {day[0]}
        //                     </div>
        //                 ))}
        //             </div>
        //
        //             <label><b>Webinars:</b></label>
        //             <div className="daysGrid">
        //                 {weekDays.map((day) => (
        //                     <div
        //                         key={day}
        //                         className={`day ${formData.webinarDays.includes(day) ? "selected" : ""}`}
        //                         onClick={() => toggleDaySelection("webinarDays", day)}
        //                     >
        //                         {day[0]}
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //
        //         {/* Правый блок */}
        //         <div className="createGroupDivRight">
        //             {/*<label>*/}
        //             {/*    Add Student*/}
        //                 <input
        //                     type="text"
        //                     placeholder="Search by name or ID"
        //                     onKeyDown={(e) => {
        //                         if (e.key === "Enter") {
        //                             handleAddStudent((e.target as HTMLInputElement).value);
        //                             (e.target as HTMLInputElement).value = "";
        //                         }
        //                     }}
        //                 />
        //             {/*</label>*/}
        //             <p>Please find the contact using Name or ID</p>
        //             <p>
        //                 Pressing Submit you confirm that <b>selected students</b> are changing their status to Students of group{" "}
        //                 <b>{formData.name}</b>
        //             </p>
        //             <ul>
        //                 {formData.selectedStudents.map((student) => (
        //                     <li key={student.id}>
        //                         {student.name} {student.surname} ({student.id})
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </div>
        //
        //     {/* Кнопки */}
        //     <div className="formActions">
        //         <Button className="cancelButton"
        //                 variant="text"
        //                 sx={{ color: "#2ecc71", borderRadius: "20px", fontSize: "16px", marginRight: "8px" }}
        //                 onClick={resetForm}>
        //             Cancel
        //         </Button>
        //         <Button className="createButton"
        //                 variant="contained"
        //                 sx={{ backgroundColor: "#2ecc71", color: "#fff", borderRadius: "20px", padding: "6px 16px" }}
        //                 onClick={handleSubmit}>
        //             Create
        //         </Button>
        //     </div>
        // </div>
        <div className="createGroupBox">
            {/* Хедер */}
            <div className="createGroupHeader">
                <span>Create Group</span>
                <span>Add Student</span>
                <CloseIcon className="closeIcon" onClick={resetForm} />
            </div>

            <div className="formContent">
                {/* Левый блок */}
                <div className="createGroupDivLeft">
                    <label>
                        <b>Name:</b>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    </label>
                    <label>
                        <b>WhatsApp:</b>
                        <input type="text" name="whatsAppLink" value={formData.whatsAppLink} onChange={handleInputChange} />
                    </label>
                    <label>
                        <b>Skype:</b>
                        <input type="text" name="skypeLink" value={formData.skypeLink} onChange={handleInputChange} />
                    </label>
                    <label>
                        <b>Slack:</b>
                        <input type="text" name="slackLink" value={formData.slackLink} onChange={handleInputChange} />
                    </label>
                    <label>
                        <b>Start Date:</b>
                        <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} />
                    </label>
                    <label>
                        <b>EFD:</b>
                        <input type="date" name="expectedFinishDate" value={formData.expectedFinishDate} onChange={handleInputChange} />
                    </label>

                    <label><b>Lessons:</b></label>
                    <div className="daysGrid">
                        {weekDays.map((day) => (
                            <div
                                key={day}
                                className={`day ${formData.lessonsDays.includes(day) ? "selected" : ""}`}
                                onClick={() => toggleDaySelection("lessonsDays", day)}
                            >
                                {day[0]}
                            </div>
                        ))}
                    </div>

                    <label><b>Webinars:</b></label>
                    <div className="daysGrid">
                        {weekDays.map((day) => (
                            <div
                                key={day}
                                className={`day ${formData.webinarDays.includes(day) ? "selected" : ""}`}
                                onClick={() => toggleDaySelection("webinarDays", day)}
                            >
                                {day[0]}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Правый блок */}
                <div className="createGroupDivRight">
                    {/*<label><b>Add Student</b></label>*/}
                    <input
                        type="text"
                        placeholder="Search by name or ID"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleAddStudent((e.target as HTMLInputElement).value);
                                (e.target as HTMLInputElement).value = "";
                            }
                        }}
                    />
                    <p>Please find the contact using Name or ID</p>
                    <p>
                        Pressing Submit you confirm that <b>selected students</b> are changing their status to Students of group{" "}
                        <b>{formData.name}</b>
                    </p>
                    <ul className="studentList">
                        {formData.selectedStudents.map((student) => (
                            <li key={student.id}>
                                {student.name} {student.surname} ({student.id})
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Кнопки */}
            <div className="formActions">
                <Button className="cancelButton"
                        variant="text"
                        sx={{ color: "#2ecc71", borderRadius: "20px", fontSize: "16px", marginRight: "8px" }}
                        onClick={resetForm}>
                    Cancel
                </Button>
                <Button className="createButton"
                        variant="contained"
                        sx={{ backgroundColor: "#2ecc71", color: "#fff", borderRadius: "20px", padding: "6px 16px" }}
                        onClick={handleSubmit}>
                    Create
                </Button>
            </div>
        </div>
    );
};


export default CreateGroup;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../configureStore/store";
// import { addGroup } from "../slices/groupSlice";
// import { Student } from "../slices/studentSlice";
// import Button from "@mui/material/Button";
// import { WeekDays } from "../slices/groupSlice";
// import CloseIcon from "@mui/icons-material/Close";
//
//
// const weekDays = Object.values(WeekDays);
//
// const CreateGroup = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         whatsAppLink: "",
//         skypeLink: "",
//         slackLink: "",
//         startDate: "",
//         expectedFinishDate: "",
//         lessonsDays: [] as WeekDays[],
//         webinarDays: [] as WeekDays[],
//         selectedStudents: [] as Student[],
//     });
//
//     const students = useSelector((state: RootState) => state.students);
//     const dispatch = useDispatch();
//
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };
//
//     const toggleDaySelection = (type: "lessonsDays" | "webinarDays", day: WeekDays) => {
//         setFormData((prev) => ({
//             ...prev,
//             [type]: prev[type].includes(day)
//                 ? prev[type].filter((d) => d !== day)
//                 : [...prev[type], day],
//         }));
//     };
//
//     const handleAddStudent = (searchQuery: string) => {
//         const student = students.find(
//             (s) =>
//                 s.id.toString() === searchQuery ||
//                 `${s.name} ${s.surname}`.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         if (student && !formData.selectedStudents.includes(student)) {
//             setFormData((prev) => ({
//                 ...prev,
//                 selectedStudents: [...prev.selectedStudents, student],
//             }));
//         }
//     };
//
//     const resetForm = () => {
//         setFormData({
//             name: "",
//             whatsAppLink: "",
//             skypeLink: "",
//             slackLink: "",
//             startDate: "",
//             expectedFinishDate: "",
//             lessonsDays: [],
//             webinarDays: [],
//             selectedStudents: [],
//         });
//     };
//
//     const handleSubmit = () => {
//         const newGroup = {
//             id: Date.now(),
//             ...formData,
//             startDate: new Date(formData.startDate),
//             expectedFinishDate: new Date(formData.expectedFinishDate),
//             studentList: formData.selectedStudents,
//             lecturerIdLessons: 0,
//             lecturerIdWebinars: 0,
//             reminder: false,
//             reminderDate: new Date(),
//             reminderText: "",
//             active: true,
//         };
//
//         dispatch(addGroup(newGroup));
//         resetForm();
//     };
//
//     return (
//         <div className="createGroupBox">
//             <div className="formHeader">
//                 <span>Create Group</span>
//                 <CloseIcon className="closeIcon" onClick={resetForm} sx={{color: "#000"}}/>
//             </div>
//
//             <div className="formContent">
//                 <div className="formRow">
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="formRow">
//                     <label>WhatsApp:</label>
//                     <input
//                         type="text"
//                         name="whatsAppLink"
//                         value={formData.whatsAppLink}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="formRow">
//                     <label>Skype:</label>
//                     <input
//                         type="text"
//                         name="skypeLink"
//                         value={formData.skypeLink}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="formRow">
//                     <label>Slack:</label>
//                     <input
//                         type="text"
//                         name="slackLink"
//                         value={formData.slackLink}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="formRow">
//                     <label>Start Date:</label>
//                     <input
//                         type="date"
//                         name="startDate"
//                         value={formData.startDate}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//                 <div className="formRow">
//                     <label>Expected Finish Date:</label>
//                     <input
//                         type="date"
//                         name="expectedFinishDate"
//                         value={formData.expectedFinishDate}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//             </div>
//
//             <div className="formActions">
//                 <Button
//                     className="cancelButton"
//                     variant="text"
//                     sx={{
//                         color: "#2ecc71",
//                         borderRadius: "20px",
//                         fontSize: "16px",
//                         marginRight: "8px",
//                     }}
//                     onClick={resetForm}
//                 >
//                     Cancel
//                 </Button>
//                 <Button
//                     className="createButton"
//                     variant="contained"
//                     sx={{
//                         backgroundColor: "#2ecc71",
//                         color: "#fff",
//                         borderRadius: "20px",
//                         padding: "6px 16px",
//                     }}
//                     onClick={handleSubmit}
//                 >
//                     Create
//                 </Button>
//             </div>
//         </div>
//     );
// };
//
// export default CreateGroup;
