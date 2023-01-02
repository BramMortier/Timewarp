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
};

export const renderTaskCardMinified = (id: string, data: any): void => {
    const taskCardMinifiedEl: HTMLElement = document.createElement("li");
    taskCardMinifiedEl.classList.add("project__task");

    console.log(id, data);

    taskCardMinifiedEl.innerHTML = `
        <p class="bold">Firebase Auth</p>
        <div class="project__task-progress project__task-progress--in-progress">To do</div>
    `;
};
