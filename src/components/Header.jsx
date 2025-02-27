import { useContext } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../Context'
import { useState } from 'react';
import Cookies from 'js-cookie'

import { Navbar, MenuCard } from './HeaderStyle';

import { GrMenu } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaGripfire } from "react-icons/fa6";
import { LuGamepad2 } from "react-icons/lu";
import { GiSaveArrow } from "react-icons/gi";





const Header = () => {
    const [showMenu, setMenu] = useState(false);
    const { isDark, changeTheme } = useContext(Context);

    const navigate = useNavigate()

    const onLogout = () => {
        Cookies.remove('jwt_token');
        navigate('/login');
    }


    return (

        <Navbar isDark={isDark}>
            <button onClick={() => setMenu(!showMenu)} className={`d-block d-md-none btn fs-5 ${isDark ? "text-light" : "text-dark"}`} type="button"><GrMenu /></button>

            {showMenu && (
                <MenuCard isDark={isDark}>
                    <button onClick={() => setMenu(!showMenu)} className='btn close-btn' type="button">
                        <RiCloseLine />
                    </button>
                    <ul>
                        <li><NavLink to={'/'}><AiFillHome />Home</NavLink></li>
                        <li><NavLink to={'/trending'}><FaGripfire />Trending</NavLink></li>
                        <li><NavLink to={'/gaming'}><LuGamepad2 />Gaming</NavLink></li>
                        <li><NavLink to={'/saved-videos'}><GiSaveArrow />Saved Videos</NavLink></li>
                    </ul>
                    <div className='social'>
                        <p>Contact us</p>
                        <div>
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt="" srcset="" />
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="" srcset="" />
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="" srcset="" />
                        </div>
                        <p>Enjoy! Now to see your channels and recommendations</p>
                    </div>
                </MenuCard>
            )}

            <NavLink to={"/"}>
                <img src={!isDark ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" :
                    "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                } alt="weblogo" />
            </NavLink>
            <div className='d-flex align-items-center gap-2'>
                <label className="switch">
                    <input onClick={changeTheme} type="checkbox" />
                    <span className="slider"></span>
                </label>
                <button onClick={onLogout} className='btn btn-primary text-light' type="button">Logout</button>
            </div>
        </Navbar>


    )
}

export default Header