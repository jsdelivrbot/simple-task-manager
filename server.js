const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

dotenv.config();

const app = express();

app.set('port', (process.env.PORT || 5000));

// Compression
app.use(compression());

// CORS Middleware
app.use(cors());

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
