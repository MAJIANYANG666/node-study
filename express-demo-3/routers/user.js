const express = require("express")
const router = express.Router()

router.get('/', function (req, res){
  res.send('/users')
})

router.get('/:id', function (req, res){
  res.send('/users/:id')
})

router.get('/:id/edit', function (req, res){
  res.send('/users/:id/edit')
})

module.exports = router