




import { Modal, Button, Form } from "react-bootstrap"

const CreateEdu = ({show, onHide}) => {
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
            <Form.Control 
                placeholder='enter'
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


export default CreateEdu