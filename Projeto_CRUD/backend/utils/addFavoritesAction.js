const decryptLendDatas = require("./decryptLendDatas");

function addFavoritesAction(favoriteDataC){
    const favoriteDatas = decryptLendDatas(favoriteDataC)

    console.log(favoriteDatas)

    
}

module.exports = addFavoritesAction;