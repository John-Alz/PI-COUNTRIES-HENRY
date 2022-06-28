const { Country, Activity } = require("../db");

async function newAct(req, res) {
  const { name, difficulty, duration, season, countries } = req.body;
  if (!name || !difficulty || !duration || !season || !countries)
    res.status(400).json({ msg: "Faltan datos" });
  try {
    let newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    for (let country of countries) {
      const findCountry = await Country.findOne({
        where: { name: country },
      });

      if (!findCountry) {
        return res.status(400).send("pais no encontrado");
      }

      await newActivity.addCountry(findCountry);
      
      await findCountry.addActivity(newActivity);
    }
    res.status(201).json(newActivity);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { newAct };
