import React from 'react'
import { Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_SUBMISSION, REGISTRATION } from '../redux/actions/actions';
import { registerationData } from '../api';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registeration = useSelector((state) => state.register);

  const handleRegisteration = () => {
    registerationData({
      name: registeration.name,
      email: registeration.email,
      phone: registeration.phone,
      password: registeration.password,
      password_confirmation: registeration.password_confirmation,
    }).then((res) => {
      if (res.status === 200) {
        alert("signup successfully done")
        navigate("/login")
      }
      else {
        console.log("first11")
        return alert("something went wrong!")
      }
    })
  }

  return (
    <div className='primary-bg'>
      <div className="pageWrapper">
        <div className="formWrap">
          <h2 className='text-center'>Registration</h2>
          <Label>Username:</Label>
          <Input
            type="text"
            name="username"
            className="input"
            value={registeration?.username}
            onChange={(e) => dispatch({ type: REGISTRATION, payload: { value: e.target.value, name: "name" } })}
          />
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            className="input"
            value={registeration?.email}
            onChange={(e) => dispatch({ type: REGISTRATION, payload: { value: e.target.value, name: "email" } })}
          /> <Label>Phone:</Label>
          <Input
            type="number"
            name="phone"
            className="input"
            value={registeration?.phone}
            onChange={(e) => dispatch({ type: REGISTRATION, payload: { value: e.target.value, name: "phone" } })}
          />
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            className="input"
            value={registeration?.password}
            onChange={(e) => dispatch({ type: REGISTRATION, payload: { value: e.target.value, name: "password" } })}
          />
          <Label>Confirm Password:</Label>
          <Input
            type="password"
            name="password_confirmation"
            className="input"
            value={registeration?.password_confirmation}
            onChange={(e) => dispatch({ type: REGISTRATION, payload: { value: e.target.value, name: "password_confirmation" } })}
          />
          <div className='d-flex justify-content-center align-items-center'>
            <button className='submitBtn profileBtn' onClick={() => {
              dispatch({ type: REGISTRATION, payload: registeration })
              handleRegisteration()
            }}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SignupForm;