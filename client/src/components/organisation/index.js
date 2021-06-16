import './organisation.css'
import { Row, FormControl, InputGroup } from "react-bootstrap"
import { useContext, useEffect } from 'react'
import {Context} from '../../index'
import OrganisationItem from './organisationItem'
import { observer } from 'mobx-react-lite'
import { fetchOrg } from '../../http/organisationApi'

 const  Organisation = observer(() => {



  const {job} = useContext(Context)

  useEffect(
    () =>{
     fetchOrg().then(res => job.setOrganisation(res.rows)) 
    }
    ,[])

    return (
        <div className='main-div'>
        <div className='cont'>
          <h1>Organisation</h1>
        
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