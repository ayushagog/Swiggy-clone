// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';

const app = express();
const PORT = 5000;

// Required for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Serve /api/category
app.get('/api/category', async (req, res) => {
  const filePath = path.join(__dirname, 'public', 'data', 'category.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    res.json(JSON.parse(jsonData));
  } catch (err) {
    console.error('Error reading category.json:', err);
    res.status(500).send('Error reading JSON file');
  }
});

// Serve /api/restaurantChains
app.get('/api/restaurantChains', async (req, res) => {
  const filePath = path.join(__dirname, 'public', 'data', 'restaurantChains.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    res.json(JSON.parse(jsonData));
  } catch (err) {
    console.error('Error reading restaurantChains.json:', err);
    res.status(500).send('Error reading JSON file');
  }
});


// 404 handler
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
