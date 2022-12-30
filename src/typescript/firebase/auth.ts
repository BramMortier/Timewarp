import { Auth, getAuth } from "firebase/auth";
import { signUpForm } from "../lib/constants";
import { notEmpty, safeLength, validateEmail } from "../lib/validation";

export const auth: Auth = getAuth();

export const signUp = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorArr: string[] = [];

    let username: string = signUpForm.username.value;
    let email: string = signUpForm.email.value;
    let password: string = signUpForm.password.value;

    if (!notEmpty(username)) {
        errorArr.push("Username can't be empty");
    } else if (!safeLength(8, username)) errorArr.push("Username must be longer than 8 characters");

    if (!notEmpty(email)) {
        errorArr.push("Email can't be empty");
    } else if (!validateEmail(email)) errorArr.push("Email is not a valid format");

    if (!notEmpty(password)) {
        errorArr.push("Password can't be empty");
    } else if (!safeLength(6, password)) errorArr.push("Password must be longer than 6 characters");

    console.log(errorArr);

    signUpForm.reset();
};

export const login = async (e: Event): Promise<void> => {
    console.log(e);
};
