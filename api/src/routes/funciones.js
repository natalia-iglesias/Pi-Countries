const axios = require('axios');
const {  Activity, Country } = require('../db')


const countryApi = async () => {
    try{
    const apiUrl =  await axios.get('https://restcountries.com/v3/all')
    const apiInfo = await apiUrl.data.map(el => {
        return {
            id: el.cca3.toLowerCase(),
            name: el.name.common ,
            img: el.flags[1],
            continent :el.continents[0],
            capital: el.capital ? el.capital[0] : "No tiene capital",
            subregion: el.subregion ? el.subregion : el.continents[0],
            area: el.area,
            population: el.population,
           
          
        };
       
    });
  
   return apiInfo
}catch(error){
    console.log(error)
}
}

const activityDb = async () => {
    try{
    const act = await Activity.findAll({
        include: Country,
       
    }) 
    return act;
}catch(error){
    console.log(error)
}
};

const countryDb = async () => {
    try {
        let paises = await countryApi();
        paises.forEach(el => {
            Country.findOrCreate({
                where: {
                    id: el.id,
                    name: el.name,
                    flag: el.img,
                    continent: el.continent,
                    capital: el.capital,
                    subregion: el.subregion,
                    area: el.area,
                    population: el.population,
                },
            });
        });
        const countrys = await Country.findAll({
            include: [Activity],
        });
        return countrys;
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
   countryDb,
   activityDb,

};