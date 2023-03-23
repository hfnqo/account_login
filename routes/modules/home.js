const express = require('express')
const router = express.Router()
const Account = require('../../models/account')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  Account.findOne({ email: email, password: password })
    .lean()
    .then(account => {
      if (!account) res.render('error')
      
      res.render('welcome', { account })
    })
    .catch(error => console.log(error))
})

module.exports = router