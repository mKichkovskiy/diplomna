

import {Col, Container, Badge, Button} from 'react-bootstrap'
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
            <Container className='mt-5 bg-light rounded'>
                <Col md={4} className=''>
                    <h1>Title: {job.title}</h1>
                </Col>
                <Col>
                    <h2>Category: {job.category}</h2>
                </Col>
                <Col className=''>
                    <h3>Location: {job.location}</h3>
                    <div>
                    <Badge className='bg-primary'>Salary: {job.salary}</Badge>
                    </div>
                </Col>
                <Col>
                    <p>{job.desc}</p>
                </Col>
                < BackButton />
            </Container>
        </div>
    )
}