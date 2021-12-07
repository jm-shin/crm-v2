import express from 'express';
import indexRouter from './routes/index.js';
import db from '../models';
import morgan from 'morgan';

const sequelize = db.sequelize;

const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || 3000);
sequelize.sync({force: true})
    .then(() => {
        console.log('mysql 데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(morgan('dev'));
app.use(express.json());

app.use('/', indexRouter);

app.use((req, res, next) => {
    res.sendStatus(404);
});//404

app.use((error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});//500

app.listen(app.get('port'), () => console.log(`listening to ${app.get('port')}..`));
