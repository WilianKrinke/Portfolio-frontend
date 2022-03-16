const lockDateIsPast = require("../services/userBlockedServices/lockDateIsPast")
const userIsBlocked = require("../repository/userBlockUserRepository/userIsBlocked")
const checkingLockDay = require("../services/userBlockedServices/checkingLockDay")
const removeLock = require("../repository/userBlockUserRepository/removeLock")
const daysToUnlock = require("../repository/userBlockUserRepository/daysToUnlock")

async function verifyUserBlockController(req, res, next) {
    try {
        const idUser = req.idUser               
        checkingLockDay(idUser)
        
        const isblock = await userIsBlocked(idUser)
        const daysToUnlockNumber = await daysToUnlock(idUser)
        
        if (isblock) {
            const lockDateIsPastTest = await lockDateIsPast(idUser)
            
            if (lockDateIsPastTest) {
                removeLock(idUser)
                res.status(200).send({
                    isBlock: false,
                    daysToUnlockNumber: 0
                })
                
            } else {
                res.status(200).send({
                    isBlock: true,
                    daysToUnlockNumber
                }) 
            }

        } else {
            res.status(200).send({
                isBlock: false,
                daysToUnlockNumber: 0
            })
        }
        
    } catch (error) {
        console.log(error.message)          
        res.status(500).send(error.message)
        next(error)
    }
}

module.exports = verifyUserBlockController;