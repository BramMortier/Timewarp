// ------------------------------------------- //
// module imports
import { DocumentData, DocumentSnapshot, QuerySnapshot } from "firebase/firestore";
import { completedTaskList, dashboardTaskList, inProgressTaskList, todoTaskList } from "../lib/constants";
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

    console.log(id, data);

    taskCardMinifiedEl.innerHTML = `
        <p class="bold">${data.taskname}</p>
        <div class="project__task-progress project__task-progress--${getLabel(data.progressLabel)}">${data.progressLabel}</div>
    `;

    destination.appendChild(taskCardMinifiedEl);
};

export const getLabel = (progressState: string): string => {
    return progressState.split(" ").join("-").toLocaleLowerCase();
};
