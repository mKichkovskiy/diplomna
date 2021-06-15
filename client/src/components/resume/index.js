import './resume.css'
import { InputGroup, FormControl, Row } from "react-bootstrap"
import { useContext } from 'react'

import {Context} from '../../index'
import ResumeItem from './resumeItem'
import { observer } from 'mobx-react-lite'

 const Resume = observer(() => {

    const {job} = useContext(Context)
    return (
        <div className='main-div'>
        <div className='cont'>
          <h1>Resumes</h1>
        <InputGroup size="sm" className="mb-5 mt-3 pl-3 pr-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <Row>
                {
                  job.resumes.map( (resume) => < ResumeItem key={resume.id} resume={resume} />   )
                }
            </Row>
        </div>
        </div>
    )
})


export default Resume