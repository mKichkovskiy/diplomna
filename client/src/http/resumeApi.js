import {  $authHost } from ".";

export const createRumes = async(elem) =>{
    const {data} = await $authHost.post('api/resume/', elem, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    return data
}


export const fetchRes = async() =>{
    const {data} = await $authHost.get('api/resume')
    return data
}

export const fetchResOne = async(id) =>{
    const {data} = await $authHost.get('api/resume/' + id)
    return data
}


export const deleteRes = async(id, token) =>{
    const {data} = await $authHost.delete('api/resume/' + id,  {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return data
}



