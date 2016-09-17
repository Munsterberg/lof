import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';

import indexRouter from './routes/index';

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(morgan('dev'));

app.use('/', indexRouter);

app.use((err, req, res, next) => {
  console.log('unhandled application error: ', err);
  res.status(500).send(err);
});

export default app;
