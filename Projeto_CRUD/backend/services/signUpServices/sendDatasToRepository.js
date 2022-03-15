const signUpRepository = require("../../repository/signUpRepository/signUpRepository.repository")

async function sendDatasToRepository(userDatas){ 
    const datas = {
        userName: userDatas.userName.toLowerCase(),
        email: userDatas.email,
        pass: userDatas.pass
    }    
    
    const wasRegister = await signUpRepository(datas)
    return wasRegister; 
}

module.exports = sendDatasToRepository;