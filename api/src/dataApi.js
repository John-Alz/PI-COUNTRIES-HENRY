const  axios  = require("axios");
const { Country } = require('./db');

const dataApi = async () => {
    try {
        const info = await axios('https://restcountries.com/v3/all')
        info.data.map(async(pais) => {
            await Country.findOrCreate({
                where: {
                    id: pais.cca3,
                    name: pais.name.common,
                    flag: pais.flags[1],
                    continent: pais.region,
                    capital: pais.capital ? pais.capital[0] : "no have capital",
                    subregion: pais.subregion ? pais.subregion : "no have subregion",
                    area: pais.area,
                    population: pais.population
                }
            })
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports ={ dataApi }