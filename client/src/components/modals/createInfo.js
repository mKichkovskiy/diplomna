

import { Modal, Button, Form } from "react-bootstrap"

const CreateInfo = ({onHide, show}) => {
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
            <Form.Control  className='mt-2' type='text'
                placeholder='Full name'
            />
            <Form.Control  className='mt-2' type='text'
                placeholder='Birthday'
            />
            <Form.Control  className='mt-2' type='text'
                placeholder='phone'
            />
            <Form.Control  className='mt-2' type='text'
                placeholder='Location'
            />
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


export default CreateInfo