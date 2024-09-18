const express = require('express');
const router = express.Router();

router.get('/category', (req,res)=>{
    // logic here
    console.log(`Category section`)
});

router.get('/category/:category', (req,res)=>{
    // logic here
    console.log(`Category - ${req.params.category}`)
});

export default router;