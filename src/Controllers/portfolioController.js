const express = require('express')
const portfolioRead= async (req,res)=>{
  res.send('get portfolio')
}
const portfolioCreate= async (req,res)=>{
  res.send('create portfolio')
}
const portfolioUpdate= async (req,res)=>{
  res.send('update portfolio')
}
const portfolioDelete= async (req,res)=>{
  res.send('delete portfolio')
}


module.exports={
    portfolioRead,
    portfolioCreate,
    portfolioUpdate,portfolioDelete
}