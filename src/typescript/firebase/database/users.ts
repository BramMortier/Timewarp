// ------------------------------------------- //
// module imports
import { db } from "./database";
import { setDoc, doc, Timestamp, getDoc } from "firebase/firestore";
// ------------------------------------------- //

export type User = {
    userId: string;
    username: string;
    createdAt: Timestamp;
};

export const createUser = async (data: User): Promise<void> => {
    await setDoc(doc(db, "users", data.userId), {
        username: data.username,
        createdAt: data.createdAt,
    });
};

export const getUser = async (userId: string): Promise<any> => {
    return await getDoc(doc(db, "users", userId));
};
