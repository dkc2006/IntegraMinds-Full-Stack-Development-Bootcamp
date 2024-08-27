import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./contact.css";

const G_URL = "http://127.0.0.1:5000"



const getRandomInt = (min,max)=>{
    const minCeiled = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeiled + 1) + minCeiled);
}

const ContactForm = () => {
    const nameRef = useRef();

    const [formData, setFormData] = useState({
        name: "Deepanshu",
        email: "Sample@example.com",
        message: "Sample message goes here"
    });

    const saveForm = (values) => {
        console.log("🚀 ~ saveForm ~ formData:", values);
        values['_id'] = getRandomInt(500,10000)
        axios({
            method: 'POST',
            url: `${G_URL}/contact/save`,
            data: values,
        });  
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const formValues ={...formData,[name]:value};
        setFormData(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveForm(formData);
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
