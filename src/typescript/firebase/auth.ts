import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { dashboardPage, loginForm, loginFormErrors, loginPage, signUpForm, signUpFormErrors } from "../lib/constants";
import { navigate } from "../lib/router";
import { notEmpty, safeLength, validateEmail } from "../lib/validation";

export const auth: Auth = getAuth();

auth.onAuthStateChanged((user): void => {
    if (user) {
        sessionStorage.setItem("userId", user.uid);
        navigate(dashboardPage);
    } else {
        sessionStorage.removeItem("userId");
        navigate(loginPage);
    }
});

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

    if (errorArr.length === 0) {
        try {
            signUpFormErrors.innerHTML = "";
            signUpFormErrors.classList.remove("form__errors--active");

            let userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);

            if (userCredential) {
                signUpForm.reset();
            }
        } catch (error) {
            errorArr.push("An account with this email already exists");
        }
    } else {
        showErrors(signUpFormErrors, errorArr);
    }
};

export const login = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorArr: string[] = [];

    let email: string = loginForm.email.value;
    let password: string = loginForm.password.value;

    if (!notEmpty(email)) {
        errorArr.push("Email can't be empty");
    } else if (!validateEmail(email)) errorArr.push("Email is not a valid format");

    if (!notEmpty(password)) {
        errorArr.push("Password can't be empty");
    } else if (!safeLength(6, password)) errorArr.push("Password must be longer than 6 characters");

    if (errorArr.length === 0) {
        try {
            loginFormErrors.innerHTML = "";
            loginFormErrors.classList.remove("form__errors--active");

            let userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);

            if (userCredential) {
                loginForm.reset();
            }
        } catch (error) {
            errorArr.push("An account with this email already exists");
        }
    } else {
        showErrors(loginFormErrors, errorArr);
    }
};

export const logout = (): void => {
    auth.signOut();
};

export const showErrors = (targetForm: HTMLElement, errorArr: string[]): void => {
    console.log(signUpFormErrors);
    targetForm.innerHTML = "";

    errorArr.forEach((error: string): void => {
        let errEl: HTMLElement = document.createElement("span");
        errEl.classList.add("error", "text-sm");
        errEl.innerText = error;
        targetForm.appendChild(errEl);
    });

    signUpFormErrors.classList.add("form__errors--active");
};
