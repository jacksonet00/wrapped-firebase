import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  addDoc,
} from "firebase/firestore";

export async function addFirestoreDocument<T>(
  collectionRef: CollectionReference<DocumentData>,
  docData: T
): Promise<[{ snapshot: DocumentReference<DocumentData> } | null, any]> {
  try {
    const snapshot = await addDoc(collectionRef, docData);
    return [{ snapshot }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to set a document in firestore.",
      collectionRef,
      error
    );
    return [null, error];
  }
}
