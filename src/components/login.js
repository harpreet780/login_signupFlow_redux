import React from 'react'
import { Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_FORM, PROFILE_SUBMISSION } from '../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import { loginData } from '../api';


const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getloginData = useSelector((state) => state.loginState);

    const handleLoginData = () => {
        loginData({
            email: getloginData.email,
            password: getloginData.password,
        }).then((res) => {
            dispatch({ type: PROFILE_SUBMISSION, payload: res.data })
               if(res.status === 200) {
                navigate("/profile")
               }
        })
    }

    return (
        <div className='primary-bg'>
            <div className="pageWrapper">
                <div className="formWrap">
                    <h2 className='text-center'>Login Page</h2>
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        className="input"
                        value={getloginData?.email}
                        onChange={(e) => dispatch({ type: LOGIN_FORM, payload: { value: e.target.value, name: "email" } })}
                    />
                    <Label>Password:</Label>
                    <Input
                        type="password"
                        name="password"
                        className="input"
                        value={getloginData?.password}
                        onChange={(e) => dispatch({ type: LOGIN_FORM, payload: { value: e.target.value, name: "password" } })}
                    />
                    <button className='submitBtn' onClick={() => {
                        dispatch({ type: LOGIN_FORM, payload: getloginData })
                        handleLoginData()
                    }}>
                        login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;