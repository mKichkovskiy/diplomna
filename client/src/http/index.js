
import axios from 'axios'


const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})


const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL

})


const authInterseptor = config => {
    config.headers.autorization = `Bearer ${localStorage.getItem('token')}`
    return config
}


$authHost.interceptors.request.use(authInterseptor)


export {
    $authHost,
    $host   
}