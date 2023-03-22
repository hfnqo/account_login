const Account = require('../account')
const accountList = require('../../users.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('running accountSeeder script...')

  Account.create(accountList)
    .then(() => {
      console.log('accountSeeder done!')
      db.close()
    })
    .catch(error => console.log(error))
})