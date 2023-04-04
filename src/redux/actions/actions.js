export const LOGIN_FORM = "LOGIN_FORM";
export const PROFILE_SUBMISSION = "PROFILE_SUBMISSION";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const REGISTRATION = "REGISTRATION";



export const toExpress = (type, payload) => ({
    type,
    payload
  });

export const loginState = (user)=> toExpress(LOGIN_FORM, user);
export const profileForm = (profile)=> toExpress(PROFILE_SUBMISSION, profile);
export const updateProfile = (update)=> toExpress(UPDATE_PROFILE, update);
export const handleRegistration = (value)=> toExpress(REGISTRATION, value);