import { initializeApp } from 'firebase/app';
import { getDataConnect, connectDataConnectEmulator } from 'firebase/data-connect';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { connectorConfig } from '@dataconnect/generated';

const firebaseConfig = {
  apiKey: "fake-api-key-for-emulator",
  projectId: 'minseulkim-project-1',
};

const app = initializeApp(firebaseConfig);
export const authInstance = getAuth(app);

export const dataConnectInstance = getDataConnect(app, connectorConfig);

// Only connect to Emulators in development
if (import.meta.env.DEV) {
  connectDataConnectEmulator(dataConnectInstance, '127.0.0.1', 9399);
  connectAuthEmulator(authInstance, 'http://127.0.0.1:9099'); // Connect to Auth Emulator
}