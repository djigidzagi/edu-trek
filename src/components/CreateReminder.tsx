// import * as React from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import {Button, TextField} from '@mui/material';


// const CreateReminder:React.FC = () => {
//     const [value, setValue] = React.useState<Dayjs | null>(dayjs());

//
//     return(
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
//                 <DateTimePicker
//                     label="Controlled picker"
//                     value={value}
//                     onChange={(newValue) => setValue(newValue)}
//                 />
//             </DemoContainer>
//         </LocalizationProvider>
//     )
// };


// import React, {useState} from 'react';  // Импортируем useState для управления состоянием
// import dayjs, {Dayjs} from 'dayjs';
// import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
// import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
// import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
// import {TextField, Button, IconButton} from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications'; // Иконка колокольчика
// // import './styles.css';  // Здесь кастомные стили
// import '../App.css';


// export const CreateReminder: React.FC = () => {
//     // Локальное состояние для даты
//     const [value, setValue] = useState<Dayjs | null>(dayjs());
//
//     // Локальное состояние для отображения формы
//     const [isFormOpen, setIsFormOpen] = useState(false);
//
//     // Обработчик клика на колокольчик
//     const handleIconClick = () => {
//         // Переключает видимость формы при каждом клике на колокольчик
//         setIsFormOpen(!isFormOpen);
//     };
//
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             {/* Иконка колокольчика для открытия формы */}
//             <IconButton onClick={handleIconClick}>
//                 <NotificationsIcon />
//             </IconButton>
//
//             {/* Если isFormOpen true, показываем календарь и форму */}
//             {isFormOpen && (
//                 <>
//                     {/* Календарь с выбором даты и времени */}
//                     <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
//                         <DateTimePicker
//                             label="Controlled picker"
//                             value={value}
//                             onChange={(newValue) => setValue(newValue)}
//                             sx={{
//                                 '& .MuiOutlinedInput-root': {
//                                     '&.Mui-focused fieldset': {
//                                         borderColor: '#3EB470', // Цвет рамки при фокусе
//                                     }
//                                 },
//                                 '& .MuiButtonBase-root.Mui-selected': {
//                                     backgroundColor: '#3EB470 !important', // Цвет выбранной даты
//                                 }
//                             }}
//                         />
//                     </DemoContainer>
//
//                     {/* Поле для комментариев */}
//                     <TextField
//                         label="Add comment"
//                         placeholder="Add your comment here"
//                         fullWidth
//                         multiline
//                         rows={4}
//                         variant="outlined"
//                         margin="normal"
//                     />
//
//                     {/* Кнопки Cancel и Create */}
//                     <div className="button-container-reminder">
//                         <Button className={"button-cancel-reminder"}
//                             variant="text"
//                             sx={{ color: '#2ecc71' }}
//                         >
//                             Cancel
//                         </Button>
//                         <Button
//                             variant="contained"
//                             sx={{ backgroundColor: '#2ecc71', color: '#fff', borderRadius: '20px', padding: '6px 16px' }}
//                         >
//                             Create
//                         </Button>
//                     </div>
//                 </>
//             )}
//         </LocalizationProvider>
//     );
// };
//
// export default CreateReminder;


