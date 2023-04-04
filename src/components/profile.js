import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { UPDATE_PROFILE } from '../redux/actions/actions';
// import { profileData } from '../api';

const Profile = () => {
    const [disabledFields, setDisabledFields] = useState(true);
    const [UpdatedItemList, setUpdatedItemList] = useState(false);
    const dispatch = useDispatch();
    const latestdata = useSelector((state) => state.profileState);
    const updateProfile = useSelector((state) => state.updateProfile);

    let updatedItem = []
    updatedItem.push(updateProfile)
    console.log(updatedItem, "data")

    // const handleUpdateProfile = () => {
    //     profileData({
    //         name: updateProfile.name,
    //         email: updateProfile.email,
    //         phone: updateProfile.phone,
    //         password: updateProfile.password,
    //         password_confirmation: updateProfile.password_confirmation,
    //     }).then((res) => res.data)
    // }

    return (
        <div className='primary-bg'>
            <div className="pageWrapper">
                <div className='w-100'>
                    <div className="formWrap">
                        <h2 className='text-center text-decoration-underline'>Profile Page</h2>
                        <Label>Name:</Label>
                        <Input
                            type="text"
                            name="name"
                            className={`input ${disabledFields === true && "disable"}`}
                            value={latestdata?.name}
                            disabled={disabledFields === true}
                            onChange={(e) => dispatch({ type: UPDATE_PROFILE, payload: { value: e.target.value, name: "name" } })}
                        />
                        <Label>Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            className={`input ${disabledFields === true && "disable"}`}
                            value={latestdata?.email}
                            disabled={disabledFields === true || disabledFields === false}
                            onChange={(e) => dispatch({ type: UPDATE_PROFILE, payload: { value: e.target.value, name: "email" } })}
                        /> <Label>Phone:</Label>
                        <Input
                            type="number"
                            name="phone"
                            className={`input ${disabledFields === true && "disable"}`}
                            value={latestdata?.phone}
                            disabled={disabledFields === true}
                            onChange={(e) => dispatch({ type: UPDATE_PROFILE, payload: { value: e.target.value, name: "phone" } })}
                        />
                        <Label>Password:</Label>
                        <Input
                            type="password"
                            name="password"
                            className={`input ${disabledFields === true && "disable"}`}
                            value={latestdata?.password}
                            disabled={disabledFields === true}
                            onChange={(e) => dispatch({ type: UPDATE_PROFILE, payload: { value: e.target.value, name: "password" } })}
                        />
                        <Label>Confirm Password:</Label>
                        <Input
                            type="password"
                            name="password_confirmation"
                            className={`input ${disabledFields === true && "disable"}`}
                            value={latestdata?.password_confirmation}
                            disabled={disabledFields === true}
                            onChange={(e) => dispatch({ type: UPDATE_PROFILE, payload: { value: e.target.value, name: "password_confirmation" } })}
                        />
                        <div className='d-flex justify-content-center align-items-center'>
                            {disabledFields === true ?
                                <button className='submitBtn profileBtn' onClick={() => setDisabledFields(false)}>
                                    Edit
                                </button>
                                :
                                <button className='submitBtn profileBtn' onClick={() => {
                                    dispatch({ type: UPDATE_PROFILE, payload: latestdata })
                                    setUpdatedItemList(true)
                                }}>
                                    Update
                                </button>
                            }
                        </div>
                    </div>
                    {UpdatedItemList === true &&
                        <>
                            {updatedItem?.map((obj) => {
                                return (
                                    <div className='formWrap'>
                                        <div className="d-flex align-items-center">
                                            <p className='px-3'>
                                                <b>Name:</b></p>
                                            <p>{obj.name}</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className='px-3'>
                                                <b>Email:</b>
                                            </p>
                                            <p>{obj.email}</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className='px-3'>
                                                <b>Phone:</b>
                                            </p>
                                            <p>{obj.phone}</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className='px-3'>
                                                <b>Password:</b>
                                            </p>
                                            <p>{obj.password}</p>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <p className='px-3'>
                                                <b>Confirm Password:</b>
                                            </p>
                                            <p>{obj.password_confirmation}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile;