import { PhoneAuthProvider, getAuth } from "firebase/auth";
import React from "react";

export async function verifyPhoneNumber(
  phone: string,
  verificationRef: React.MutableRefObject<any>
): Promise<[{ verificationId: string } | null, any]> {
  try {
    console.log("sending phone number to firebase...");
    const phoneProvider = new PhoneAuthProvider(getAuth());
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phone,
      verificationRef.current
    );
    console.log("success.");
    return [
      {
        verificationId,
      },
      null,
    ];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while verifying phone number.",
      error
    );
    return [null, error];
  }
}
