import {useContext, useRef, useState} from 'react';
import {DataContext} from '../App';
import Header from '../components/Header/Header';
import {Link} from 'react-router-dom';
import InviteBlock from '../components/InviteBlock/InviteBlock';
import Footer from '../components/Footer/Footer';
import ToggleAnswers from "../components/ToggleAnswers/ToggleAnswers";
import SupportBtn from "../components/UI/Buttons/SupportBtn";
import RegForm from "../components/RegForm/RegForm";


function NetflixPlan() {
    const data = useContext(DataContext);

    const [isBlurred, setIsBlurred] = useState(false);
    const [activeLeft, setActiveLeft] = useState(true);
    const [activeRight, setActiveRight] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState('6 months');

    const changeTerm = (e) => {
        const leftButton = 'main-period__left';
        const rightButton = 'main-period__right';

        if (e.target.classList.contains(leftButton) && !activeLeft) {
            setActiveLeft(true);
            setActiveRight(false);
            setSelectedTerm('');
            setSelectedTerm('6 months');
            console.log(selectedTerm);
        } else if (e.target.classList.contains(rightButton) && !activeRight) {
            setActiveLeft(false);
            setActiveRight(true);
            setSelectedTerm('');
            setSelectedTerm('12 months');
            console.log(selectedTerm);
        }

    };
    //
    // const handleBlur = () => {
    //     setIsBlurred((prev) => !prev);
    // }
    // const handleLoginClick = () => {
    //     setIsBlurred(true);
    // };



    const plans = data.NetflixPlan
        .filter(item => item.term === selectedTerm)
        .map((item, index) => {
            index = item.id;
            return (
                <div className='main__plan' key={index}>
                    <h2 className='main-plan__title'>{item.planName}</h2>
                    <span className='main-plan__line-through'></span>
                    <ul className='main-plan__options'>
                        <li className='main-plan__option main-plan__option_first'>
                            <p className='main-plan-option__text'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <g clip-path="url(#clip0_274_1841)">
                                        <path
                                            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                            fill="#5C5C5C"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_274_1841">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                {item.planOption1}
                            </p>
                        </li>
                        <li className='main-plan__option'>
                            <p className='main-plan-option__text'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <g clip-path="url(#clip0_274_1841)">
                                        <path
                                            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                            fill="#5C5C5C"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_274_1841">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                {item.planOption2}
                            </p>
                        </li>
                        <li className='main-plan__option'>
                            <p className='main-plan-option__text'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <g clip-path="url(#clip0_274_1841)">
                                        <path
                                            d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                                            fill="#5C5C5C"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_274_1841">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                {item.planOption3}
                            </p>
                        </li>
                    </ul>
                    <div className='main-plan__price'>
                        <span className='dollar-sign'>$</span>
                        <span className='amout'>{item.planPrice}</span>
                    </div>
                    <Link to='/' className='main-plan__get-started'>Get started</Link>

                </div>

            )
            //   
        })

    return (
        <>
            <RegForm />
            {isBlurred ? (
                <>
                    <Header />
                    <main id='main' className='main'>
                        <h1 className='main__title'>Choose a Netflix Plan</h1>
                        <p className='main__description'>Listen without limits at a bargain price</p>
                        <div className='main__period'

                        >
                            <button className={`main-period__left ${activeLeft ? 'period-btn-left_active' : ''}`}
                                    id={selectedTerm}
                                    onClick={changeTerm}
                            >6 months
                            </button>
                            <button className={`main-period__right ${activeRight ? 'period-btn-right_active' : ''}`}
                                    onClick={changeTerm}
                                    id={selectedTerm}
                            >12 months
                            </button>
                        </div>
                        <div className='main__plans'>
                            {plans}
                        </div>
                        <InviteBlock/>

                        <ToggleAnswers/>
                        <SupportBtn/>

                    </main>

                    <Footer/>
                </>
            ) : (
                <>
                    <Header/>
                    <main id='main' className='main'>
                        <h1 className='main__title'>Choose a Netflix Plan</h1>
                        <p className='main__description'>Listen without limits at a bargain price</p>
                        <div className='main__period'

                        >
                            <button className={`main-period__left ${activeLeft ? 'period-btn-left_active' : ''}`}
                                    id={selectedTerm}
                                    onClick={changeTerm}
                            >6 months
                            </button>
                            <button className={`main-period__right ${activeRight ? 'period-btn-right_active' : ''}`}
                                    onClick={changeTerm}
                                    id={selectedTerm}
                            >12 months
                            </button>
                        </div>
                        <div className='main__plans'>
                            {plans}
                        </div>
                        <InviteBlock/>

                        <ToggleAnswers/>
                        <SupportBtn/>

                    </main>

                    <Footer/>
                </>
            )}
        </>
    )
        ;
}

export default NetflixPlan;