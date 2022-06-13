const mongoose = require('mongoose');

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db')
    


// Post.findByIdAndDelete('62a6e7bce23bc6ee16bc28d4', (error, post)=>{
//     console.log(error, post);
// })


//  Post.findByIdAndUpdate('62a6e7bce23bc6ee16bc28d4', {
//     title:'Benim 1. postum'
//  },(error, post)=>{
//     console.log(error, post);
// })



// Post.find({
// },(error, post)=>{
//     console.log(error, post);
// })



//  Post.create({
//      title:'İkinci post başlığım',
//      content:'İkinci Post içeriği , lorem ... text'

//  },(error, post)=>{
//      console.log(error, post);
//  })
