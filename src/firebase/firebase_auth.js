import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBjceRMFqtcGS4EZKY4yLARO1GDA_fd1Xk',
  authDomain: 'coder-ecommerce-bd9cf.firebaseapp.com',
  databaseURL: 'https://coder-ecommerce-bd9cf-default-rtdb.firebaseio.com',
  projectId: 'coder-ecommerce-bd9cf',
  storageBucket: 'coder-ecommerce-bd9cf.appspot.com',
  messagingSenderId: '931036461751',
  appId: '1:931036461751:web:a3cc46bbfe355f96972b32',
};

export const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
