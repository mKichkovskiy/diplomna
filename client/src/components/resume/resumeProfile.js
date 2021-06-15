


import {Row, Col, Container, Image, Badge } from 'react-bootstrap'
import BackButton from '../utils/backB'
import LocationIcon from '../../img/location.png'

export default function ResumeProfile(){

    const resume = {
        id: 1,
        title: 'Project manager',
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        category: 'It',
        desc: 'hellow sir',
        salary: '1000$',
        location: 'Lviv',
        employ_type: 'full-time'
    }

    return (
        <div className='main-div'>
            <Container className='jumbotron mt-2 d-flex justify-content-center align-items-center'>
            <Col md={3} className='d-flex justify-content-center align-items-center  '>
                    <Image alt='' className='rounded-circle'  width={200} height={200} src={resume.img} />
                    
                    <div  style={{display: 'flex', alignItems: 'center',  height: "50px", position: 'absolute', left: '10px', top: '190px'}}>
                        <Image alt='' src={LocationIcon} />
                        <p className='mt-4 text-primary'>{resume.location}</p>
                    </div>
                </Col>
                <Col md={8} >
                <div style={{position: 'absolute', top: '10px', right: '20px'}}>
                    <BackButton />
                </div>
                    <Row>
                    <h1>{resume.title}</h1>
                    <div className='d-flex align-items-center'>
                    <p className='text-success'></p>
                    </div>
                    <p className='text-muted'>Type: {resume.employ_type} </p>
                    <div style={{width: '20px'}}>
                    <Badge className='bg-primary'>Salary: {resume.salary}</Badge>
                    </div>
                    
                    <h3>Desc:</h3>
                    <hr ></hr>
                    <p>{resume.desc}</p>
                    </Row>
                    </Col>
            </Container>
        </div>
    )
}