const { Router } = require('express');
const { newAct } = require('../controllers/activity')

const router = Router();

router.post('/', newAct )  


module.exports = router;