# wrapped-firebase
a small firebase library for improved error handling


### Example
```ts
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const ref = doc(getFirestore(), "users", getAuth().currentUser.uid!);
const [res, error] = await fetchFirestoreDocument(ref);

if (error) {
	// handle
} else {
	cache(res);
}
```