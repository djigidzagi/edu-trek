// import React, {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {RootState} from "../configureStore/store";
// import {addStudent} from "../slices/studentSlice";
// import Button from "@mui/material/Button";
//
// const CreateContact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         surname: '',
//         phone: '',
//         email: '',
//         city: '',
//         course: '',
//         source: '',
//         comment: ''
//     });
//
//     const students = useSelector((state: RootState) => state.students);
//     const dispatch = useDispatch();
//
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value
//         }));
//     };
//
//     const resetForm = () => {
//         setFormData({
//             name: '',
//             surname: '',
//             phone: '',
//             email: '',
//             city: '',
//             course: '',
//             source: '',
//             comment: ''
//         })
//     }
//
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const newStudent = {
//             id: Date.now(),
//             ...formData,
//             address: formData.city,
//             groupNames: formData.course,
//             status: "active",
//             documents: false,
//             commentsLog: formData.comment,
//             reminder: false,
//             reminderDate: new Date(),
//             reminderText: "",
//             paymentProgress: 0,
//             active: true
//         }
//         dispatch(addStudent(newStudent));
//         resetForm();
//     };
//
//     return (
//         <div className="create-contact-form">
//             <form onSubmit={handleSubmit}>
//                 <label>Create Contact</label>
//                 <label>Name:
//                     <input type="text" name="name" value={formData.name} onChange={handleChange} />
//                 </label>
//                 <label>Surname:
//                     <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
//                 </label>
//                 <label>Phone:
//                     <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
//                 </label>
//                 <label>Email:
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} />
//                 </label>
//                 <label>City:
//                     <input type="text" name="city" value={formData.city} onChange={handleChange} />
//                 </label>
//                 <label>Course:
//                     <input type="text" name="course" value={formData.course} onChange={handleChange} />
//                 </label>
//                 <label>Source:
//                     <input type="text" name="source" value={formData.source} onChange={handleChange} />
//                 </label>
//                 <label>Comment:
//                     <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
//                 </label>
//                 <div className="formActions">
//                     <Button className="cancelButton"
//                             variant="text"
//                             sx={{ color: "#2ecc71", borderRadius: "20px", fontSize: "16px", marginRight: "8px" }}
//                             onClick={resetForm}>
//                         Cancel
//                     </Button>
//                     <Button className="createButton"
//                             variant="contained"
//                             sx={{ backgroundColor: "#2ecc71", color: "#fff", borderRadius: "20px", padding: "6px 16px" }}
//                             onClick={handleSubmit}>
//                         Create
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     );
// };
//
// export default CreateContact;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../slices/studentSlice";
import { LeadStatus } from "../slices/studentSlice";
import StatusSelector from "./StatusSelector";
import Button from "@mui/material/Button";
import { RootState } from "../configureStore/store";
import {Group} from "../slices/groupSlice"; // Импортируем RootState, чтобы типизировать стейт

const CreateContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        city: '',
        course: '',
        source: '',
        comment: '',
        status: LeadStatus.Lead,  // Стартовый статус
    });

    // Типизируем groups как массив объектов типа Group
    const groups = useSelector((state: RootState) => state.groups);

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            surname: '',
            phone: '',
            email: '',
            city: '',
            course: '',
            source: '',
            comment: '',
            status: LeadStatus.Lead,  // Сбросим статус в дефолтный
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const selectedGroup = groups.find(group => group.name === formData.course);

        if (!selectedGroup) {
            alert("Group not found!");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: formData.name,
            surname: formData.surname,
            phone: formData.phone,
            email: formData.email,
            address: formData.city,
            groupNames: [formData.course],
            source: formData.source,
            status: formData.status,
            documents: false,
            commentsLog: formData.comment,
            reminder: false,
            reminderDate: new Date(),
            reminderText: "",
            paymentProgress: 0,
            active: true,
        };

        dispatch(addStudent(newStudent));
        resetForm();
    };

    return (
        <div className="create-contact-form">
            <form onSubmit={handleSubmit}>
                <label>Create Contact</label>
                <label>Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>Surname:
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
                </label>
                <label>Phone:
                    <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <label>Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <label>City:
                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                </label>
                <label>Course:
                    <select name="course" value={formData.course} onChange={handleChange}>
                        <option value="">Select Group</option>
                        {groups.map((group: Group) => (
                            <option key={group.id} value={group.name}>
                                {group.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label>Source:
                    <select name="source" value={formData.source} onChange={handleChange}>
                        <option value="">Select source</option>
                    </select>
                    {/*<input type="text" name="source" value={formData.source} onChange={handleChange} />*/}
                </label>
                <label>Comment:
                    <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
                </label>


                <label>Status:</label>
                <StatusSelector currentStatus={formData.status} onStatusChange={(status: LeadStatus) => setFormData(prevData => ({ ...prevData, status }))} />

                <div className="formActions">
                    <Button
                        variant="text"
                        sx={{ color: "#2ecc71", borderRadius: "20px", fontSize: "16px", marginRight: "8px" }}
                        onClick={resetForm}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "#2ecc71", color: "#fff", borderRadius: "20px", padding: "6px 16px" }}
                        type="submit"
                    >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateContact;