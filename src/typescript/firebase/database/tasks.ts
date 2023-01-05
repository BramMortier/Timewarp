// ------------------------------------------- //
// module imports
import {
    addDoc,
    collection,
    CollectionReference,
    DocumentData,
    DocumentSnapshot,
    getDoc,
    doc,
    onSnapshot,
    query,
    Query,
    QuerySnapshot,
    where,
} from "firebase/firestore";
import { renderNote } from "../../components/note";
import { renderTaskList } from "../../components/task";
import { db } from "./database";
// ------------------------------------------- //

export type Task = {
    projectId: string;
    taskname: string;
    description: string;
    progressLabel: string;
    notesCount: number;
    timeEstimate: string;
};

export type Note = {
    content: string;
};

export const createTask = async (data: Task): Promise<void> => {
    await addDoc(collection(db, "tasks"), data);
};

export const getTasks = async (id: string): Promise<void> => {
    const tasksRef: CollectionReference<DocumentData> = collection(db, "tasks");
    const stmt: Query<DocumentData> = query(tasksRef, where("projectId", "==", id));

    onSnapshot(stmt, (tasks: QuerySnapshot<DocumentData>): void => {
        renderTaskList(tasks);
    });
};

export const getTask = async (id: string): Promise<DocumentData> => {
    const snapshot: DocumentSnapshot<DocumentData> = await getDoc(doc(db, "tasks", id));
    return snapshot.data() as DocumentData;
};

export const createNote = async (id: string, data: Note): Promise<void> => {
    console.log("here");
    console.log(`tasks/${id}/notes`);
    await addDoc(collection(db, `tasks/${id}/notes`), data);
};

export const getTaskNotes = async (id: string): Promise<void> => {
    const notesRef = collection(db, `tasks/${id}/notes`);

    onSnapshot(notesRef, (notes) => {
        notes.forEach((note) => {
            renderNote(note.id, note.data());
        });
    });
};
