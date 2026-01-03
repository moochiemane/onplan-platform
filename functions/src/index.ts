import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

// Example HTTP callable function
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from OnPlan Firebase Functions!');
});

// Export additional functions here
// export * from './api';
// export * from './triggers';
