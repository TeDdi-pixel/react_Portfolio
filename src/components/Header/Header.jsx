import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (active) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [active]);
    const handleBurgerClick = () => {
        setActive((prev) => !prev);
    };



    const disableScroll = () => {
        // Сохраняем текущую позицию прокрутки
        const scrollPosition = window.scroll || document.documentElement.scrollTop;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
    };

    const enableScroll = () => {
        // Получаем сохраненную позицию прокрутки
        const scrollPosition = parseInt(document.body.style.top, 10) || 0;
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, -scrollPosition);
    };
    return (
        <>
            <header className={active ? 'header header_active' : 'header'}

            >
                <div className="header__wrapper">
                    <ul className="header__logo-block">
                        <Link to='/'><img src="./img/003_512.svg" alt="logo" /></Link>
                        <li className="header__name"><Link to="/">DiscountsOnServices</Link></li>
                    </ul>
                    <nav className="header__nav">
                        <ul className="header__links">
                            <li className="header__link">
                                <Link to="/">
                                    Subscriptions
                                    <img src="./img/arrow-down-s-line (2) 2.svg" alt="" />
                                </Link>
                            </li>
                            <li className="header__link">
                                <Link to="/">
                                    FAQ
                                </Link>
                            </li>
                            <li className="header__link">
                                <Link to="/">
                                    Support
                                </Link>
                            </li>
                            <li className="header__link">
                                <Link to="/">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__right'>
                        <ul className='header__messengers'>
                            <li className='header__messenger'>
                                <Link to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_10951_147)">
                                            <path d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z" fill="#333333" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10951_147">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </li>
                            <li className='header__messenger'>
                                <Link to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                                        <g clip-path="url(#clip0_10951_150)">
                                            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM8.89 13.17L8.903 13.163L9.773 16.033C9.885 16.344 10.039 16.4 10.226 16.374C10.414 16.349 10.513 16.248 10.636 16.13L11.824 14.982L14.374 16.87C14.84 17.127 15.175 16.994 15.291 16.438L16.948 8.616C17.131 7.888 16.811 7.596 16.246 7.828L6.513 11.588C5.849 11.854 5.853 12.226 6.393 12.391L8.89 13.171V13.17Z" fill="#333333" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_10951_150">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                        <ul className='header__languages'>
                            <li className='header__language'>
                                <Link to="/">
                                    EN
                                    <img src="./img/arrow-down-s-line (2) 2.svg" alt="" />
                                </Link>
                            </li>
                        </ul>
                        <div className='header__support'>
                        <Link to="/" className='support-btn'>Support</Link>

                        </div>
                    </div>
                    <div className={active ? 'header__burger-btn header__burger-btn_active' : 'header__burger-btn'}
                        onClick={handleBurgerClick}
                    >
                        <span></span>
                    </div>

                </div>
                <div
                    className={active ? 'header-menu header-menu_active' : 'header-menu'}
                >
                    <nav className='header-menu__nav'>
                        <ul className='header-menu__links'>
                            <li className='header-menu__link'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill='none'>
                                        <g clip-path="url(#clip0_295_2314)">
                                            <path d="M19.2727 20.0839C19.2727 20.3269 19.177 20.5599 19.0065 20.7317C18.836 20.9035 18.6047 21 18.3636 21H5.63636C5.39526 21 5.16403 20.9035 4.99354 20.7317C4.82305 20.5599 4.72727 20.3269 4.72727 20.0839V11.8389H2L11.3882 3.23852C11.5556 3.08505 11.7737 3 12 3C12.2263 3 12.4444 3.08505 12.6118 3.23852L22 11.8389H19.2727V20.0839ZM9.27273 10.9228V16.4195H14.7273V10.9228H9.27273ZM11.0909 12.755H12.9091V14.5873H11.0909V12.755Z" fill="#4E33FF" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_295_2314">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className='header-menu__link'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_295_2293)">
                                            <path d="M4 12.8889H11.1111V4H4V12.8889ZM4 20H11.1111V14.6667H4V20ZM12.8889 20H20V11.1111H12.8889V20ZM12.8889 4V9.33333H20V4H12.8889Z" fill="#9C99AD" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_295_2293">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className='header-menu__link'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_295_2300)">
                                            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 15V17H13V15H11ZM13 13.355C13.8037 13.1128 14.4936 12.59 14.9442 11.8817C15.3947 11.1735 15.5759 10.3271 15.4547 9.49647C15.3336 8.66588 14.9181 7.90644 14.284 7.35646C13.6499 6.80647 12.8394 6.50254 12 6.5C11.1909 6.49994 10.4067 6.78015 9.78079 7.29299C9.15492 7.80583 8.72601 8.51963 8.567 9.313L10.529 9.706C10.5847 9.42743 10.7183 9.1704 10.9144 8.96482C11.1104 8.75923 11.3608 8.61354 11.6364 8.54471C11.912 8.47587 12.2015 8.48671 12.4712 8.57597C12.7409 8.66523 12.9797 8.82924 13.1598 9.04891C13.34 9.26858 13.454 9.53489 13.4887 9.81684C13.5234 10.0988 13.4773 10.3848 13.3558 10.6416C13.2343 10.8984 13.0423 11.1154 12.8023 11.2673C12.5623 11.4193 12.2841 11.5 12 11.5C11.7348 11.5 11.4804 11.6054 11.2929 11.7929C11.1054 11.9804 11 12.2348 11 12.5V14H13V13.355Z" fill="#9C99AD" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_295_2300">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>FAQ</span>
                                </Link>
                            </li>
                            <li className='header-menu__link'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_295_2307)">
                                            <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V8H21V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM21 6H3V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V6ZM7 11V15H11V11H7ZM7 17V19H17V17H7ZM13 12V14H17V12H13Z" fill="#9C99AD" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_295_2307">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Support</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav className='header-menu__nav header-menu__nav_second'>
                        <ul className='header-menu__subs'>
                            <li className='header-menu__sub'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    Netflix
                                </Link>
                            </li>
                            <li className='header-menu__sub'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    YouTube
                                </Link>
                            </li>
                            <li className='header-menu__sub'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    Spotify
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Link className='header-menu__login' to='/' onClick={handleBurgerClick}>Login</Link>
                    <Link className='header-menu__sign-up' to='/' onClick={handleBurgerClick}>Sign-up</Link>

                    <div className='header-menu__bottom'>
                        <ul className='header-menu__messengers'>
                            <li className='header-menu__messenger'>
                                <Link to='/'
                                    onClick={handleBurgerClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g clip-path="url(#clip0_296_870)">
                                            <path d="M2.6721 29.333L4.47477 22.709C3.28695 20.6729 2.66289 18.357 2.66677 15.9997C2.66677 8.63572 8.6361 2.66638 16.0001 2.66638C23.3641 2.66638 29.3334 8.63572 29.3334 15.9997C29.3334 23.3637 23.3641 29.333 16.0001 29.333C13.6438 29.3368 11.329 28.7133 9.29343 27.5264L2.6721 29.333ZM11.1881 9.74371C11.0159 9.75441 10.8477 9.79976 10.6934 9.87705C10.5488 9.95895 10.4168 10.0613 10.3014 10.181C10.1414 10.3317 10.0508 10.4624 9.95343 10.589C9.46065 11.2304 9.19558 12.0176 9.2001 12.8264C9.20277 13.4797 9.37343 14.1157 9.6401 14.7104C10.1854 15.913 11.0828 17.1864 12.2681 18.3664C12.5534 18.6504 12.8321 18.9357 13.1321 19.201C14.6033 20.4963 16.3564 21.4304 18.2521 21.929L19.0108 22.045C19.2574 22.0584 19.5041 22.0397 19.7521 22.0277C20.1404 22.0077 20.5196 21.9025 20.8628 21.7197C21.0841 21.6024 21.1881 21.5437 21.3734 21.4264C21.3734 21.4264 21.4308 21.389 21.5401 21.3064C21.7201 21.173 21.8308 21.0784 21.9801 20.9224C22.0908 20.8077 22.1868 20.673 22.2601 20.5197C22.3641 20.3024 22.4681 19.8877 22.5108 19.5424C22.5428 19.2784 22.5334 19.1344 22.5294 19.045C22.5241 18.9024 22.4054 18.7544 22.2761 18.6917L21.5001 18.3437C21.5001 18.3437 20.3401 17.8384 19.6321 17.5157C19.5574 17.4832 19.4775 17.4646 19.3961 17.461C19.3049 17.4517 19.2127 17.4619 19.1258 17.4911C19.0388 17.5204 18.9592 17.5678 18.8921 17.6304V17.6277C18.8854 17.6277 18.7961 17.7037 17.8321 18.8717C17.7768 18.9461 17.7006 19.0023 17.6132 19.0331C17.5258 19.064 17.4312 19.0681 17.3414 19.045C17.2546 19.0218 17.1694 18.9924 17.0868 18.957C16.9214 18.8877 16.8641 18.861 16.7508 18.8117L16.7441 18.809C15.9813 18.476 15.2751 18.0262 14.6508 17.4757C14.4828 17.329 14.3268 17.169 14.1668 17.0144C13.6422 16.512 13.1851 15.9437 12.8068 15.3237L12.7281 15.197C12.6716 15.1119 12.6259 15.0201 12.5921 14.9237C12.5414 14.7277 12.6734 14.5704 12.6734 14.5704C12.6734 14.5704 12.9974 14.2157 13.1481 14.0237C13.2736 13.8641 13.3906 13.6981 13.4988 13.5264C13.6561 13.273 13.7054 13.013 13.6228 12.8117C13.2494 11.8997 12.8628 10.9917 12.4654 10.0904C12.3868 9.91171 12.1534 9.78371 11.9414 9.75838C11.8694 9.75038 11.7974 9.74238 11.7254 9.73705C11.5464 9.72815 11.3669 9.72993 11.1881 9.74238V9.74371Z" fill="#333333" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_296_870">
                                                <rect width="32" height="32" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </li>
                            <li className='header-menu__messenger'>
                                <Link to='/' 
                                    onClick={handleBurgerClick}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                        <g clip-path="url(#clip0_296_873)">
                                            <path d="M16.0001 29.333C8.63608 29.333 2.66675 23.3637 2.66675 15.9997C2.66675 8.63572 8.63608 2.66638 16.0001 2.66638C23.3641 2.66638 29.3334 8.63572 29.3334 15.9997C29.3334 23.3637 23.3641 29.333 16.0001 29.333ZM11.8534 17.5597L11.8707 17.5504L13.0307 21.377C13.1801 21.7917 13.3854 21.8664 13.6347 21.8317C13.8854 21.7984 14.0174 21.6637 14.1814 21.5064L15.7654 19.9757L19.1654 22.493C19.7867 22.8357 20.2334 22.6584 20.3881 21.917L22.5974 11.4877C22.8414 10.517 22.4147 10.1277 21.6614 10.437L8.68408 15.4504C7.79875 15.805 7.80408 16.301 8.52408 16.521L11.8534 17.561V17.5597Z" fill="#333333" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_296_873">
                                                <rect width="32" height="32" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                        <div className='header-menu__languages'>
                            <span>EN</span><img src="./img/arrow-down-s-line (2) 2.svg" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;