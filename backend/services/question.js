const passport = require('passport')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

  module.exports = (app, db) => {
    app.post('/addquestion', passport.authenticate('jwt', { session: false }),
    function(req,res) {
      console.log(req.body)
        db.question.create({
          ch1:req.body.ch1,
          ch2:req.body.ch2,
          ch3:req.body.ch3,
          ch4:req.body.ch4,
          answer:req.body.answer
        })
        .then(() => {
          console.log('question created in db',req.body)
          res.status(200).send({ message: 'user created' })
        })
        .catch(err => {
          console.error(err,"")
          res.status(400).send({ message: "wrong syntax" })
        })
      }
    )
}