import './main.css'
import React, {useContext} from 'react'
import {InputGroup, FormControl} from 'react-bootstrap'
import PosrJob from '../post_job'
import {Context} from '../../index'

export default function Main(){
  const {job} = useContext(Context)
    return (
      <div className='main-div'>
        <div className='cont'>
            <div style={{width: '500px'}}>
            <InputGroup size="sm" className="mb-5 mt-3 pl-3 pr-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            </div>
            <h3 style={{marginBottom: '20px'}} >Jobs</h3>
            {job.jobs.map( (job) => < PosrJob key={job.id} job={job} />  )}
        </div>
      </div>
    )
}