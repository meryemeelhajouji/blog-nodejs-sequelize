const express = require('express')
const router = express.Router()
const {  adminCategorie ,adminAddCategorie , Admindelete, adminUpdateCategorie} = require('../controllers/categorieController')
const { adminDashboard } = require('../controllers/dashboardController')
const { adminPosts, adminCreatePosts, adminGetPostById, adminUpdatePost } = require('../controllers/articleController')
const { adminUpdateRate } = require('../controllers/avisController')
const { adminUpdateComment } = require('../controllers/commentaireController')

router.get('/index', adminDashboard)
router.get('/posts', adminPosts)
router.get('/posts/add', adminCreatePosts)
router.get('/posts/details', adminGetPostById)
router.get('/posts/details/update-post', adminUpdatePost)
router.get('/posts/details/update-rate', adminUpdateRate)
router.get('/posts/details/update-comment', adminUpdateComment)
router.get('/categories', adminCategorie)
router.get('/categorie/add', adminAddCategorie)
router.get('/categorie/delete/:id', Admindelete)
router.get('/categorie/update/:id', adminUpdateCategorie)

// Router Delete Data : 
module.exports = router;