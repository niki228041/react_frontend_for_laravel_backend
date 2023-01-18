import axios from "axios";

const http = axios.create({
    baseURL:"http://laravel.pv016plswork.com/",
    headers:{
        "Content-type":"application/json",
        'Accept':'application/json'
    }
});

export default http;