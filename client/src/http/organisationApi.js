import {  $authHost } from ".";

export const createOrgs = async(elem) =>{
    const {data} = await $authHost.post('api/organisation/', elem, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    return data
}


export const fetchOrg = async() =>{
    const {data} = await $authHost.get('api/organisation')
    return data
}

export const fetchOrgOne = async(id) =>{
    const {data} = await $authHost.get('api/organisation/' + id)
    return data
}


export const deleteOrgs = async(id, token) =>{
    const {data} = await $authHost.delete('api/organisation/' + id,  {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return data
}



