// ------------------------------------------- //
// module imports
import { db } from "./database";
import { CollectionReference, DocumentData, collection, addDoc } from "firebase/firestore";
// ------------------------------------------- //

let usersRef: CollectionReference<DocumentData> = collection(db, "users");

export type User = {
    userId: string;
    username: string;
};

export const createUser = async (data: User): Promise<void> => {
    await addDoc(usersRef, data);
};

export const getUser = async (userId: string): Promise<any> => {};
