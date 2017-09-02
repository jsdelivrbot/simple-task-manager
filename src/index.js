import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

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

app.use(express.static(path.join(__dirname, '/public')));

// views is directory for all template files
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('pages/index');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
