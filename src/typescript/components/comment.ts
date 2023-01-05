import { commentsList } from "../lib/constants";

export const renderComment = (id: string, data: any): void => {
    const commentEl: HTMLElement = document.createElement("li");
    commentEl.classList.add("comments__comment");
    commentEl.setAttribute("data-id", id);

    commentEl.innerHTML = `
        <div class="comments__comment-content">
            <div class="comments__comment-profile mb-sm">
                <div></div>
                <h4>${data.author}</h4>
            </div>
            <p class="text-subtle text-sm mb-sm">
                ${data.content}
            </p>
        </div>
        <ul class="comments__comment-replies">
    `;

    commentsList.appendChild(commentEl);

    const replyEl: HTMLElement = document.createElement("div");
    replyEl.classList.add("comments__comment-reply");

    replyEl.innerHTML = `
        <img src="/icons/reply.svg" alt="reply icon" />
        <span class="text-orange">Reply</span>
    `;

    replyEl.addEventListener("click", (e: Event): void => {
        const eventTarget = e.target as HTMLElement;
        const activeComment = eventTarget.parentElement?.parentElement as HTMLElement;
        renderReplyInput(activeComment);
    });

    commentEl.querySelector(".comments__comment-content")?.appendChild(replyEl);
};

export const renderReplyInput = (target: HTMLElement): void => {
    const replyFormEl = document.createElement("form");
    replyFormEl.classList.add("mt-sm");
    replyFormEl.id = "new-reply-form";

    replyFormEl.innerHTML = `
        <div class="form__control form__control--gap">
            <input type="text" class="form__input" placeholder="Reply" name="content" />
            <button type="submit" class="btn icon-btn icon-btn--primary icon-btn--large">
                <img src="/icons/arrow.svg" alt="arrow icon" />
            </button>
        </div>
    `;

    replyFormEl.addEventListener("submit", (e: Event): void => {
        console.log(e);
    });

    const replyInput = replyFormEl.children[0].children[0] as HTMLElement;

    replyInput.addEventListener("blur", (): void => {
        target.children[0].removeChild(replyFormEl);
    });

    target.children[0].appendChild(replyFormEl);
    replyInput.focus();
};
