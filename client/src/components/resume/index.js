import './resume.css'
import {Container, InputGroup, FormControl, Row } from "react-bootstrap"
import { useContext, useEffect } from 'react'

import {Context} from '../../index'
import ResumeItem from './resumeItem'
import { observer } from 'mobx-react-lite'
import { fetchRes } from '../../http/resumeApi'


 const Resume = observer(() => {

  

    const {job} = useContext(Context)


    useEffect(
      () => {
        fetchRes().then(res => job.setResumes(res.rows))
      }
    ,[])


    return (
        <div className='main-div'>
        <Container className='jumbotron  d-flex  flex-column'>
          <h1>Resumes</h1>
            <Row>
                {
                  job.resumes.map( (resume) => < ResumeItem key={resume.id} resume={resume} />   )
                }
            </Row>
          </Container>
        </div>
    )
})


export default Resume