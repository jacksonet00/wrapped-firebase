# wrapped-firebase

a small firebase library for improved error handling

### Installation

```bash
npm i wrapped-firebase
```

### Example

```ts
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { fetchFirestoreDocument } from "wrapped-firebase";

async function fetchUserData() {
  const ref = doc(getFirestore(), "users", getAuth().currentUser.uid!);
  const [res, error] = await fetchFirestoreDocument(ref);

  if (error) {
    // handle error
    return null;
  }
  
  return {
    id: res.snapshot.id,
    data: res.snapshot.data()
  };
}
```
