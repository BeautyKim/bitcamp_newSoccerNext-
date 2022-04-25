import axios from "axios";
const SERVER = `http://localhost:5080`
export const userSignin = userSigninRequest => axios.post(`${SERVER}/user/sign-in`, bmiRequest)
export const userSignup = userSignupRequest => axios.post(`${SERVER}/user/sign-up`, calcRequest)