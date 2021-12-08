import express from 'express';
import promotionRouter from './routes/promotion';
import db from '../models';
import morgan from 'morgan';

const sequelize = db.sequelize;

const app = express();

require('dotenv').config();

app.set('port', process.env.PORT || 3000);
sequelize.sync({force: false})
    .then(() => {
        console.log('mysql 데이터베이스 연결 성공');
    })
    .catch((err) => {
        console.log(err);
    });

app.use(morgan('dev'));
app.use(express.json());

app.use('/promotion', promotionRouter);

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});//404

app.use((error, req, res, next) => {
    res.locals.message = error.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? error : {};
    res.status(error.status || 500);
    res.render('error');
});//500

app.listen(app.get('port'), () => console.log(`listening to ${app.get('port')}..`));
