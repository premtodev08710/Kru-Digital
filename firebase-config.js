// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js"; // ใช้เวอร์ชันล่าสุดหรือที่ต้องการ
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
// import { getAnalytics } from "firebase/analytics"; // ถ้าต้องการใช้ Analytics

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCq_MGUYJeLsCrxsNSrANAAFG3KuZKvF8", // **ระวัง: อย่าเปิดเผย API Key ใน public repository**
  authDomain: "school-7e137.firebaseapp.com",
  databaseURL: "https://school-7e137-default-rtdb.firebaseio.com",
  projectId: "school-7e137",
  storageBucket: "school-7e137.appspot.com", // แก้ไข storageBucket ให้ถูกต้อง
  messagingSenderId: "78922863421",
  appId: "1:78922863421:web:f90ed44cb88838dd6deb54",
  measurementId: "G-ERDZ2Q5BFZ" // ถ้ามี
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Initialize Realtime Database
// const analytics = getAnalytics(app); // ถ้าต้องการใช้ Analytics

export { db }; // ส่งออก 'db' เพื่อให้ไฟล์อื่นนำไปใช้