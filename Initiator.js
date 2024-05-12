// Node.js example using Firebase Admin SDK
const admin = require('firebase-admin');
const serviceAccount= require('./odeldatabase-firebase-adminsdk-qk15z-f530786b29.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

function getAccessToken() {
  return admin.auth().createCustomToken(/* your user ID here */)
    .then((customToken) => {
      return customToken;
    })
    .catch((error) => {
      console.error('Error creating custom token:', error);
    });
}