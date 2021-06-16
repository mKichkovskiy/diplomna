import {  $authHost } from ".";

export const createProfile = async(elem) =>{
    const {data} = await $authHost.post('api/profile/', elem, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    return data
}


export const fetchProfileOne = async(id) =>{
    const {data} = await $authHost.get('api/profile/' + id)
    return data
}


export const deleteProfile = async(id) =>{
    const {data} = await $authHost.delete('api/profile/' + id,  {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    return data
}



