const { Country, Activity } = require('../db.js');
const { dataApi } = require('../dataApi.js');

async function getAllCountries(req, res) {
    await dataApi()
    const { name } = req.query
    const allCountries = await Country.findAll({
        include: Activity
    })

    if (name) {
        const byName = await allCountries.filter(i => i.name.toLowerCase().startsWith(name.toLowerCase()))
        byName.length ? res.json(byName) : res.status(404).send({ 'msg': 'Not found' })
    } else {
        res.json(allCountries)
    }
}

async function getCountryById(req, res) {
    const { id } = req.params
    if(!id) {
        res.status(400).json({msg: "falta id"})
    }
    try {
        const country = await Country.findByPk(id.toUpperCase(), {
            include: [{model: Activity}]
        })
        res.json(country)
    } catch (error) {
        res.status(404).send("no funciona")
    }
}

module.exports = { getAllCountries, getCountryById }