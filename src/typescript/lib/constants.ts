export const headers = Array.from(document.querySelectorAll(".header")) as HTMLElement[];

export const loginPage = document.getElementById("login-page") as HTMLElement;
export const signUpPage = document.getElementById("register-page") as HTMLElement;
export const dashboardPage = document.getElementById("dashboard-page") as HTMLElement;
export const projectsPage = document.getElementById("projects-page") as HTMLElement;
export const projectPage = document.getElementById("project-page") as HTMLElement;
export const taskPage = document.getElementById("task-page") as HTMLElement;

export const pages: HTMLElement[] = [loginPage, signUpPage, dashboardPage, projectPage, projectsPage, taskPage];

export const accountUsername = document.getElementById("account-username") as HTMLElement;

export const inProgressProjectsBtn = document.getElementById("in-progress-projects-btn") as HTMLElement;
export const completedProjectsBtn = document.getElementById("completed-projects-btn") as HTMLElement;

export const dashboardBackBtn = document.getElementById("dashboard-back-btn") as HTMLElement;
export const projectsBackBtn = document.getElementById("projects-back-btn") as HTMLElement;
export const projectBackBtn = document.getElementById("project-back-btn") as HTMLElement;

export const logoutBtn = document.getElementById("logout-btn") as HTMLElement;

export const newProjectBtns = Array.from(document.querySelectorAll(".new-project-btn")) as HTMLElement[];
export const newTaskBtns = Array.from(document.querySelectorAll(".new-task-btn")) as HTMLElement[];
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

export const newProjectForm = document.getElementById("new-project-form") as HTMLFormElement;
export const newProjectFormErrors = document.getElementById("new-project-form-errors") as HTMLElement;
export const newProjectSuccesMessage = document.getElementById("new-project-succes-message") as HTMLElement;
export const newProjectCollaboratorsList = document.getElementById("new-project-collaborators-list") as HTMLElement;
export const addCollaboratorBtn = document.getElementById("add-collaborator-btn") as HTMLElement;
export const createProjectBtn = document.getElementById("create-project-btn") as HTMLElement;

export const newTaskForm = document.getElementById("new-task-form") as HTMLFormElement;
export const newTaskFormErrors = document.getElementById("new-task-form-errors") as HTMLElement;
export const newTaskSuccesMessage = document.getElementById("new-task-succes-message") as HTMLElement;
export const newTaskDropdown = document.getElementById("new-task-dropdown") as HTMLElement;
export const newTaskDropdownList = document.getElementById("new-task-dropdown-list") as HTMLElement;
export const newTaskDropdownOptions = Array.from(document.querySelectorAll(".form__dropdown-option")) as HTMLElement[];
export const newTaskChips = Array.from(document.querySelectorAll(".new-task__chip")) as HTMLElement[];
export const createTaskBtn = document.getElementById("create-task-btn") as HTMLElement;

export const newPasswordInput = document.getElementById("new-password-input") as HTMLInputElement;
export const passwordSecurityBars = document.getElementById("password-security-bars") as HTMLElement;

export const dashboardTaskList = document.getElementById("dashboard-task-list") as HTMLElement;

export const projectsList = document.getElementById("projects-list") as HTMLElement;

export const projectInfo = document.getElementById("project-info") as HTMLElement;

export const todoTaskList = document.getElementById("todo-task-list") as HTMLElement;
export const inProgressTaskList = document.getElementById("in-progress-task-list") as HTMLElement;
export const completedTaskList = document.getElementById("completed-task-list") as HTMLElement;
