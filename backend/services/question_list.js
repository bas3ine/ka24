const passport = require('passport')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports = (app, db) => {
  app.get('/showquestion', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      db.question_list.findAll({
        include: [
          {
            model: db.user,
            attributes: ["nickName"]
          }]
      })
        .then((result) => {
          let obj = {}
          obj = {
            quouo: result
          }
          console.log(result.question_list, "result is")
          res.status(201).send(result)
        })
        .catch((err) => {
          console.error(err, "error is");
          res.status(400).send({ message: err.message })
        })
      // Lab 1
    }
  )

  app.post('/addquestionTopic', passport.authenticate('jwt', { session: false }),
    async function (req, res) {
      let result = await db.question_list.create({
        questionName: req.body.questionName,
        difficulty: req.body.difficulty,
        user_id: req.user.id,
      })
      db.question.create({
        question_list_id: result.id
      })
        .then(() => {
          console.log('update success', req.body)
          res.status(200).send({ message: 'question topic created' })
        })
        .catch((err) => {
          console.error(err, "")
          res.status(400).send({ message: "wrong syntax" })
        })
    }
  )

}