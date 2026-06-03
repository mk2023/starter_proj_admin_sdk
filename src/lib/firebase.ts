import { initializeApp } from 'firebase/app';
import { getDataConnect, connectDataConnectEmulator } from 'firebase/data-connect';

import { connectorConfig } from '@dataconnect/generated';

const firebaseConfig = {
  projectId: 'minseulkim-project-1',
};

const app = initializeApp(firebaseConfig);

export const dataConnectInstance = getDataConnect(app, connectorConfig);

// Automatically connect to emulator on localhost:9399
connectDataConnectEmulator(dataConnectInstance, '127.0.0.1', 9399);