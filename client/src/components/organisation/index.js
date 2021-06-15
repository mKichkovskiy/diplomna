import './organisation.css'
import { Row, FormControl, InputGroup } from "react-bootstrap"
import { useContext } from 'react'
import {Context} from '../../index'
import OrganisationItem from './organisationItem'
import { observer } from 'mobx-react-lite'

 const  Organisation = observer(() => {
  const {job} = useContext(Context)
    return (
        <div className='main-div'>
        <div className='cont'>
          <h1>Organisation</h1>
        <InputGroup size="sm" className="mb-5 mt-3 pl-3 pr-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row className='d-flex'>
            {
              job.organisations.map((organisation) =>
               < OrganisationItem key={organisation.id} organisation={organisation} />   
            )}
        </Row>
        </div>
        </div>
    )
})

export default Organisation