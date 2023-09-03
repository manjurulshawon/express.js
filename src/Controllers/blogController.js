const express = require('express')
const blogRead= async (req,res)=>{
  res.send('get blog')
}
const blogCreate= async (req,res)=>{
  res.send('create blog')
}
const blogUpdate= async (req,res)=>{
  res.send('update blog')
}
const blogDelete= async (req,res)=>{
  res.send('delete blog')
}


module.exports={
    blogRead,
    blogCreate,
    blogUpdate,blogDelete
}