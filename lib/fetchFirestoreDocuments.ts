import {
  Query,
  DocumentData,
  QuerySnapshot,
  getDocs,
} from "firebase/firestore";

export async function fetchFirestoreDocuments(
  queryRef: Query<DocumentData>
): Promise<[{ snapshot: QuerySnapshot<DocumentData> } | null, any]> {
  try {
    const snapshot = await getDocs(queryRef);
    if (snapshot.docs.length === 0) {
      throw new Error("No documents match this query");
    }
    return [{ snapshot }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to fetch documents from firestore.",
      queryRef,
      error
    );
    return [null, error];
  }
}
