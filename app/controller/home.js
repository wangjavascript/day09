'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx,service
    } = this;
    let data =  await service.home.data()
    ctx.body = data;
  }
  async list() {
    const { ctx,service } = this;
    console.log(ctx.params,'---params')
    let { pagenum=1,limit=3 } =ctx.params
    let firstIndex= (pagenum-1)*limit
    let data =  await service.home.list(firstIndex,limit)
    ctx.body = data
  }
}

module.exports = HomeController;