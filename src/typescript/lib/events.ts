// ------------------------------------------- //
// module imports
import { addComment } from "../components/newComment";
import { addNote } from "../components/newNote";
import { addCollaborator, addProject } from "../components/newProject";
import { addTask, handleDropdownMenu, selectChip, toggleDropdownMenu } from "../components/newTask";
import { login, loginWithGoogle, logout, signUp } from "../firebase/auth";
import { getProjects } from "../firebase/database/projects";
import {
    projectsPage,
    completedProjectsBtn,
    inProgressProjectsBtn,
    dashboardPage,
    newProjectBtns,
    newProjectModal,
    closeModalBtns,
    logoutBtn,
    loginPage,
    signUpForm,
    loginForm,
    newPasswordInput,
    signUpFormLink,
    signUpPage,
    loginFormLink,
    loginWithGoogleBtn,
    addCollaboratorBtn,
    newProjectCollaboratorsList,
    createProjectBtn,
    newProjectForm,
    dashboardBackBtn,
    projectsBackBtn,
    projectBackBtn,
    projectPage,
    newTaskBtns,
    newTaskModal,
    newTaskForm,
    createTaskBtn,
    newTaskDropdown,
    newTaskDropdownOptions,
    newTaskChips,
    newNoteBtn,
    newNoteModal,
    headingHotkey,
    subtitleHotkey,
    listHotkey,
    codeHotkey,
    markdownContent,
    previewMardownBtn,
    headers,
    newNoteForm,
    newCommentForm,
} from "./constants";
import { insertCode, insertHeading, insertList, insertSubtitle, previewMarkdown, togglePreview } from "./markdown";
import { closeModal, navigate, openModal } from "./router";
import { checkPasswordSecurity } from "./validation";
// ------------------------------------------- //

completedProjectsBtn.addEventListener("click", (): void => {
    getProjects();
    navigate(projectsPage);
});

inProgressProjectsBtn.addEventListener("click", (): void => {
    getProjects();
    navigate(projectsPage);
});

projectsBackBtn.addEventListener("click", (): void => {
    navigate(projectsPage);
});

projectBackBtn.addEventListener("click", (): void => {
    navigate(projectPage);
});

dashboardBackBtn.addEventListener("click", (): void => {
    navigate(dashboardPage);
});

logoutBtn.addEventListener("click", (): void => {
    logout();
    navigate(loginPage);
});

newProjectBtns.forEach((newProjectBtn: HTMLElement): void => {
    newProjectBtn.addEventListener("click", (): void => {
        newProjectForm.reset();
        newProjectCollaboratorsList.innerHTML = "";
        openModal(newProjectModal);
    });
});

newTaskBtns.forEach((newTaskBtn: HTMLElement): void => {
    newTaskBtn.addEventListener("click", (): void => {
        newTaskForm.reset();
        openModal(newTaskModal);
    });
});

newNoteBtn.addEventListener("click", (): void => {
    markdownContent.innerHTML = "";
    openModal(newNoteModal);
});

newCommentForm.addEventListener("submit", (e: Event) => {
    addComment(e);
});

newNoteForm.addEventListener("submit", (e: Event): void => {
    addNote(e);
});

newTaskDropdown.addEventListener("click", (): void => {
    toggleDropdownMenu();
});

newTaskDropdownOptions.forEach((option: HTMLElement): void => {
    option.addEventListener("click", (): void => {
        handleDropdownMenu(option);
    });
});

newTaskChips.forEach((chip: HTMLElement): void => {
    chip.addEventListener("click", (): void => {
        selectChip(chip);
    });
});

addCollaboratorBtn.addEventListener("click", (): void => {
    addCollaborator();
});

createProjectBtn.addEventListener("click", (e: Event): void => {
    addProject(e);
});

createTaskBtn.addEventListener("click", (e: Event): void => {
    addTask(e);
});

closeModalBtns.forEach((closeModalBtn: HTMLElement): void => {
    closeModalBtn.addEventListener("click", (): void => {
        closeModal();
    });
});

headingHotkey.addEventListener("click", (): void => {
    insertHeading();
});

subtitleHotkey.addEventListener("click", (): void => {
    insertSubtitle();
});

listHotkey.addEventListener("click", (): void => {
    insertList();
});

codeHotkey.addEventListener("click", (): void => {
    insertCode();
});

previewMardownBtn.addEventListener("click", (): void => {
    togglePreview();
});

markdownContent.addEventListener("input", (): void => {
    previewMarkdown(markdownContent.value);
});

signUpForm.addEventListener("submit", (e: Event): void => {
    signUp(e);
});

loginForm.addEventListener("submit", (e: Event): void => {
    login(e);
});

newPasswordInput.addEventListener("input", (): void => {
    checkPasswordSecurity();
});

signUpFormLink.addEventListener("click", (): void => {
    navigate(loginPage);
});

loginFormLink.addEventListener("click", (): void => {
    navigate(signUpPage);
});

loginWithGoogleBtn.addEventListener("click", (): void => {
    loginWithGoogle();
});

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        displayHeader(false);
    } else {
        displayHeader(true);
    }
    lastScrollTop = scrollTop;
});

export const displayHeader = (visible: boolean) => {
    headers.forEach((header: HTMLElement) => {
        header.style.top = `${visible ? "0" : "-4rem"}`;
    });
};
