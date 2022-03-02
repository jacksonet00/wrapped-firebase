import {
  DocumentReference,
  DocumentData,
  DocumentSnapshot,
  getDoc,
} from "firebase/firestore";

export async function fetchFirestoreDocument(
  docRef: DocumentReference<DocumentData>
): Promise<[{ snapshot: DocumentSnapshot<DocumentData> } | null, any]> {
  try {
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      throw new Error("The requested document does not exist.");
    }
    return [{ snapshot }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to fetch a document from firestore.",
      docRef,
      error
    );
    return [null, error];
  }
}
