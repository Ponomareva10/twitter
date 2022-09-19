import React from "react";
import style from './style.module.css';
import {NavLink, useLocation} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
    return (
        <div className={style.header}>
            <div className={`${style.wrapper} container`}>
                <h2>Twitter</h2>
                <nav>
                    <NavLink to='/'>
                        <span className={location.pathname === '/' ? style.active_page : null}>Main</span>
                    </NavLink>
                    <NavLink to='/posts' >
                        <span className={location.pathname.includes('posts') ? style.active_page : null}>Posts</span>
                    </NavLink>
                    <NavLink to='/users' >
                        <span className={location.pathname.includes('users') ? style.active_page : null}>Users</span>
                    </NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header;