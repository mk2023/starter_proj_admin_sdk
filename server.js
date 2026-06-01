import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from 'firebase-admin/app';
import { getDataConnect } from 'firebase-admin/data-connect';

// ES Modules don't have built-in __dirname, so we define it like this:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Point explicitly to your local running emulator port
process.env.DATA_CONNECT_EMULATOR_HOST = '127.0.0.1:9399';

initializeApp({ projectId: 'minseulkim-project-1' });
const dataConnect = getDataConnect({ serviceId: 'starterproject', location: 'us-east4' });

// Read your exact GraphQL file contents once at startup
const queriesPath = path.join(__dirname, 'dataconnect', 'default-connector','queries.graphql');
const graphqlFileContent = fs.readFileSync(queriesPath, 'utf8');

const app = express();
app.use(cors()); // Permits your local frontend to talk to this backend server
app.use(express.json());

// Helper function to run operations by name from your queries file
async function runGraphql(operationName, variables = {}) {
  return dataConnect.executeGraphql(graphqlFileContent, {
    operationName: operationName,
    variables: variables
  });
}

// Getting all the information and displaying it on the dashboard
app.get('/api/dashboard', async (req, res) => {
  try {
    const result = await runGraphql('GetAllRunsAndRestaurants');
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Adding a new run entry
app.post('/api/runs', async (req, res) => {
  const { date, distanceMiles, durationMinutes } = req.body;
  try {
    const result = await runGraphql('AddRun', { date, distanceMiles, durationMinutes });
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Adding a new restaurant entry
app.post('/api/restaurants', async (req, res) => {
    const { name, address } = req.body;
    try {
      const result = await runGraphql('AddRestaurant', { name, cuisine, milesRequired: parseFloat(milesRequired) });
      res.json(result.data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Marking that the restaurant was visited 
app.post('/api/restaurants/visit', async (req, res) => {
  const { id } = req.body;
  try {
    const result = await runGraphql('MarkRestaurantVisited', { id });
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Marking that the restaurant was not visited (just in case you clicked the visited button by mistake)
app.post('/api/restaurants/unvisit', async (req, res) => {
  const { id } = req.body;
  try {
    const result = await runGraphql('UnmarkRestaurantVisited', { id });
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log('🚀 Admin SDK backend listening on port 3001!'));