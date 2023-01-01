// ------------------------------------------- //
// module imports
import { projectPage, projectsList } from "../lib/constants";
import { timestampToDate } from "../lib/dateFormatting";
import { navigate } from "../lib/router";
// ------------------------------------------- //

export const renderProjectCard = (id: string, data: any): void => {
    let projectCardEl: HTMLElement = document.createElement("li");
    projectCardEl.classList.add("projects__project");

    console.log(data, id);

    projectCardEl.innerHTML = `
        <div class="projects__project-header mb-xs">
            <h3 class="text-xl">${data.title}</h3>
            <div class="projects__project-deadline">
                <img src="/icons/calendar.svg" alt="calender icon" />
                <span class="text-orange bold">${timestampToDate(data.deadline)}</span>
            </div>
        </div>

        <p class="text-sm text-subtle mb-md">
            ${data.description} <br />
            <span class="bold text-blue"> read more </span>
        </p>

        <h4 class="mb-xs">Project members</h4>
        <div class="projects__members-info mb-xs">
            <ul class="projects__members-list">
                ${renderMembersList(data.members)}
            </ul>
            <span>${data.members.length > 4 ? `${data.members.length - 4}+` : ""}</span>
        </div>

        <div class="projects__progress-info mb-sm">
            <div class="projects__progress-header mb-xs">
                <h4 class="regular">Project progression</h4>
                <span class="bold">${updateProjectProgress(data.taskOverview)}%</span>
            </div>
            <div class="projects__progress-bar">
                <span class="projects__progress-bar-value"></span>
            </div>
        </div>

        <div class="projects__task-overview">
            <span class="projects__task projects__task--todo">${data.taskOverview[0]}</span>
            <span class="projects__task projects__task--in-progress">${data.taskOverview[1]}</span>
            <span class="projects__task projects__task--completed">${data.taskOverview[2]}</span>
        </div>
    `;

    projectCardEl.addEventListener("click", (): void => {
        navigate(projectPage);
    });

    projectsList.appendChild(projectCardEl);
};

export const renderMembersList = (membersList: string[]): string => {
    let memberElList: string[] = [];

    membersList.forEach((): void => {
        memberElList.push(`<li class="projects__member"></li>`);
    });
    return memberElList.join("");
};

export const updateProjectProgress = (tasks: number[]): number => {
    return Math.floor((tasks[2] / tasks.reduce((a: number, b: number): number => a + b)) * 100);
};
