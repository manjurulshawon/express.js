const express = require('express')
const commentRead= async (req,res)=>{
  res.send('get comment')
}
const commentCreate= async (req,res)=>{
  res.send('create comment')
}
const commentUpdate= async (req,res)=>{
  res.send('update comment')
}
const commentDelete= async (req,res)=>{
  res.send('delete comment')
}


module.exports={
    commentRead,
    commentCreate,
    commentUpdate,commentDelete
}