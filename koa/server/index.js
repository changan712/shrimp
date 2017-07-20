const Koa = require ('koa');
const path  = require('path');

const content = require('./utils/content');
const mimes = require('./utils/mime'); 




const app = new Koa();

const staticPath = './static';

function parseMine(url){
    let extName = path.extname(url);
    extName = extName?extName.slice(1):'unknow';
    return mimes[extname];  

}

app.use(async (ctx)=>{
    let fullStaticPath = path.join(__dirname,staticPath);

    let _content = await content(ctx,fullStaticPath);
    let _mime = parseMine(ctx.url);  

    if(_mime){
        ctx.type = _mime;
    }

    // 输出静态资源内容
  if ( _mime && _mime.indexOf('image/') >= 0 ) {
    // 如果是图片，则用node原生res，输出二进制数据
    ctx.res.writeHead(200)
    ctx.res.write(_content, 'binary')
    ctx.res.end()
  } else {
    // 其他则输出文本
    ctx.body = _content
  }


})

app.listen(8080);