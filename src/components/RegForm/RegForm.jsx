import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';

function RegForm() {
    const inputRefEmail = useRef();
    const inputRefName = useRef();
    const inputRefPassword = useRef();
    const [placeholderName, setplaceholderName] = useState("Enter your name");
    const [placeholderEmail, setPlaceholderEmail] = useState("Enter your e-mail");
    const [placeholderPassword, setPlaceholderPassword] = useState("Enter your password");
    const handlePlaceholderName = (event) => {
        setplaceholderName(false);
        if (!inputRefName.current.contains(event.target)) {
            setplaceholderName('Enter your name');
        }
    };
    const handlePlaceholderEmail = (event) => {
        setPlaceholderEmail(false);
        if (!inputRefEmail.current.contains(event.target)) {
            setPlaceholderEmail('Enter your e-mail');
        }
    };
    const handlePlaceholderPassword = (event) => {
        setPlaceholderPassword(false);
        if (!inputRefPassword.current.contains(event.target)) {
            setPlaceholderPassword('Enter your password');
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handlePlaceholderEmail);
        document.addEventListener('mousedown', handlePlaceholderPassword);
        document.addEventListener('mousedown', handlePlaceholderName);
        return () => {
            document.removeEventListener('mousedown', handlePlaceholderEmail);
            document.removeEventListener('mousedown', handlePlaceholderName);
            document.removeEventListener('mousedown', handlePlaceholderPassword);

        };
    }, []);


    return (
        <div className="reg-form">
            <h2 className="reg-form__title">Create an account</h2>
            <h3 className="reg-form__description">
                Already have an account? <Link to="/">Sign In</Link>
            </h3>
            <label htmlFor="userName">User name</label>
            <input id="userName" type="text" className="reg-form__input"
                    ref={inputRefName}
                   placeholder={placeholderName}
                   onClick={handlePlaceholderName}
            />
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" className="reg-form__input"
                   ref={inputRefEmail}
                   placeholder={placeholderEmail}
                   onClick={handlePlaceholderEmail}
            />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="reg-form__input"
                   ref={inputRefPassword}
                   placeholder={placeholderPassword}
                   onClick={handlePlaceholderPassword}
            />
        </div>
    );
}

export default RegForm;