import React from "react";

const contactData = [
    {
        name: "Name Surname",
        phone: "055-555-55-55",
        email: "email@email.com",
        location: "Rehovot",
        status: "FSD"
    },
    {
        name: "Name Surname",
        phone: "055-555-55-55",
        email: "email@email.com",
        location: "Rehovot",
        status: "FSD"
    },
];

const ContactBook = () => {
    return (
        <section className="contact-book">
            <div className="contacts">
                {contactData.map((contact, index) => (
                    <div key={index} className="contact-card">
                        <h3>{contact.name}</h3>
                        <p>📞 {contact.phone}</p>
                        <p>📧 {contact.email}</p>
                        <p>📍 {contact.location}</p>
                        <p>📄 {contact.status}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ContactBook;