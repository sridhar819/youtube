import { Big } from './HomeStyle'


import { NavLink } from 'react-router-dom'

import { AiFillHome } from "react-icons/ai";
import { FaGripfire } from "react-icons/fa6";
import { LuGamepad2 } from "react-icons/lu";
import { GiSaveArrow } from "react-icons/gi";

const Slider = ({ isDark }) => {
    return (
        <Big isDark={isDark}>
            <ul >
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
        </Big>
    )
}

export default Slider