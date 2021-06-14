

import {Col, Card, Image} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const OrganisationItem = ({organisation}) => {
    const history = useHistory()
    return (
        <Col mb={3} onClick={()=> history.push('/organisations/' + organisation.id)  }>
            <Card style={ {margin: '10px', width: 150, cursor: 'pointer'}} border={'primary'}>
                <Image height={150} width='145px' alt='' src={organisation.img} />
                <div className='mt-1 d-flex justify-content-center align-items-center'>
                    <div>{organisation.title}</div>
                </div>
            </Card>
        </Col>
    )
} 


export default OrganisationItem