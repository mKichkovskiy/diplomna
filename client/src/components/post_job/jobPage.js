

import { useEffect, useState, useContext } from 'react'
import {Col, Container, Badge, Button} from 'react-bootstrap'
import BackButton from '../utils/backB'
import { useParams, useHistory } from 'react-router'
import { deleteJobs, fetchJobOne } from '../../http/jobApi'
import {Context} from '../../index'
import { observer } from 'mobx-react-lite'

const JobPage = observer(() =>{
    const {user} = useContext(Context)
    const [job, setInfo] = useState({})
    const {id} = useParams()
    const history = useHistory()
    
    useEffect(() => {
        fetchJobOne(id).then(res => setInfo(res) )
    },[])
    const token = localStorage.getItem('token')
    const deleteJ = () =>{
        deleteJobs(id, token).then( res => {
            history.push('/')
            alert('Deleted!')
        })
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
                <div style={{position: 'absolute', top: '230px', right: '250px'}}>
                < BackButton />
                {
                    user.User.id !== job.userId ? (
                        <Button
                        className='ml-3 btn-lg'
                        disabled={true}
                >
                    Delete
                </Button>
                    ) : (
                        <Button
                        className='ml-3 btn-lg'
                        disabled={false}
                onClick={deleteJ}
                >
                    Delete
                </Button>
                    )
                }
                </div>
                
            </Container>
        </div>
    )
})


export default JobPage