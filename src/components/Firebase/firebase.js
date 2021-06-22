
  import app from 'firebase/app';
  require('firebase/auth');

const config = {
  apiKey:'AIzaSyDIqkMOcjnSGVnVg2boXP46n-8tXC5klOQ',
  authDomain: '',
  databaseURL: 'https://webappreact-8a-default-rtdb.firebaseio.com',
  projectId: 'webappreact-8a',
  storageBucket: '',
  messagingSenderId: '',
};
 
class Firebase {
  constructor() {
         app.initializeApp(config);
         this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);

}
 
export default Firebase;
