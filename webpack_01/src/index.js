import './index.css'
debugger

function aa(){
    if(process.env.NODE_ENV=="development"){
        console.group('我是开发环境')
    }else{
        console.log('我是线上环境')
    }
}
aa();