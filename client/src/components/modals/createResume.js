
import { useContext } from "react"
import { Modal, Button, Form, Dropdown } from "react-bootstrap"
import {Context} from '../../index'

const CreateResume = ( {show, onHide}) => {

    const {job} = useContext(Context)
    
    return (
        <>
           <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Create Resume
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>         
          <Form>
          <Form.Control className='mt-2' type='file'
                placeholder='Enter title'
            />
            <Form.Control className='mt-2'
                placeholder='Enter title'
            />
            <Form.Control className='mt-2'
                placeholder='Enter location'
            />
            <Form.Control  className='mt-2 mb-2'
                placeholder='Enter salary'
            />
   <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Desc</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Enter category</Dropdown.Toggle>
            <Dropdown.Menu>
              {
                job.categorys.map( (cat) =>
                  <Dropdown.Item key={cat.id} >{cat.title}</Dropdown.Item>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>Type of employment</Dropdown.Toggle>
            <Dropdown.Menu>
              {
                job.employments.map( (cat) =>
                  <Dropdown.Item key={cat.id} >{cat.title}</Dropdown.Item>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={onHide}>Create</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}


export default CreateResume