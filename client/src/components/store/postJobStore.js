import {makeAutoObservable} from 'mobx'

export default class JobStore {
    constructor(){
        this._jobs = [
            {
                id: 1,
                category: 'it',
                title: 'junior react dev',
                des: 'ssssadwdq',
                salary: '400$',
                location: 'Uzhgorod',
            },
            {
                id: 2,
                category: 'it',
                title: 'junior react dev',
                des: 'ssssadwdq',
                salary: '300$',
                location: 'Uzhgorod',
            },
            {
                id: 3,
                category: 'it',
                title: 'junior react dev',
                des: 'ssssadwdq',
                salary: '340$',
                location: 'Uzhgorod',
            }
        ]
        makeAutoObservable(this)
    }



    setJobs(jobs){
        this._jobs = jobs
    }

    get jobs(){
        return this._jobs
    }
}