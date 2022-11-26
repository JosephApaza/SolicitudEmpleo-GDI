const express = require('express');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const morgan = require('morgan');

const app = express();

const postulantesRoutes = require('./routes/postulantesRoutes');
const homeRoutes = require('./routes/homeRoutes');
const solicitudesRoutes = require('./routes/solicitudesRoutes');
//const hijosRoutes = require('./routes/hijosRoutes');

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: ' ',
    port: '3306',
    database: 'solicitudempleodb'
}, 'single'));
app.use(express.urlencoded({extended: false}));

app.use('/', homeRoutes);
app.use('/postulantes', postulantesRoutes);
app.use('/solicitudes', solicitudesRoutes);
//app.use('/hijos', hijosRoutes);

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

