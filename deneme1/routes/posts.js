const express = require('express')
const router = express.Router()
const Post = require('../models/post')


  router.get('/new', (req,res)=>{
    res.render('site/addpost');
  })


  router.get('/:id', (req,res)=>{
    Post.findById(req.params.id).lean().then(post => {
      res.render('site/post', {post:post})
    })
  })

  router.post('/test', (req,res)=>{
    Post.create(req.body)
    res.redirect('/')
  })



module.exports = router