// import React, { useState } from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { TextField, Button, IconButton } from '@mui/material';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import '../App.css';
// import Students from "./Students";
// import {useDispatch, useSelector} from "react-redux";
//
// export const CreateReminder: React.FC = () => {
//     const [value, setValue] = useState<Dayjs | null>(dayjs());
//     const [isFormOpen, setIsFormOpen] = useState(false);
//     const [comment, setComment] = useState('');
//
//
//     const handleIconClick = () => {
//         setIsFormOpen(!isFormOpen);
//     };
//
//     const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setComment(event.target.value);
//     };
//
//     const handleCreate = () => {
//         if (comment || value) {
//             console.log('Комментарий:', comment);
//             console.log('Дата и время:', value ? value.format('YYYY-MM-DD HH:mm') : 'Не выбрано');
//         }
//     };
//
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <IconButton onClick={handleIconClick}>
//                 <NotificationsIcon />
//             </IconButton>
//
//             {isFormOpen && (
//                 <>
//                     <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
//                         <DateTimePicker
//                             label="Controlled picker"
//                             value={value}
//                             onChange={(newValue) => setValue(newValue)}
//                             sx={{
//                                 '& .MuiOutlinedInput-root': {
//                                     '&.Mui-focused fieldset': {
//                                         borderColor: '#3EB470',
//                                     },
//                                 },
//                                 '& .MuiPickersDay-root': {
//                                     '&.Mui-selected': {
//                                         backgroundColor: '#3EB470 !important',
//                                         color: '#fff',
//                                     },
//                                     '&:hover': {
//                                         backgroundColor: '#3EB470',
//                                     },
//                                 },
//                                 '& .MuiSvgIcon-root': {
//                                     color: '#3EB470',
//                                 },
//                                 '& .MuiPickersToolbar-penIconButton': {
//                                     color: '#3EB470',
//                                 },
//                                 '& .MuiButtonBase-root.Mui-selected': {
//                                     backgroundColor: '#3EB470',
//                                     color: '#fff',
//                                 },
//                             }}
//                         />
//                     </DemoContainer>
//
//                     <TextField
//                         label="Add comment"
//                         placeholder="Add your comment here"
//                         fullWidth
//                         multiline
//                         rows={4}
//                         variant="outlined"
//                         margin="normal"
//                         value={comment}
//                         onChange={handleCommentChange}
//                     />
//
//                     <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: 16 }}>
//                         <Button
//                             variant="text"
//                             sx={{
//                                 color: '#2ecc71',
//                                 marginRight: '8px',
//                                 borderRadius: '20px',
//                                 padding: '6px 16px',
//                                 '&:hover': {
//                                     textDecoration: 'underline',
//                                     borderRadius: '20px',
//                                 },
//                             }}
//                         >
//                             Cancel
//                         </Button>
//                         <Button
//                             variant="contained"
//                             onClick={handleCreate}
//                             sx={{ backgroundColor: '#2ecc71', color: '#fff', borderRadius: '20px', padding: '6px 16px' }}
//                         >
//                             Create
//                         </Button>
//                     </div>
//                 </>
//             )}
//         </LocalizationProvider>
//     );
// };
//
// export default CreateReminder;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore/store'; // Импортируй RootState из store
import { updateStudentReminder } from '../slices/studentSlice'; // Импорт экшена
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { TextField, Button, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface CreateReminderProps {
    studentId: number; // Передавай ID студента в пропсах
}

//<CreateReminder studentId={1} /> // Пример использования для студента с id = 1

export const CreateReminder: React.FC<CreateReminderProps> = ({ studentId }) => {
    // Достаем информацию о студенте из стейта по ID
    const student = useSelector((state: RootState) =>
        state.students.find(s => s.id === studentId)
    );

    const dispatch = useDispatch();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [reminderDate, setReminderDate] = useState<Dayjs | null>(
        student?.reminderDate ? dayjs(student.reminderDate) : dayjs()
    );
    const [reminderText, setReminderText] = useState(student?.reminderText || '');

    const handleIconClick = () => {
        setIsFormOpen(!isFormOpen);
    };

    const handleSave = () => {
        // Диспатчим изменения в store
        if (student) {
            dispatch(updateStudentReminder({
                id: studentId,
                reminder: true,
                reminderDate: reminderDate?.toDate() || new Date(),
                reminderText,
            }));
        }
        setIsFormOpen(false);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <IconButton onClick={handleIconClick}>
                <NotificationsIcon />
            </IconButton>
            {isFormOpen && (
                <>
                    <DateTimePicker
                        label="Controlled picker"
                        value={reminderDate}
                        onChange={(newValue) => setReminderDate(newValue)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#3EB470',
                                }
                            },
                            '& .MuiButtonBase-root.Mui-selected': {
                                backgroundColor: '#3EB470 !important',
                            }
                        }}
                    />
                    <TextField
                        label="Add comment"
                        placeholder="Add your comment here"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        margin="normal"
                        value={reminderText}
                        onChange={(e) => setReminderText(e.target.value)}
                    />
                    <div className="button-container-reminder">
                        <Button
                            className={"button-cancel-reminder"}
                            variant="text"
                            sx={{ color: '#2ecc71', borderRadius: '20px', fontSize: '16px', marginRight: '8px' }}
                            onClick={() => setIsFormOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: '#2ecc71', color: '#fff', borderRadius: '20px', padding: '6px 16px' }}
                            onClick={handleSave}
                        >
                            Create
                        </Button>
                    </div>
                </>
            )}
        </LocalizationProvider>
    );
};

export default CreateReminder;