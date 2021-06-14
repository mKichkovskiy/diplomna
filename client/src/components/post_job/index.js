

import { Card, Col } from "react-bootstrap"
import { useHistory } from "react-router"

export default function PosrJob({job}){
    const history = useHistory()
    
    return (
        <Col md={3} style={{cursor: 'pointer'}}  onClick={()=> history.push('/jobs/' + job.id)}>
            <Card style={{ width: '25rem', marginBottom: '20px' }}>
        <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-success">Category: {job.category}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">Location: {job.location}</Card.Subtitle>
        </Card.Body>
    </Card>
        </Col>
    )
}