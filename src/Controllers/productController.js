const express = require('express')
const productRead= async (req,res)=>{
  res.send('get product')
}
const productCreate= async (req,res)=>{
  res.send('create comment')
}
const productUpdate= async (req,res)=>{
  res.send('update product')
}
const productDelete= async (req,res)=>{
  res.send('delete product')
}


module.exports={
    productRead,
    productCreate,
    productUpdate,productDelete
}