const { Router } = require('express');
const { getAllCountries, getCountryById } = require('../controllers/country')

const router = Router();

router.get('/', getAllCountries );
router.get("/:id", getCountryById)


module.exports = router;