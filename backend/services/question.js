const passport = require('passport')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

  module.exports = (app, db) => {
    app.post('/addquestion', passport.authenticate('jwt', { session: false }),
    async function(req,res) {
      // let result = await db.question.create({
      //   question_list_id:
      // })
      db.question.create({
          ch1:req.body.ch1,
          ch2:req.body.ch2,
          ch3:req.body.ch3,
          ch4:req.body.ch4,
          answer:req.body.answer,
          question_list_id:req.body.question_list_id
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
    app.get('/playQuestion/:id',passport.authenticate('jwt',{session:false}),
    function (req,res) {
      db.question.findAll({
        where:{question_list_id:req.params.id},
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
