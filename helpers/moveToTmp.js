const fs = require('fs')

var move = (req, callback)  => {
    const filePath = './tmp/' + req.sessao.userId + '/'
    try {
        fs.mkdirSync(filePath);
    } catch (err) {
        if (err.code !== 'EEXIST') throw callback(err)
    }
    let qqfile = req.files.qqfile
    qqfile.mv(filePath + qqfile.name, (err) => {
        if(err) return callback(err)
        else return callback()
    })
}

module.exports = move