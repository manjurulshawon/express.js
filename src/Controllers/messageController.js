const express = require('express')
const messageRead= async (req,res)=>{
  res.send('get message')
}
const messageCreate= async (req,res)=>{
  res.send('create message')
}
const messageUpdate= async (req,res)=>{
  res.send('update massage')
}
const messageDelete= async (req,res)=>{
  res.send('delete message')
}


module.exports={
    messageRead,
    messageCreate,
    messageUpdate,messageDelete
}