import './main.css'
import React, {useContext, useEffect} from 'react'
import {InputGroup, FormControl, Col, Row} from 'react-bootstrap'
import PosrJob from '../post_job'
import {Context} from '../../index'
import Categorys from '../category'
import { observer } from 'mobx-react-lite'
import { fetchJob } from '../../http/jobApi'

 const Main = observer(() => {
  const {job} = useContext(Context)
    useEffect(() => {
       fetchJob().then(res => job.setJobs(res.rows))
    } ,[])
    return (
      <div className='main-div'>
        <div className='cont'>
        <h3 style={{marginTop: '20px', textAlign: 'center'}} >Jobs</h3>
            
          <Row>
          {/* <Col md={3}>
              <Categorys />
            </Col> */}
            <Col md={4}>
            {job.jobs.map( (job) => < PosrJob key={job.id} job={job} />  )}
            </Col>
          </Row>
        </div>
      </div>
    )
})

export default Main