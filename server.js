// import packages and files
const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
//const routes = require('./controllers');
const sequelize = require('./config/connection');
const routes = ('./controllers/index.js');

//const SequelizeStore = require('connect-session-sequelize')(session.Store);


//setup port
const app = express();
const PORT = process.env.PORT || 3001;

//setup session
//const sess = {
//  secret: 'Super secret secret',
//  cookie: {},
//  resave: false,
//  saveUninitialized: true,
//  store: new SequelizeStore({
//    db: sequelize
//  })
// };

//set handlebars template engine 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//middleware
//app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(require('./controllers/'));

//setup api routes
//app.use(routes);

//initialize server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});

