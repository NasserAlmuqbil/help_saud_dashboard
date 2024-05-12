// Node.js example using Firebase Admin SDK
const admin = require('firebase-admin');
const serviceAccount = {
    "type": "service_account",
    "project_id": "odeldatabase",
    "private_key_id": "f530786b29becfcccaeac866134d255cd5396bce",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCcP6V5Q69TiG18\nrIHDdPvaAJWXsAjsRfA5YwnmVd/FiqBhQdk45wpkR9PjVMkIG+NamEyP7FkT9YCI\nD+4fxjlRUgxIvFnoX38IH0ASIg4hT9QHEnIUdQPP5FkgeeXNAFM6JtjPIyxk1Ese\ntmW/4rziHlFZCjyc3KkBoqYrKUJDxaBOKgRy4UUbunV7+SwZY9VdixsoEyZ2w3Nt\nQrq2yx5xC2jFIIQYWzAOh7vbXIkp9LXtzl1b2X7zPYphN5TBpaTKr8X5UdZMu4+g\nps2GFPigBWTn6HMfrAmB6owEYIt7sn8a4QQYBmphpd+M0LcBLJJFsQdzi4Y9Kgkz\n9T9+KFW7AgMBAAECggEAA4Oi8yFEljphTAaNPJoq9/I/axP4f2frST8i/906lTTS\n+p0Ch7cakrrS1zAW/WmzKVx3jF0ie8Jvy5+gGXLZ4yxXPmOOGh3bu5EIXeAKNVGY\nUThm/HLNTSWzo3laY8v4EzzAb5g47WOg9OXhT/mHigZoifoi9tw3qOPBnQLmjKOi\nPlE62BIOqY93VNqDrRof791KrwDKf/ErS3BitWYGpOWZgAhPag7guy8LUx7q16T3\nu2vZ9eOjG5rJzRN5gT01F9XwZFBn8gzSGWo3XcVw3Qpo2TXDcvh0e5HBX7kVfU5s\nNpXAbjPNYmIHyqQ2lVqz5PwFsIj1gFJ7oFvN5bcwEQKBgQDUDFeYki6jdTpCzckL\npKzCJtQOPeHlCPzuc5i2Py6Z5fdXVXJA8rt4qY6ro93S70tv2g10dqqj5tw2zVMr\nyvql3L7G9338AYG/IpJwLBhJLt2KzDcBX4cEtg1gp5QtVnj9KNOtStTm2nQKlHSQ\nBxxVr9LbFMTsgrODMzbd07fhLQKBgQC8onpWz4VZHqm5vuNE/qY4utf0M5NLuNyJ\nCbKs+LMWnnzmbaEoryAZr1h/V2jVvaWPpg/d0zDEQTIwhLwEG10he9R5O1mJ+c/Y\ncNNGFLkwOg146kM39lk3gX0ixOzO97yLJilMY46tLa3OmeD55Vid5h8C8DRbrUQq\ngKs7iktThwKBgEOFzpr56boJSU0ehGedv5lvjdUfJYCuVQSFcNqP0gIVtaZswh4m\nbUYmEBVd7/QMWSQ79k7gvsPEbtlQlqx6TUhlu6ZWBxspS6yWkLUBhZZAQzHAh797\nMN5yLl5Z3ph1Ub+jsYwcKSF97Le1wExgx0gN3gH/YhnCIPGlbFJE6efdAoGBAI8v\nujO5NJyQhP9E4dkWf3Bii9iHadC501WGcgWQhsitp1t2bjWmsXQtwLxwylgsq8bd\no/+a9tKSNpnTt7BaYRgwmfkoTvBIGzhNdGInCueLuXxGPp31NoXGmglRd/wm2wy4\n+/JLRBs6qEtCTR8Ds3+wFWwyj1vjqvGkV9ZLRKBzAoGBAMRnA7YqRtR6cTmUwfmv\nbM/zafCM2QjNS3krEqBVVyGaxMfOeyT6jhpqPTxni/n2mX0CNd5hlK+Ch/siuheS\nNfSHHK1RJMyOyWHRNY6rTZ06/B0QI2+xwF7osJ9vyQ0YiuNF0Qp4XrIu4tYfha/D\noqZFj3942V4grQLHNwX4mlDU\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-qk15z@odeldatabase.iam.gserviceaccount.com",
    "client_id": "107378361354400631590",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qk15z%40odeldatabase.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"  
};

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