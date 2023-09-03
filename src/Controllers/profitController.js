const express = require('express')
const profitRead= async (req,res)=>{
  res.send('get profit')
}
const profitCreate= async (req,res)=>{
  res.send('create profit')
}
const profitUpdate= async (req,res)=>{
  res.send('update profit')
}
const profitDelete= async (req,res)=>{
  res.send('delete profit')
}


module.exports={
    profitRead,
    profitCreate,
    profitUpdate,profitDelete
}