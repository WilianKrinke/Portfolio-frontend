const decryptLendDatas = require("../decryptServices/decryptLendDatas");
const registerIntoFavorites = require("./registerIntoFavorites");

async function addFavoritesAction(favoriteDataC){
    const favoriteDatas = decryptLendDatas(favoriteDataC)
    const isRegisterFavorites = await registerIntoFavorites(favoriteDatas)
    return isRegisterFavorites;   
}

module.exports = addFavoritesAction;