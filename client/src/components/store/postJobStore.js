import {makeAutoObservable} from 'mobx'

export default class JobStore {
    constructor(){
        this._jobs = [
            {
                id: 1,
                category: 'it',
                title: ' react dev',
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
                location: 'Kyiv',
            },
            {
                id: 3,
                category: 'it',
                title: 'Java developer',
                des: 'ssssadwdq',
                salary: '340$',
                location: 'Uzhgorod',
            }
        ]
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

        this._organisation = [
            {
                id: 1,
                title: 'Samsung',
                type: 'hz',
                num_of_emp: 2000,
                desc: 'kewk',
                link: 'https://google.com',
                img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/9958/brand.gif?itok=0v06HKoT'
            },
            {
                id: 2,
                title: 'Apple',
                type: 'hz',
                num_of_emp: 2000,
                desc: 'kewk',
                link: 'https://google.com',
                img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/9958/brand.gif?itok=0v06HKoT'
            },
            {
                id: 3,
                title: 'Fifa',
                type: 'hz',
                num_of_emp: 2000,
                desc: 'kewk',
                link: 'https://google.com',
                img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/9958/brand.gif?itok=0v06HKoT'
            }
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
