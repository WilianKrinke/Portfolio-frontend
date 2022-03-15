const decryptLendDatas = require("../decryptServices/decryptLendDatas");
const registerIntoFavorites = require("../../repository/addFavoritesRepository/registerIntoFavorites");

async function addFavoritesService(favoriteDataC){
    const favoriteDatas = decryptLendDatas(favoriteDataC)
    const isRegisterFavorites = await registerIntoFavorites(favoriteDatas)
    return isRegisterFavorites;   
}

module.exports = addFavoritesService;