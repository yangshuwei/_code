import axios from 'axios';
export default (ctx)=> axios.create({
    baseURL: 'http://localhost:8081/',
    headers:{
        cookies:ctx.cookies.get('cookie')||''
    }
})