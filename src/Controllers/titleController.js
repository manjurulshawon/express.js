const express = require('express')
const titleRead= async (req,res)=>{
  res.send('get title')
}
const titleCreate= async (req,res)=>{
  res.send('create project')
}
const titleUpdate= async (req,res)=>{
  res.send('update title')
}
const titleDelete= async (req,res)=>{
  res.send('delete title')
}


module.exports={
    titleRead,
    titleCreate,
    titleDelete,titleUpdate
}