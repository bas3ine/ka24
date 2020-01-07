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

  app.post('/createquestionTopic', passport.authenticate('jwt', { session: false }),
    async function (req, res) {
      db.question_list.create({
        user_id: req.user.id,
      })
        .then((result) => {
          // console.log('update success', result)
          res.status(201).send(result)
        })
        .catch((err) => {
          console.error(err, "")
          res.status(400).send({ message: "wrong syntax" })
        })
    }
    )
    app.put('/addquestionTopic',passport.authenticate('jwt',{session:false}),
    async function (req,res){
      let result = await db.question_list.findOne({
        where:{id:req.body.question_list_id},
      })
      if(!result) {
        res.status(404).send({ message: "bad request at create question" })
      } else {
        result.update({
          questionName: req.body.questionName,
          difficulty: req.body.difficulty,
        })
        res.status(201).send({ message: "create question success" })
      }
    }
    )

}

