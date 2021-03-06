const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')
const userService = require('./services/user')
const question_listService = require('./services/question_list')
const questionService = require('./services/question')
const scoreService = require('./services/score')
const cors = require('cors')
const app = express()

// import passport
const passport = require('passport')

// use the strategy
app.use(passport.initialize())
app.use(cors())
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// import config of passport
require('./config/passport/passport')

db.sequelize.sync({ force: false }).then(() => {
  userService(app, db);
  question_listService(app,db);
  questionService(app,db);
  scoreService(app,db);

  app.listen(8080, () => console.log("Server is running on port 8080"))
})