const { Router } = require('express');
const {countryDb, activityDb} = require('./funciones')
const {Activity, Country} = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async(req, res) => {
    const name = req.query.name;
  
    try {
        const allCountries = await countryDb();
		if (name) {
			const founds = allCountries.filter(el =>
				el.name.toLowerCase().includes(name.toLowerCase())
			);
			founds.length
				? res.status(200).json(founds)
				: res.status(404).send("No matches found ");
		}
		res.status(200).json(allCountries);
    } catch (error) {
        
    }
   
});
router.get('/countries', (req,res) => {
    res.send('holaaa')
}); 

router.get('/countries/:id', async(req, res) => {
    const id = req.params.id;
    try {
        const countryFound = await Country.findAll({
            where: {id: id},
            include: [Activity],
        });
        res.status(200).json(countryFound);

    } catch (error) {
        console.log(error)
    }
   
})
router.get('/activity', async (req, res) => {
    const act = await activityDb();
    res.send(act)
     
 })

router.post('/activity', async (req, res) => {
    const {
        name,
        difficulty,
        duration,
        season,
        countries
    } = req.body;
    setTimeout(() => {
        console.log(req.body);
    }, 1000);
    try {
        const activityCreated = await Activity.create({
            name,
            difficulty,
            duration,
            season,
            countries: countries,
        });
        const countryDb = await Country.findAll({
            where: {name: countries},
        });
        activityCreated.addCountries(countryDb);
        res.send('Actividad creada')
    } catch (error) {
        console.log(error);
        res.status(400).send('problemas')
        }
    
});

module.exports = router;
