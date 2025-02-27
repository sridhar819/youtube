import React, { useContext, useState } from 'react'
import Context from '../Context'
import Cookies from 'js-cookie'
import { LoginContainer, Form, Label, Input } from './LoginStyle';
import { useNavigate, Navigate } from 'react-router-dom';

const Login = () => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [showPass, togglePass] = useState(false);
    const [error, setError] = useState({ isErr: false, errMsg: '' })
    const navigate = useNavigate()

    console.log(error, "err");


    const onSubmitForm = async (e) => {
        e.preventDefault();
        const url = "https://apis.ccbp.in/login";

        const options = {
            method: "POST",
            body: JSON.stringify({ username: userData.username, password: userData.password })
        }

        const response = await fetch(url, options);
        const data = await response.json();

        if (response.status === 200) {
            Cookies.set('jwt_token', data.jwt_token, { expires: 30 });
            navigate('/');
            setError({ isErr: false, errMsg: '' })
        }
        else {
            setError({ isErr: true, errMsg: data.error_msg })
        }

    }

    const handleChange = e => {
        const { name, value } = e.target;
        setUserData(pre => ({ ...pre, [name]: value }))


    }

    const { isDark } = useContext(Context)
    const token = Cookies.get('jwt_token');

    if (token) {
        return <Navigate to="/" replace />
    }

    return (
        <LoginContainer isDark={isDark}>
            <Form onSubmit={onSubmitForm}>
                <img src={!isDark ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" :
                    "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                } alt="weblogo" />
                <Label isDark={isDark} htmlFor='username'>USERNAME</Label>
                <Input onChange={handleChange} type='text' id="password" name="username" />
                <Label isDark={isDark} htmlFor='password'>PASSWORD</Label>
                <Input onChange={handleChange} type={showPass ? 'text' : 'password'} id="password" name="password" />
                <div className='d-flex align-items-cente gap-1 mt-2'>
                    <input onChange={() => togglePass(!showPass)} id="showPass" type="checkbox" />
                    <label style={{ color: "#555", fontSize: "14px", fontWeight: "400" }} htmlFor='showPass'>Show Password</label>
                </div>
                <button className='btn btn-primary mt-2' type="submit">Login</button>
                {error.isErr && <p style={{ fontSize: "12px", color: "red" }}>*{error.errMsg}</p>}
            </Form>
        </LoginContainer>
    )
}

export default Login