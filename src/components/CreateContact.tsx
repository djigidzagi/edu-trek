import React, {useState} from "react";

const CreateContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: '',
        city: '',
        course: '',
        source: '',
        comment: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Тут можна обробити форму, наприклад, відправити дані на сервер
        console.log("Form submitted:", formData);
        // Очистити форму після відправлення
        setFormData({
            name: '',
            surname: '',
            phone: '',
            email: '',
            city: '',
            course: '',
            source: '',
            comment: ''
        });
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
                    <input type="text" name="course" value={formData.course} onChange={handleChange} />
                </label>
                <label>Source:
                    <input type="text" name="source" value={formData.source} onChange={handleChange} />
                </label>
                <label>Comment:
                    <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
                </label>
                <div className="button-container">
                    <button type="button" onClick={() => setFormData({
                        name: '',
                        surname: '',
                        phone: '',
                        email: '',
                        city: '',
                        course: '',
                        source: '',
                        comment: ''
                    })}>Cancel</button>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreateContact;