import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDdJ8rMQiJPgb31PcCc7NioEMxYtsVoAH8",
    authDomain: "my-task-manager-d82b9.firebaseapp.com",
    projectId: "my-task-manager-d82b9",
    storageBucket: "my-task-manager-d82b9.firebasestorage.app",
    messagingSenderId: "925992393547",
    appId: "1:925992393547:web:e6e095df1e13e859fba6ce"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export {db};