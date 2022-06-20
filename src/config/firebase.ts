import { firebaseConfig } from '@local/../keys/firebaseCredentials';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  getAnalytics(firebaseApp);
}
const auth = getAuth(firebaseApp);

export { auth };
