import { newNoteForm } from "../lib/constants";
import { notEmpty } from "../lib/validation";

export const addNote = async (e: Event): Promise<void> => {
    e.preventDefault();

    let content: string = newNoteForm.content.value;

    if (notEmpty(content)) {
    }
};
