import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import logo_img from './당당이.png'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            showButton();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={logo_img} className="dangdang_logo" alt="당당로고" />
                        당당
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                                홈
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/mypage' className='nav-links' onClick={closeMobileMenu}>
                                마이페이지
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/community' className='nav-links' onClick={closeMobileMenu}>
                                커뮤니티
                            </Link>
                        </li>
                        {/* 로그인과 회원가입을 분리하여 각각의 버튼으로 넣어줍니다 */}
                        <li className='nav-item'>
                            <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                로그인
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                회원가입
                            </Link>
                        </li>
                    </ul>
                    {button && (
                        <div className='sign-btn'>
                            <Button buttonStyle="btn--outline">로그인</Button>
                            <Button buttonStyle='btn--outline'>회원가입</Button>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;