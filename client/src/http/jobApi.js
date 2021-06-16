import {  $authHost } from ".";

export const createJobs = async(title, salary, category, desc, location, token) =>{
    const {data} = await $authHost.post('api/organisation/postjob', {title, salary, category, desc, location}, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return data
}


export const fetchJob = async() =>{
    const {data} = await $authHost.get('api/organisation/postjob/all')
    return data
}

export const fetchJobOne = async(id) =>{
    const {data} = await $authHost.get('api/organisation/postjob/' + id)
    return data
}


export const deleteJobs = async(id, token) =>{
    const {data} = await $authHost.delete('api/organisation/postjob/' + id,  {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    return data
}



