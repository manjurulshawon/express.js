const express = require('express')
const projectRead= async (req,res)=>{
  res.send('get project')
}
const projectCreate= async (req,res)=>{
  res.send('create project')
}
const projectUpdate= async (req,res)=>{
  res.send('update project')
}
const projectDelete= async (req,res)=>{
  res.send('delete project')
}


module.exports={
    projectRead,
    projectCreate,
    projectUpdate,projectDelete
}