const { Service } = require('egg')

class HomeService extends Service{
    async list(firstIndex,limit){
        return await this.app.mysql.query(`select * from orderlist limit ${firstIndex} ${limit}`)
    }
    async data(){
        return await this.app.mysql.query('select * from orderlist')
    }
}

module.exports = HomeService
