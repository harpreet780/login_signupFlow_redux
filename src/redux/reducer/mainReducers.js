import {
    PROFILE_SUBMISSION,
    LOGIN_FORM,
    UPDATE_PROFILE,
    REGISTRATION
} from '../actions/actions';

let initialState = {
    loginState: {
        email: '',
        password: '',
    },
    profileState: null,
    register: {
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: "",
    },
    updateProfile: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FORM:
            let userData = { ...state.loginState }
            userData[action.payload.name] = action.payload.value;
            return { ...state, loginState: userData, };

        case REGISTRATION:
            let currentData = { ...state.register };
            currentData[action.payload.name] = action.payload.value
            return {
                ...state, register: currentData,
            };

        case PROFILE_SUBMISSION:
            console.log(action.payload.result,"fetchLoginData")
           
            return {
                ...state, profileState: action.payload.result,
            };

        case UPDATE_PROFILE:
            let profileUpdatation = { ...state.profileState };
            profileUpdatation[action.payload.name] = action.payload.value
            return {
                ...state, updateProfile: profileUpdatation, profileState: profileUpdatation
            };

        default:
            return state;
    }
}