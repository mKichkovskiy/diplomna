

import { useEffect, useState } from 'react'
import {Col, Container, Badge} from 'react-bootstrap'
import BackButton from '../utils/backB'
import { useParams } from 'react-router'
import { fetchJobOne } from '../../http/jobApi'

export default function JobPage(){
    const [job, setInfo] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetchJobOne(id).then(res => setInfo(res) )
    },[])

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