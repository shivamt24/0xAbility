const express = require('express')

const router = express.Router()

const {getMenu, createMenu, updateMenu, deleteMenu} = require('../controllers/menuController')

// This will be called in our server.js

//This is correct, but we can further clean the code by combining requests of same incoming routes.
// router.get('/', getMenu)
// router.post('/', createMenu)
// router.put('/:id', updateMenu)
// router.delete('/:id', deleteMenu)


// 
router.route('/').get(getMenu).post(createMenu) // Chained the requests going to the same route

router.route('/:id').put(updateMenu).delete(deleteMenu)

module.exports = router // Will export this router const