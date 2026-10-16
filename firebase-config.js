import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  addDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Cấu hình Firebase chính xác của dự án math-center-manager
const firebaseConfig = {
  apiKey: "AIzaSyBavNG5Zp_JPyi4pf6oCkIArLFsT9tp6eQ",
  authDomain: "math-center-manager.firebaseapp.com",
  projectId: "math-center-manager",
  storageBucket: "math-center-manager.firebasestorage.app",
  messagingSenderId: "266300132119",
  appId: "1:266300132119:web:392f9c7d3beae3c9b50552",
  measurementId: "G-6CHLY21WP3"
};

// Khởi tạo ứng dụng
const app = initializeApp(firebaseConfig);

// Khởi tạo các dịch vụ
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Thiết lập luôn cửa sổ chọn tài khoản Google
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { 
  signInWithPopup, 
  onAuthStateChanged, 
  signOut, 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  addDoc, 
  serverTimestamp, 
  ref, 
  uploadBytes, 
  getDownloadURL 
};