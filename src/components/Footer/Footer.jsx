import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__wrapper">
                    <div className="footer__links">
                        <ul className="footer__info">
                            <li className="footer__logo">
                                <img src="./img/Group 3677627.svg" alt="" />
                                <Link>
                                    DiscountsOnServices
                                </Link>
                            </li>
                            <li >It's simple, fast and economical</li>
                        </ul>
                        <ul className="footer__subscriptions">
                            <li className="footer-subscription__link">
                                <Link>Subscriptions</Link>
                            </li>
                            <li className="footer-subscription__link">
                                <Link>Netflix</Link>
                            </li>
                            <li className="footer-subscription__link">
                                <Link>YouTube Premium</Link>
                            </li>
                            <li className="footer-subscription__link">
                                <Link>Spotify</Link>
                            </li>
                        </ul>
                        <ul className="footer__nav">
                            <li className="footer-nav__link">
                                <Link>Site navigation</Link>
                            </li>
                            <li className="footer-subscription__link">
                                <Link>About</Link>
                            </li>
                            <li className="footer-subscription__link">
                                <Link>FAQ</Link>
                            </li>
                            <li className="footer-subscription__link">
                                <Link>Support</Link>
                            </li>
                        </ul>
                        <div className="footer-messengers-languages">
                            <ul className="footer__messengers">
                                <li className="footer__messenger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <g clip-path="url(#clip0_208_1185)">
                                            <path d="M3.34019 36.6663L5.59352 28.3863C4.10875 25.8411 3.32868 22.9463 3.33352 19.9997C3.33352 10.7947 10.7952 3.33301 20.0002 3.33301C29.2052 3.33301 36.6669 10.7947 36.6669 19.9997C36.6669 29.2047 29.2052 36.6663 20.0002 36.6663C17.0548 36.6711 14.1613 35.8916 11.6169 34.408L3.34019 36.6663ZM13.9852 12.1797C13.77 12.193 13.5596 12.2497 13.3669 12.3463C13.1861 12.4487 13.021 12.5767 12.8769 12.7263C12.6769 12.9147 12.5635 13.078 12.4419 13.2363C11.8259 14.038 11.4945 15.022 11.5002 16.033C11.5035 16.8497 11.7169 17.6447 12.0502 18.388C12.7319 19.8913 13.8535 21.483 15.3352 22.958C15.6919 23.313 16.0402 23.6697 16.4152 24.0013C18.2542 25.6204 20.4456 26.7881 22.8152 27.4113L23.7635 27.5563C24.0719 27.573 24.3802 27.5497 24.6902 27.5347C25.1756 27.5096 25.6495 27.3782 26.0785 27.1497C26.3552 27.003 26.4852 26.9297 26.7169 26.783C26.7169 26.783 26.7885 26.7363 26.9252 26.633C27.1502 26.4663 27.2885 26.348 27.4752 26.153C27.6135 26.0097 27.7335 25.8413 27.8252 25.6497C27.9552 25.378 28.0852 24.8597 28.1385 24.428C28.1785 24.098 28.1668 23.918 28.1618 23.8063C28.1552 23.628 28.0069 23.443 27.8452 23.3647L26.8752 22.9297C26.8752 22.9297 25.4252 22.298 24.5402 21.8947C24.4469 21.854 24.3469 21.8308 24.2452 21.8263C24.1312 21.8146 24.0159 21.8275 23.9073 21.864C23.7986 21.9005 23.699 21.9598 23.6152 22.038V22.0347C23.6069 22.0347 23.4952 22.1297 22.2902 23.5897C22.221 23.6826 22.1258 23.7528 22.0165 23.7914C21.9073 23.83 21.789 23.8352 21.6769 23.8063C21.5683 23.7773 21.4619 23.7405 21.3585 23.6963C21.1518 23.6097 21.0802 23.5763 20.9385 23.5147L20.9302 23.5113C19.9767 23.095 19.0939 22.5328 18.3135 21.8447C18.1035 21.6613 17.9085 21.4613 17.7085 21.268C17.0528 20.6401 16.4814 19.9297 16.0085 19.1547L15.9102 18.9963C15.8396 18.8899 15.7825 18.7752 15.7402 18.6547C15.6769 18.4097 15.8419 18.213 15.8419 18.213C15.8419 18.213 16.2469 17.7697 16.4352 17.5297C16.592 17.3302 16.7383 17.1227 16.8735 16.908C17.0702 16.5913 17.1319 16.2663 17.0285 16.0147C16.5619 14.8747 16.0785 13.7397 15.5819 12.613C15.4835 12.3897 15.1919 12.2297 14.9269 12.198C14.8369 12.188 14.7469 12.178 14.6569 12.1713C14.433 12.1602 14.2087 12.1624 13.9852 12.178V12.1797Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_208_1185">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </li>
                                <li className="footer__messenger">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <g clip-path="url(#clip0_208_1188)">
                                            <path d="M20.0002 36.6663C10.7952 36.6663 3.3335 29.2047 3.3335 19.9997C3.3335 10.7947 10.7952 3.33301 20.0002 3.33301C29.2052 3.33301 36.6668 10.7947 36.6668 19.9997C36.6668 29.2047 29.2052 36.6663 20.0002 36.6663ZM14.8168 21.9497L14.8385 21.938L16.2885 26.7213C16.4752 27.2397 16.7318 27.333 17.0435 27.2897C17.3568 27.248 17.5218 27.0797 17.7268 26.883L19.7068 24.9697L23.9568 28.1163C24.7335 28.5447 25.2918 28.323 25.4852 27.3963L28.2468 14.3597C28.5518 13.1463 28.0185 12.6597 27.0768 13.0463L10.8552 19.313C9.7485 19.7563 9.75516 20.3763 10.6552 20.6513L14.8168 21.9513V21.9497Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_208_1188">
                                                <rect width="40" height="40" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </li>
                            </ul>
                            <ul className="footer__languages">
                                <li className="footer__language">
                                    EN <img src="./img/arrow-down-s-line (2) 2 (1).svg" alt="" />
                                </li>
                            </ul>

                        </div>
                    </div>
                    <span className="footer__line-through"></span>
                    <div className="footer-rights__container">
                        <ul className="footer__rights-policy">
                            <li className="footer-rights-policy__text">Privacy Policy</li>
                            <li className="footer-rights-policy__text">Copyright 2021 © All Rights Reserved</li>
                            <li className="footer-rights-policy__text">Developed by ....</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;