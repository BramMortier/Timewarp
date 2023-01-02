import { newProjectCollaboratorsList, newProjectForm, newProjectFormErrors, newProjectSuccesMessage, projectPage } from "../lib/constants";
import { createProject } from "../firebase/database/projects";
import { notEmpty, validateMembers } from "../lib/validation";
import { dayMonthYearToTimestamp } from "../lib/dateFormatting";
import { closeModal, navigate } from "../lib/router";
import { convertInputsToArray } from "../lib/helper";

export const addProject = async (e: Event): Promise<void> => {
    e.preventDefault();

    let errorArr = [];

    let projectName: string = newProjectForm.projectName.value;
    let description: string = newProjectForm.description.value;

    let members: string[] = convertInputsToArray("collaborators[]");

    let day: number = newProjectForm.day.value;
    let month: number = newProjectForm.month.value;
    let year: number = newProjectForm.year.value;

    console.log(await validateMembers(members));
    if (!notEmpty(projectName)) errorArr.push("A title for your project is required");

    if (errorArr.length === 0) {
        try {
            newProjectFormErrors.innerHTML = "";
            newProjectFormErrors.classList.remove("form__errors--active");

            createProject({
                title: projectName,
                deadline: dayMonthYearToTimestamp(day, month, year),
                description: description,
                members: members,
                taskOverview: [0, 0, 0],
            });

            newProjectForm.reset();
            showSuccesMessage();

            setTimeout(() => {
                closeModal();
                navigate(projectPage);
            }, 800);
        } catch (error) {
            showErrors(newProjectFormErrors, errorArr);
        }
    } else {
        showErrors(newProjectFormErrors, errorArr);
    }
};

export const addCollaborator = (): void => {
    const collaboratorEl: HTMLElement = document.createElement("li");
    collaboratorEl.classList.add("new-project__collaborator");

    collaboratorEl.innerHTML = `
        <div class="new-project__collaborator-icon"></div>
        <input type="text" class="form__input" placeholder="Collaborator name" name="collaborators[]" />
        <button class="icon-btn icon-btn--secondary icon-btn--close">
            <img src="/icons/plus.svg" alt="close icon" />
        </button>
    `;

    newProjectCollaboratorsList.appendChild(collaboratorEl);

    Array.from(document.querySelectorAll(".new-project__collaborator button")).forEach((closeBtn: Element): void => {
        closeBtn.addEventListener("click", (): void => {
            closeBtn.parentElement?.remove();
        });
    });
};

export const showSuccesMessage = (): void => {
    newProjectSuccesMessage.classList.add("form__succes--active");
    setTimeout(() => {
        newProjectSuccesMessage.classList.remove("form__succes--active");
    }, 1000);
};

export const showErrors = (targetFormErrors: HTMLElement, errorArr: string[]): void => {
    targetFormErrors.innerHTML = "";

    errorArr.forEach((error: string): void => {
        let errEl: HTMLElement = document.createElement("span");
        errEl.classList.add("error", "text-sm");
        errEl.innerText = error;
        targetFormErrors.appendChild(errEl);
    });

    newProjectFormErrors.classList.add("form__errors--active");
};
