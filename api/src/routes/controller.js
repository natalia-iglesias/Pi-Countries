const { countryDb} = require('./funciones');

const getCountries  = async (req, res) => {
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
    } catch (error) {
      console.log(error)
    }
  }
  module.exports = {
    getCountries
  }