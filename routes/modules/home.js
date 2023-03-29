const express = require('express')
const router = express.Router()
const cookieParser = require('cookie-parser')

const Account = require('../../models/account')

router.use(cookieParser())

router.get('/', (req, res) => {
  const { userId } = req.cookies

  if (!userId) res.render('index')

  Account.findOne({_id: userId})
    .lean()
    .then(account => res.render('welcome', { account }))
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  
  if (!{ email, password }) return res.redirect('/')

  Account.findOne({ email, password })
    .lean()
    .then(account => {
      res.cookie('userId', account._id)
      res.render('welcome', { account })
    })
    .catch(error => console.log(error))
})

module.exports = router