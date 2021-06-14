import './organisation.css'
import { Card, Button, FormControl, InputGroup } from "react-bootstrap"

export default function Organisation() {
    return (
        <div className='main-div'>
        <div className='cont'>
        <InputGroup size="sm" className="mb-5 mt-3 pl-3 pr-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        </div>
    )
}