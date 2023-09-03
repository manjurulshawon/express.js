const express = require('express')
const serviceRead= async (req,res)=>{
  res.send('get service')
}
const serviceCreate= async (req,res)=>{
  res.send('create project')
}
const serviceUpdate= async (req,res)=>{
  res.send('update service')
}
const serviceDelete= async (req,res)=>{
  res.send('delete project')
}


module.exports={
    serviceRead,
    serviceCreate,
    serviceDelete,serviceUpdate
}