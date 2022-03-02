import { signOut, getAuth } from "firebase/auth";

export async function logoutFirebaseUser(): Promise<
  [{ success: true } | null, any]
> {
  console.log("sigining out of firebase...");
  try {
    await signOut(getAuth());
    console.log("success.");
    return [{ success: true }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to sign out from firebase auth.",
      error
    );
    return [null, error];
  }
}
