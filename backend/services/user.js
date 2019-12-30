const passport = require('passport')
const jwt = require('jsonwebtoken')
const jwtOptions = require('../config/passport/passport')

module.exports = (app, db) => {
  app.post('/registerUser', (req, res, next) => {
    passport.authenticate('register', (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message,"------0-0-")
        res.status(403).send({message:info.message})
      } else {
        user.update({
          nickName:req.body.nickName,
          email: req.body.email,
          role: "user"
        })
          .then(() => {
            console.log('user created in db')
            res.status(200).send({ message: 'user created' })
          })
          .catch(err => {
            console.error(err,"123123123")
            res.status(400).send({ message: err.message })
          })
      }
    })(req, res, next)
  })

  app.post('/loginUser', (req, res, next) => {
    passport.authenticate('login', (err, user, info) => {
      if (err) {
        console.error(err)
      }
      if (info !== undefined) {
        console.error(info.message)
        if(info.message ==="username or password is incorrect."){
          res.status(401).send({message: info.message })
        } else {
          // info.message is Missing creatential
          res.status(400).send({message:"please input username and password."}) 
        }
      } else {
        const token = jwt.sign({ id: user.id, role: user.role, email: user.email,nickName:user.nickName },
          jwtOptions.secretOrKey, { expiresIn: 3600 })
        res.status(200).send({
          auth: true,
          token,
          message: 'user found & logged in',
          user
        })
      }
    })(req, res, next)
  })

  app.get('/protected-route', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      res.status(200).send(req.user)
    }
  )
}