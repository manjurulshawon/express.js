const express = require('express')
const router = express.Router()
const {blogRead, blogCreate, blogUpdate, blogDelete} = require('../Controllers/blogController')
const { blogDetaiilsRead, blogDetailsCreate, blogDetailsUpdate, blogDetailsDelete } = require('../Controllers/blogDetailsController')
const { messageCreate,messageRead, messageUpdate, messageDelete } = require('../Controllers/messageController')
const { commentCreate,commentRead, commentUpdate, commentDelete,} = require('../Controllers/commentController')
const { portfolioRead, portfolioCreate, portfolioUpdate, portfolioDelete } = require('../Controllers/portfolioController')
const { productRead, productCreate, productUpdate, productDelete,} = require('../Controllers/productController')
const { profitRead, profitCreate, profitUpdate, profitDelete } = require('../Controllers/profitController')
const { projectRead, projectCreate, projectUpdate, projectDelete } = require('../Controllers/projectController')
const { serviceRead, serviceCreate, serviceUpdate, serviceDelete } = require('../Controllers/serviceController')
const { titleRead, titleCreate, titleUpdate, titleDelete } = require('../Controllers/titleController')


router.route('/blog')
    .get(blogRead)
    .post(blogCreate)
    .put(blogUpdate)
    .delete(blogDelete)
router.route('/blogDetails')
    .get(blogDetaiilsRead)
    .post(blogDetailsCreate)
    .put(blogDetailsUpdate)
    .delete(blogDetailsDelete)
router.route('/comment')
    .get(commentRead)
    .post(commentCreate)
    .put(commentUpdate)
    .delete(commentDelete)
router.route('/message')
  .get(messageRead)
  .post(messageCreate)
  .put(messageUpdate)
  .delete(messageDelete)
router.route('/portfolio')
   .get(portfolioRead)
   .post(portfolioCreate)
   .put(portfolioUpdate)
  .delete(portfolioDelete)

router.route('/product')
  .get(productRead)
  .post(productCreate)
  .put(productUpdate)
  .delete(productDelete)

  router.route('/profit')
  .get(profitRead)
  .post(profitCreate)
  .put(profitUpdate)
  .delete(profitDelete)

  router.route('/project')
  .get(projectRead)
  .post(projectCreate)
  .put(projectUpdate)
  .delete(projectDelete)

  router.route('/service')
  .get(serviceRead)
  .post(serviceCreate)
  .put(serviceUpdate)
  .delete(serviceDelete)

  router.route('/title')
  .get(titleRead)
  .post(titleCreate)
  .put(titleUpdate)
  .delete(titleDelete)




module.exports =router