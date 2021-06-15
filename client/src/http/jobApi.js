import {  $authHost, $host } from ".";

export const createJob = async(title, salary, category, desc, location) =>{
    const {data} = await $authHost.post('api/organisation/postjob', {title, salary, category, desc, location})
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


