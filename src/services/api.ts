import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBn1YhbNP99SonazKLuI61yoqidVFBHXzo",
    authDomain: "iginite-challenge-02-appcomp.firebaseapp.com",
    databaseURL: "https://iginite-challenge-02-appcomp-default-rtdb.firebaseio.com",
    projectId: "iginite-challenge-02-appcomp",
    storageBucket: "iginite-challenge-02-appcomp.appspot.com",
    messagingSenderId: "408310621587",
    appId: "1:408310621587:web:3b2d1dbdcad763cd22b466",
    measurementId: "G-972BPH7F4D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

apiKey: "9YqmKgpPOreA5q2e6dvcDxoMZZ9pzQjiowd8Qb8V"


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://iginite-challenge-02-appcomp-default-rtdb.firebaseio.com"
});


*/