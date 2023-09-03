const express = require('express')
const blogDetaiilsRead= async (req,res)=>{
  res.send('get blogdetails')
}
const blogDetailsCreate= async (req,res)=>{
  res.send('create blogdetails')
}
const blogDetailsUpdate= async (req,res)=>{
  res.send('update blogdetails')
}
const blogDetailsDelete= async (req,res)=>{
  res.send('delete blogdetails')
}


module.exports={
     blogDetaiilsRead,
    blogDetailsCreate,
    blogDetailsUpdate,blogDetailsDelete
}