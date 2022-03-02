import {
  PhoneAuthCredential,
  PhoneAuthProvider,
  signInWithCredential,
  getAuth,
} from "firebase/auth";

export async function verifySixDigitCode(
  verificationId: string,
  verificationCode: string
): Promise<[{ success: true } | null, any]> {
  console.log("sending verification code to firebase...");
  try {
    const credential: PhoneAuthCredential = PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    await signInWithCredential(getAuth(), credential);
    console.log("success.");
    return [{ success: true }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to sign in with verification code on firebase.",
      error
    );
    return [null, error];
  }
}
