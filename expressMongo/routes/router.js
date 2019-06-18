const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
   // console.log('route');
    next()
})
router.get('/',(req,res)=>{
    res.send('Birds home page')
})
router.get('/about', function (req, res) {
    res.send('About birds')
})
module.exports = router
