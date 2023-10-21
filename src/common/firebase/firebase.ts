import admin from 'firebase-admin';

// eslint-disable-next-line prettier/prettier, @typescript-eslint/no-var-requires
const serviceAccount = require('./shareit-10ca3-firebase-adminsdk-gg0zw-f3f63be501.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
