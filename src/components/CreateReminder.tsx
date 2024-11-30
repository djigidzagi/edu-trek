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