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

        this._resumes = [
            {
                id: 1,
                title: 'Project manager',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                category: 'It',
                desc: 'hellow sir',
                salary: '1000$',
                location: 'Lviv',
                employ_type: 'full-time'
            },
            {
                id: 2,
                title: 'Project manager',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                category: 'It',
                desc: 'hellow sir',
                salary: '1000$',
                location: 'Lviv',
                employ_type: 'full-time'
            },
            {
                id: 3,
                title: 'Project manager',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                category: 'It',
                desc: 'hellow sir',
                salary: '1000$',
                location: 'Lviv',
                employ_type: 'full-time'
            },
            {
                id: 4,
                title: 'Project manager',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                category: 'It',
                desc: 'hellow sir',
                salary: '1000$',
                location: 'Lviv',
                employ_type: 'full-time'
            },
            {
                id: 5,
                title: 'Project manager',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                category: 'It',
                desc: 'hellow sir',
                salary: '1000$',
                location: 'Lviv',
                employ_type: 'full-time'
            },
            {
                id: 6,
                title: 'Project manager',
                img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                category: 'It',
                desc: 'hellow sir',
                salary: '1000$',
                location: 'Lviv',
                employ_type: 'full-time'
            },


        ]

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
