export const renderNote = (data: any): void => {
    const noteEl: HTMLElement = document.createElement("li");
    noteEl.classList.add("task__note");

    noteEl.innerHTML = `
        <h4 class="mb-xs">Style guide</h4>
        <p class="text-subtle text-sm">I mailed you a style guide. Try to follow the colorsheme and layout spacing provided.</p>
    `;
};
