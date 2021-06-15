

import {Col, Container, Badge} from 'react-bootstrap'
import BackButton from '../utils/backB'


export default function JobPage(){
    const job = {
        id: 1,
        title: "reac dev",
        salary: '300$',
        location: 'Uzhgorod',
        desc: 'lorem10',
        category: "It"
    }

    return (
        <div className='main-div'>
            <Container className='jumbotron mt-5  rounded'>
                <Col md={4} className=''>
                    <h1>{job.title}</h1>
                </Col>
                <Col>
                    <h4>Category: {job.category}</h4>
                </Col>
                <Col className=''>
                    <p className='text-muted'>Location: {job.location}</p>
                    <div>
                    <Badge className='bg-primary'>Salary: {job.salary}</Badge>
                    </div>
                </Col>
                <hr ></hr>
                <Col>
                    <p>{job.desc}</p>
                </Col>
                <div style={{position: 'absolute', top: '330px', right: '420px'}}>
                < BackButton />
                </div>
                
            </Container>
        </div>
    )
}