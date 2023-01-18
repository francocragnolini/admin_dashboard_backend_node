const { Router } = require('express');
const {base} = require("../controllers/base");


const router = Router();


router.get('/', base);




module.exports = router;