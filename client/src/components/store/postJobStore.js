import {makeAutoObservable} from 'mobx'

export default class JobStore {
    constructor(){
        this._jobs = []
        this._categorys = [
            {
                id: 1,
                title: 'Accounting & auditing'
            },
            {
                id: 2,
                title: 'IT, computers & Internet'
            },
            {
                id: 3,
                title: 'Hotels, restaurants & tourism'
            },
            {
                id: 4,
                title: 'Medicine & pharmaceuticals'
            },
            {
                id: 5,
                title: 'Transportation & auto industry'
            },
        ]

        this._organisation = []

        this._resumes = [] 

        this._employment = [
            {
                id: 1,
                title: 'Full-time'
            },
            {
                id: 2,
                title: 'Part-time'
            },
            {
                id: 3,
                title: 'Temporary'
            },
            {
                id: 4,
                title: 'Seasonal'
            },
            {
                id: 5,
                title: 'Freelance'
            },
            {
                id: 6,
                title: 'Consultants'
            },
            {
                id: 7,
                title: 'Temporary workers'
            },
        ]

        this._selectedCategory = {}
        makeAutoObservable(this)
    }



    setJobs(jobs){
        this._jobs = jobs
    }

    get jobs(){
        return this._jobs
    }


    setEmployments(employment){
        this._jobs = employment
    }

    get employments(){
        return this._employment
    }


    setResumes(resumes){
        this._resumes = resumes
    }

    get resumes(){
        return this._resumes
    }


    setOrganisation(org){
        this._organisation = org
    }

    get organisations(){
        return this._organisation
    }

    setSelectedCategory(category){
        this._selectedCategory = category
    }

    get selectedCategory(){
        return this._selectedCategory
    }
    
    setCategorys(categorys){
        this._categorys = categorys
    }

    get categorys(){
        return this._categorys
    }
}
