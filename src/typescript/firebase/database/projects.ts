// ------------------------------------------- //
// module imports
import { addDoc, collection, DocumentData, onSnapshot, QuerySnapshot, QueryDocumentSnapshot, Timestamp } from "firebase/firestore";
import { renderProjectCard } from "../../components/project";
import { projectsList } from "../../lib/constants";
import { db } from "./database";
// ------------------------------------------- //

export type Project = {
    title: string;
    deadline: Timestamp;
    description: string;
    members: string[];
    taskOverview: number[];
};

export const createProject = async (data: Project): Promise<void> => {
    await addDoc(collection(db, "projects"), data);
};

export const getProjects = async (): Promise<void> => {
    onSnapshot(collection(db, "projects"), (projects: QuerySnapshot<DocumentData>) => {
        projectsList.innerHTML = "";

        projects.forEach((project: QueryDocumentSnapshot<DocumentData>) => {
            renderProjectCard(project.id, project.data());
        });
    });
};
