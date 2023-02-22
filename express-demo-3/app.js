const express = require('express');
const app = express();
const fn1 = require('./fn1')
app.set('case sensitive routing', true);
app.set('views', 'frank')
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')

app.locals.title = '我的个人网站'

app.use(express.json());
app.use(express.static('yyy'))
app.use(express.urlencoded())

// app.use(fn1)

app.get('/users/:id', (request, response, next) => {
  console.log('request.params')
  console.log(request.params)
  response.send('hi1')
  next()
})



app.get('/test', function(req, res) {
  res.render('test', {
    pageTitle: "方方"
  })
})

app.get('/test', function(req, res) {
  res.send('style.css')
})

app.post('/test', function(req, res) {
  res.send('post style.css')
})

app.put('/test', function(req, res) {
  res.send('put style.css')
})

app.delete('/test', function(req, res) {
  res.send('delete style.css')
})

app.get('/STYLE.css', function(req, res) {
  res.send('STYLE.css')
})
// app.use(function(req, res, next) {
//   console.log(req.body)
//   console.log(typeof req.body)

//   res.send('hi')
//   next();
// })

app.listen(3000, () => {
  console.log('listen 成功')
})