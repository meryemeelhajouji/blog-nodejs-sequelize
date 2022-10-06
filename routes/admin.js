const express = require('express')
const router = express.Router()
const {  adminCategorie ,adminAddCategorie , Admindelete, adminUpdateCategorie} = require('../controllers/categorieController')
const { adminDashboard } = require('../controllers/dashboardController')
const { adminPosts, adminCreatePosts, adminGetPostById, adminUpdatePost,adminDeletePost } = require('../controllers/articleController')
const { adminUpdateRate } = require('../controllers/avisController')
const { adminUpdateComment } = require('../controllers/commentaireController')

router.get('/index', adminDashboard)
router.get('/posts', adminPosts)
router.get('/posts/add', adminCreatePosts)
router.get('/posts/details/:id', adminGetPostById)
router.get('/posts/details/delete/:id', adminDeletePost)
router.get('/posts/details/update/:id', adminUpdatePost)
router.get('/posts/details/update-rate', adminUpdateRate)
router.get('/posts/details/update-comment', adminUpdateComment)
router.get('/categories', adminCategorie)
router.get('/categorie/add', adminAddCategorie)
router.get('/categorie/delete/:id', Admindelete)
router.get('/categorie/update/:id', adminUpdateCategorie)

// Router Delete Data : 
module.exports = router;