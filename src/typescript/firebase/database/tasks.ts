// ------------------------------------------- //
// module imports
import { addDoc, collection, CollectionReference, DocumentData, onSnapshot, query, Query, QuerySnapshot, where } from "firebase/firestore";
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
