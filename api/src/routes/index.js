const { Router } = require('express');
const { countryDb, activityDb } = require('./funciones');
const { Activity, Country } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req, res) => {
  const name = req.query.name;

  try {
    const allCountries = await countryDb();
    if (name) {
      const founds = allCountries.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      founds.length
        ? res.status(200).json(founds)
        : res.status(404).send('No matches found ');
    }
    res.status(200).json(allCountries);
  } catch (error) {}
});


router.get('/countries/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const countryFound = await Country.findByPk(id,{
     
      include: [Activity],
    });
    console.log(countryFound)
    res.status(200).json(countryFound);
  } catch (error) {
    console.log(error);
  }
});
router.get('/activity', async (req, res) => {
  const act = await activityDb();
  res.send(act);
});

router.post('/activity', async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    const activityCreated = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    countries.forEach(async (c) => {
      let countryDb = await Country.findOne({
        where: {
          name: c,
        },
      });
      await activityCreated.addCountry(countryDb);
    });
    res.send('Actividad creada');
  } catch (error) {
    console.log(error);
    res.status(400).send('problemas');
  }
});

module.exports = router;
