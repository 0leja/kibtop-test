const Router = require('express')
const { Controller } = require('../controllers/Controller')


const router = new Router

router.get('/slider', Controller.getSlider)
router.get('/recommend', Controller.getRecGoods)
router.get('/news', Controller.getNewGoods)
router.get('/location', Controller.getCities)
router.get('/location/:cityId', Controller.getCityById)





module.exports = router