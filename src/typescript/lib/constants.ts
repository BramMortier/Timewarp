export const headers = Array.from(document.querySelectorAll(".header")) as HTMLElement[];

export const loginPage = document.getElementById("login-page") as HTMLElement;
export const signUpPage = document.getElementById("register-page") as HTMLElement;
export const dashboardPage = document.getElementById("dashboard-page") as HTMLElement;
export const projectsPage = document.getElementById("projects-page") as HTMLElement;
export const projectPage = document.getElementById("project-page") as HTMLElement;
export const taskPage = document.getElementById("task-page") as HTMLElement;

export const pages: HTMLElement[] = [loginPage, signUpPage, dashboardPage, projectPage, projectsPage, taskPage];

export const inProgressProjectsBtn = document.getElementById("in-progress-projects-btn") as HTMLElement;
export const completedProjectsBtn = document.getElementById("completed-projects-btn") as HTMLElement;

export const projectBackBtn = document.getElementById("projects-back-btn") as HTMLElement;

export const logoutBtn = document.getElementById("logout-btn") as HTMLElement;

export const newProjectBtns = Array.from(document.querySelectorAll(".new-project-btn")) as HTMLElement[];
export const closeModalBtns = Array.from(document.querySelectorAll(".close-modal-btn")) as HTMLElement[];

export const newProjectModal = document.getElementById("new-project-overlay") as HTMLElement;
export const newTaskModal = document.getElementById("new-task-overlay") as HTMLElement;

export const modals: HTMLElement[] = [newProjectModal, newTaskModal];

export const tiles = Array.from(document.querySelectorAll(".tile")) as HTMLElement[];

export const loginForm = document.getElementById("login-form") as HTMLFormElement;
export const loginFormErrors = document.getElementById("login-form-errors") as HTMLElement;
export const loginFormLink = document.getElementById("login-form-link") as HTMLElement;
export const loginWithGoogleBtn = document.getElementById("google-auth-btn") as HTMLElement;
export const signUpForm = document.getElementById("signup-form") as HTMLFormElement;
export const signUpFormErrors = document.getElementById("signup-form-errors") as HTMLElement;
export const signUpFormLink = document.getElementById("signup-form-link") as HTMLElement;

export const newPasswordInput = document.getElementById("new-password-input") as HTMLInputElement;
export const passwordSecurityBars = document.getElementById("password-security-bars") as HTMLElement;

export const projectsList = document.getElementById("projects-list") as HTMLElement;
