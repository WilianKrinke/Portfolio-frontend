function getMyDatas(app) {
    app.route('/my-datas')
        .get(async (req, res) => {
            console.log('Chegou a requisição get')
        })
}

module.exports = getMyDatas