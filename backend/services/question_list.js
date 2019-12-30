const passport = require('passport')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

  module.exports = (app, db) => {
    app.get('/showquestion', passport.authenticate('jwt', { session: false }),
      function (req, res) {
        db.question_list.findAll({
          include: [
            {
              model:db.user,
              attributes:["nickName"]}]
        })
          .then((result) => {
            let obj={}
            obj = {
              quouo: result
            }
            console.log(result.question_list,"result is")
            res.status(201).send(result)
          })
          .catch((err) => {
            console.error(err,"error is");
            res.status(400).send({ message: err.message })
          })
        // Lab 1
      }
    )
}