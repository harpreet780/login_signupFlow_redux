import axios from "axios";

export const loginData = (data) => {
    return axios.post("https://apingweb.com/api/login", {
        email: data.email,
        password: data.password
    })
}
export const registerationData = (reg) => {
    return axios.post("https://apingweb.com/api/register", {
        name: reg.name,
        email: reg.email,
        phone: reg.phone,
        password: reg.password,
        password_confirmation: reg.password_confirmation,
    })
}

// export const profileData = (updatedData) => {
//     return axios.put(`https://apingweb.com/api/auth/users/${updatedData.id}`, {
//         name: updatedData.name,
//         email: updatedData.email,
//         phone: updatedData.phone,
//         password: updatedData.password,
//         password_confirmation: updatedData.password_confirmation,
//     })
// }