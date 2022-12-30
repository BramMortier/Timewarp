// ------------------------------------------- //
// module imports
import { login, signUp } from "../firebase/auth";
import {
    projectsPage,
    completedProjectsBtn,
    inProgressProjectsBtn,
    projectBackBtn,
    dashboardPage,
    newProjectBtns,
    newProjectModal,
    closeModalBtns,
    logoutBtn,
    loginPage,
    signUpForm,
    loginForm,
    newPasswordInput,
} from "./constants";
import { closeModal, navigate, openModal } from "./router";
import { checkPasswordSecurity } from "./validation";
// ------------------------------------------- //

completedProjectsBtn.addEventListener("click", (): void => {
    navigate(projectsPage);
});

inProgressProjectsBtn.addEventListener("click", (): void => {
    navigate(projectsPage);
});

projectBackBtn.addEventListener("click", (): void => {
    navigate(dashboardPage);
});

logoutBtn.addEventListener("click", (): void => {
    navigate(loginPage);
});

newProjectBtns.forEach((newProjectBtn: HTMLElement): void => {
    newProjectBtn.addEventListener("click", (): void => {
        openModal(newProjectModal);
    });
});

closeModalBtns.forEach((closeModalBtn: HTMLElement): void => {
    closeModalBtn.addEventListener("click", (): void => {
        closeModal();
    });
});

signUpForm.addEventListener("submit", (e: Event): void => {
    signUp(e);
});

newPasswordInput.addEventListener("input", (): void => {
    checkPasswordSecurity();
});

loginForm.addEventListener("submit", (e: Event): void => {
    login(e);
});