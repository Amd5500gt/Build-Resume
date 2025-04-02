
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCqsrvr6SdL8_90hj8DGVoteero_22NSF0",
    authDomain: "resume-builder-eef45.firebaseapp.com",
    projectId: "resume-builder-eef45",
    storageBucket: "resume-builder-eef45.firebasestorage.app",
    messagingSenderId: "1015848700977",
    appId: "1:1015848700977:web:53f9e65c80700b9f539910",
    measurementId: "G-1245E00FHY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
