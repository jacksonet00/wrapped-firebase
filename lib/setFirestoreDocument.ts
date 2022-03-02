import { DocumentReference, DocumentData, setDoc } from "firebase/firestore";

export async function setFirestoreDocument<T>(
  docRef: DocumentReference<DocumentData>,
  docData: T,
  merge = false
): Promise<[{ success: true } | null, any]> {
  try {
    console.log(`setting ${typeof docData} document in firestore`);
    await setDoc(docRef, docData, { merge });
    console.log("success.");
    return [{ success: true }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to set a document in firestore.",
      docRef,
      error
    );
    return [null, error];
  }
}
