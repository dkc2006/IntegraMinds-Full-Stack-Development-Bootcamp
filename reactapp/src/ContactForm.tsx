import React, { useEffect, useRef, useState } from "react";
import "./contact.css";

const ContactForm = () => {
    const nameRef = useRef();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 ~ handleSubmit ~ formData:", formData);
    };

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    return (
        <div className="contact-form">
            <h2>Contact</h2>
            {/* <p>Form Handling using React</p> */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    ref={nameRef}
                    onChange={handleChange}
                />
                
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label htmlFor="message">Message</label>
                <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
