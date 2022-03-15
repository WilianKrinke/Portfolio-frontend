require('dotenv').config()
const express = require('express');
const loggerWinston = require('./log/logs') 
const authValidate = require('./auth/authMiddleware');
const routeSignUpUser = require('./routes/signUpUser');
const routeUserLogin = require('./routes/userLogin.route');
const routeLendBook = require('./routes/lendBook');
const routeGetBooks = require('./routes/getBooks')
const routeGetUserName = require('./routes/getUserName')
const routeReturnBook = require('./routes/returnBook');
const routeAddFavorite = require('./routes/addFavorite');
const routeRemoveFavorite = require('./routes/removeFavorites');
const routeChangeRating = require('./routes/changeRating');
const routeForgotPass = require('./routes/forgotPass')
const routeVerifyTokenResetPass = require('./routes/verifyTokenResetPass')
const routeChangePass = require('./routes/changePass')
const routeGetMyBorrowedBooks = require('./routes/getMyBorrowedBooks')
const routeGetMyFavorites = require('./routes/getMyFavorites')
const routeGetMyDatas = require('./routes/getMyDatas')
const routeUpdateData = require('./routes/upDateData')
const routeAccessUserData = require('./routes/userAccessData')
const routeContactMessageIntern = require('./routes/contactMessage')
const routeIsUpDateDatas = require('./routes/isUpDateDatas')
const routeVerifyUserBlock = require('./routes/verifyUserBlock')
const sanitizationReqBody = require('./validations/sanitization');

const cors =  require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))

app.use(sanitizationReqBody)
routeUserLogin(app)
routeSignUpUser(app)
routeForgotPass(app)
routeVerifyTokenResetPass(app)
routeChangePass(app)

app.use(authValidate)
routeGetBooks(app)
routeGetUserName(app)
routeVerifyUserBlock(app)
routeLendBook(app)
routeReturnBook(app)
routeAddFavorite(app)
routeRemoveFavorite(app)
routeChangeRating(app)
routeGetMyBorrowedBooks(app)
routeGetMyFavorites(app)
routeGetMyDatas(app)
routeUpdateData(app)
routeIsUpDateDatas(app)
routeAccessUserData(app)
routeContactMessageIntern(app)

app.use((err, req, res, next) => {
    loggerWinston.error(`${req.method} | ${req.baseUrl}: ${err.message}`)
})

app.listen(process.env.EXPRESS_PORT, () => {
    console.log('Server On-Line')
})