import './main.css'
import React, {useContext} from 'react'
import {InputGroup, FormControl, Col, Row} from 'react-bootstrap'
import PosrJob from '../post_job'
import {Context} from '../../index'
import Categorys from '../category'

export default function Main(){
  const {job} = useContext(Context)
    return (
      <div className='main-div'>
        <div className='cont'>
        <h3 style={{marginTop: '20px', textAlign: 'center'}} >Jobs</h3>
            <div style={{width: '500px'}}>
            <InputGroup size="sm" className="mb-5 mt-3 pl-3 pr-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            </div>
          <Row>
          <Col md={3}>
              <Categorys />
            </Col>
            <Col md={4}>
            {job.jobs.map( (job) => < PosrJob key={job.id} job={job} />  )}
            </Col>
          </Row>
        </div>
      </div>
    )
}