import { createComment } from "../firebase/database/comments";
import { notEmpty } from "../lib/validation";

export const addComment = async (e: Event): Promise<void> => {
    e.preventDefault();

    const targetForm = e.target as HTMLFormElement;
    const content: string = targetForm.content.value;

    if (notEmpty(content)) {
        createComment({
            author: sessionStorage.getItem("username") as string,
            content: content,
            projectId: sessionStorage.getItem("currentProjectId") as string,
        });
    }
};
