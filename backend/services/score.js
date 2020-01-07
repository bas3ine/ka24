const passport = require('passport')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

  module.exports = (app, db) => {
    app.post('/addscore', passport.authenticate('jwt', { session: false }),
    async function(req,res) {
      db.score.create({
          score:req.body.score,
          question_list_id:req.body.question_list_id,
          user_id:req.user.id
        })
        
        .then(() => {
          console.log('score created in db',req.body)
          res.status(200).send({ message: 'score was added' })
        })
        .catch(err => {
          console.error(err,"")
          res.status(400).send({ message: "ERROR" })
        })
      }
    )
    app.get('/showscore',passport.authenticate('jwt',{session:false}),
    function (req,res) {
      console.log(req.body,"req is")
      db.score.findAll({
        where:{question_list_id:req.body.question_list_id},
        include: [
          {
            model: db.user,
            attributes: ["nickName"]
          }],
      })
      .then((question)=>{
        console.log('Showing Question is',question.data,'success')
        res.status(200).send({ message: 'render question for play success',question})
      })
      .catch(err => {
        console.error(err,"error render")
        res.status(400).send({message:err})
      })
    }
    )
}
