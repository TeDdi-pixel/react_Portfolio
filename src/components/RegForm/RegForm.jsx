import React, { useEffect, useRef, useState } from 'react';
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

    const removeBlur = () => {
        const header = document.querySelector('header header_blure');
        header.className = 'header';
    }


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
            <div className='reg-form__wrapper'>
                <h2 className="reg-form__title">Create an account</h2>
                <h3 className="reg-form__description">
                    Already have an account? <Link to="/">Sign In</Link>
                </h3>
                <label className='reg-form__label reg-form__label_first' htmlFor="userName">User name</label>
                <input id="userName" type="text" className="reg-form__input"
                    ref={inputRefName}
                    placeholder={placeholderName}
                />
                <label className='reg-form__label' htmlFor="email">Email Address</label>
                <input id="email" type="email" className="reg-form__input"
                    ref={inputRefEmail}
                    placeholder={placeholderEmail}
                />
                <label className='reg-form__label' htmlFor="password">Password</label>
                <input id="password" type="password" className="reg-form__input"
                    ref={inputRefPassword}
                    placeholder={placeholderPassword}
                />
                <div className='reg-form__check-wrapper'>
                    <input id="checkbox" type="checkbox" className="reg-form__checkbox" />
                    <label htmlFor='checkbox' className='reg-form__agreements'>By creating an account you agree to our
                        <Link to='/' className='reg-form__privacy'> Privacy Policy </Link>
                        and
                        <Link to='/' className='reg-form__terms'> Terms of Service. </Link>
                    </label>
                </div>
                <Link className='reg-form__sign-up' to='/'>Sign up</Link>
                <div className='reg-form__or-sign-in-with'>
                    <div className='reg-form__left-block'>
                        <span className='reg-form__left-line'></span>
                    </div>
                    <p>Or sign in with</p>
                    <div className='reg-form__right-block'>
                        <span className='reg-form__right-line'></span>
                    </div>
                </div>
                <div className='reg-form__icons'>
                    <Link to='/' className='reg-form__icon-wrapper'>
                        <img src="./img/image 10.jpg" alt="" />
                    </Link>
                    <Link to='/' className='reg-form__icon-wrapper'>
                        <img src="./img/image 11.jpg" alt="" />
                    </Link>
                    <Link to='/' className='reg-form__icon-wrapper'>
                        <img src="./img/image 12.jpg" alt="" />
                    </Link>
                    <div className='reg-form-exit__wrapper'
                    onClick={removeBlur}
                    >
                        <img src="./img/Group 3677629 (1).jpg" alt="" className='reg-form__exit'/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegForm;