import express from 'express';
import config from './config';
import serverRender from './renderers/server';

import { data } from './testData';
 
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent });
});

app.get('/data', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.listen(config.port, function listeHandler() {
  console.info(`Running on ${config.port}`);
});