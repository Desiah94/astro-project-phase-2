import firebase from 'firebase/app';
 // Import only the base Firebase module

// Add any additional Firebase services you need
import 'firebase/auth'; // Import Firebase Authentication module

const firebaseConfig = {
  // Your Firebase config here
};

// Initialize Firebase if it hasn't already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase; // Export the initialized Firebase instance
