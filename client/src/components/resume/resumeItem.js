


import {Col, Card} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const ResumeItem = ({resume}) => {
    const history = useHistory()
    return (
        <Col mb={3} onClick={()=> history.push('/resumes/' + resume.id)}>
            <Card style={ {margin: '10px', width: 150, cursor: 'pointer'}} border={'primary'}>
                <div className='mt-1 d-flex justify-content-center align-items-center'>
                    <div style={{fontFamily: 'fantasy'}} >{resume.title}</div>
                </div>
                <div className='mt-1 d-flex justify-content-center align-items-center'>
                    <p className="font-weight-light">Location: {resume.location}</p>
                </div>
            </Card>
        </Col>
    )
}

export default ResumeItem