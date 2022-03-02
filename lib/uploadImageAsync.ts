import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function uploadImageAsync(
  phone: string,
  uri: string
): Promise<[{ downloadUrl: string } | null, any]> {
  try {
    console.log("converting image to blob...");
    const blob: any = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    console.log("success.");
    console.log("uploading blob to firebase storage...");
    if (!phone) {
      console.log("failure.");
      throw new Error("Phone number is null.");
    }
    const location = `users/${phone
      .replaceAll("+", "")
      .replaceAll("-", "")
      .replaceAll(" ", "")
      .trim()}`;
    const fileRef = ref(getStorage(), location);
    const result = await uploadBytes(fileRef, blob);
    console.log("success.");
    blob.close();

    const downloadUrl = await getDownloadURL(fileRef);
    return [{ downloadUrl }, null];
  } catch (error) {
    console.log(
      "ERROR: An error occurred while attempting to upload image to firebase storage.",
      error
    );
    return [null, error];
  }
}
