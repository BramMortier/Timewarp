// ------------------------------------------- //
// module imports
import { DocumentData, DocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { getTask } from "../firebase/database/tasks";
import { completedTaskList, dashboardTaskList, inProgressTaskList, newTaskModal, taskPage, todoTaskList } from "../lib/constants";
import { navigate, openModal } from "../lib/router";
// ------------------------------------------- //

export const renderTaskList = (taskList: QuerySnapshot<DocumentData>) => {
    todoTaskList.innerHTML = "";
    inProgressTaskList.innerHTML = "";
    completedTaskList.innerHTML = "";

    taskList.forEach((task: DocumentSnapshot<DocumentData>): void => {
        const data = task.data() as DocumentData;

        if (data.progressLabel === "To do") {
            renderTaskCardMinified(task.id, data, todoTaskList);
        } else if (data.progressLabel == "In progress") {
            renderTaskCardMinified(task.id, data, inProgressTaskList);
        } else {
            renderTaskCardMinified(task.id, data, completedTaskList);
        }
    });

    checkEmptyLists();
};

export const renderTaskCard = (id: string, data: any): void => {
    const taskCardEl: HTMLElement = document.createElement("li");
    taskCardEl.classList.add("dashboard__task");

    console.log(id, data);

    taskCardEl.innerHTML = `
        <h4 class="mb-xs text-lg">Add firebase auth</h4>
        <p class="text-sm text-subtle mb-lg">Use the firebase SDK to add authentication to the app.</p>
        <div class="dashboard__task-info">
            <div class="dashboard__task-infopiece">
                <img src="/icons/pencil.svg" alt="pencil icon" />
                <span class="text-orange">1</span>
            </div>
            <div class="dashboard__task-infopiece">
                <img src="/icons/timer.svg" alt="pencil icon" />
                <span class="text-orange">45m</span>
            </div>
        </div>
        <div class="dashboard__task-progress dashboard__task-progress--in-progress text-sm">In progress</div>
    `;

    dashboardTaskList.appendChild(taskCardEl);
};

export const renderTaskCardMinified = (id: string, data: any, destination: HTMLElement): void => {
    const taskCardMinifiedEl: HTMLElement = document.createElement("li");
    taskCardMinifiedEl.classList.add("project__task");
    taskCardMinifiedEl.setAttribute("data-id", id);

    taskCardMinifiedEl.innerHTML = `
        <p class="bold">${data.taskname}</p>
        <div class="project__task-progress project__task-progress--${getLabel(data.progressLabel)}">${data.progressLabel}</div>
    `;

    taskCardMinifiedEl.addEventListener("click", async (): Promise<void> => {
        console.log(await getTask(id));
        sessionStorage.setItem("currentTaskId", id);
        navigate(taskPage);
    });

    destination.appendChild(taskCardMinifiedEl);
};

export const getLabel = (progressState: string): string => {
    return progressState.split(" ").join("-").toLocaleLowerCase();
};

export const checkEmptyLists = () => {
    if (todoTaskList.innerHTML === "") {
        renderPlaceholder("Todo", todoTaskList);
    }
    if (inProgressTaskList.innerHTML === "") {
        renderPlaceholder("In Progress", inProgressTaskList);
    }
    if (completedTaskList.innerHTML === "") {
        renderPlaceholder("Completed", completedTaskList);
    }
};

export const renderPlaceholder = (type: string, destination: HTMLElement): void => {
    const placeholderEl: HTMLElement = document.createElement("div");
    placeholderEl.classList.add("project__tasks-list-placeholder");

    placeholderEl.innerHTML = `
        <span class="text-white bold">Add ${type}</span>
        <img src="/icons/plus-blue.svg" alt="plus icon" />
    `;

    placeholderEl.addEventListener("click", (): void => {
        openModal(newTaskModal);
    });

    destination.appendChild(placeholderEl);
};
