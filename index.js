var firebaseConfig = {
  apiKey: "AIzaSyACczkDDcLs3QP3hRiAv1mGutf89fO6OxA",
  authDomain: "web-auth-9e9e6.firebaseapp.com",
  projectId: "web-auth-9e9e6",
  storageBucket: "web-auth-9e9e6.appspot.com",
  messagingSenderId: "986820899985",
  appId: "1:986820899985:web:6ee2edee78f8514b3cbb30"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const database = firebase.database()
  

function validateEmail(email) {
  const expression = /^[^@]+@\w+(\.\w+)+\w$/;
  return expression.test(email);
}

function validateUsername(username) {
  const usernameRegex = /^[a-zA-Z0-9]+$/;
  return usernameRegex.test(username);
}

function validateField(field) {
  return field !== null && field.length > 0;
}

function validatePassword(password) {
  if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
  }

  const englishRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  if (!englishRegex.test(password)) {
      alert('Password can only contain English letters (uppercase and lowercase), numbers, and special characters.');
      return false;
  }

  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) {
      alert('Password must contain at least one uppercase letter.');
      return false;
  }

  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!specialCharacters.test(password)) {
      alert('Password must contain at least one special character.');
      return false;
  }

  return true;
}



function register() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;

  if (!validateField(username)) {
      alert('Please enter a username.');
      return;
  }

  if (!validateField(password)) {
    alert('Please enter password.');
    return;
}

  if (!validateUsername(username)) {
    alert('Username can only contain alphabets and numbers.');
    return;
  }

  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }
  if (!validatePassword(password)) {
      return;
  }
  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

  auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          var user = userCredential.user;
          var databaseRef = firebase.database().ref();
          var userData = {
              username: username,
              email: user.email,
              last_login: Date.now()
          };
          databaseRef.child('users/' + user.uid).set(userData);
          alert('Account created successfully!');
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
      });
}



function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!validateField(email)) {
    alert('Please enter a username.');
    return;
  }

  if (!validateField(password)) {
      alert('Please enter your password.');
      return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          var user = userCredential.user;
          alert('Login successful!');
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
      });
}


function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
      .then(function(result) {
          var token = result.credential.accessToken;
          var user = result.user;
          var databaseRef = firebase.database().ref();
          var userData = {
              email: user.email,
              full_name: user.displayName,
              last_login: Date.now()
          };
          databaseRef.child('users/' + user.uid).set(userData);
          alert('Google user signed in!');
      })
      .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          alert(errorMessage);
      });
}


function forgotPassword() {
  const email = document.getElementById('email').value;
  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  auth.sendPasswordResetEmail(email)
      .then(() => {
          alert('Password reset email sent. Please check your email inbox.');
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
      });
}
