import React, { useEffect } from "react";
import "./login.css";

const LoginFormPage = () => {
    // Typing useRef for TypeScript
    const emailRef = React.useRef<HTMLInputElement | null>(null);
    
    // State to manage form data
    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
    };

    // Focus the email input on component mount
    useEffect(() => {
        emailRef.current?.focus();
    }, []);

    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            ref={emailRef}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginFormPage;
