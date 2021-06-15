
import { useContext, useState } from "react"
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap"
import {Context} from '../../index'

const CreateResume = ( {show, onHide}) => {


    const {job} = useContext(Context)
  
    const [Skill, setSkill] = useState([])
    const [Edu, setEdu] = useState([])
    const [Lang, setLang] = useState([])
    
    const addLag = () => {
        setLang([...Lang, {title: '', proficiency: ''  , number: Date.now()}])
    }

    const RemoveLag = (number) => {
      setLang(Lang.filter(e => e.number !== number))
  }

  const addEdu = () => {
    setEdu([...Edu, {name_univ: '' , speciality: '', level: '' , number: Date.now()}])
}

const RemoveEdu = (number) => {
  setEdu(Edu.filter(e => e.number !== number))
}

const addSkill = () => {
  setSkill([...Skill, {title: '', experience: '' , number: Date.now()}])
}

const RemoveSkill = (number) => {
setSkill(Skill.filter(e => e.number !== number))
}


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
          <Button
          variant='outline-success'
          onClick={addLag}
          >
            Add language
          </Button>
          <Button
          variant='outline-success'
          onClick={addEdu}
          >
            Add Education
          </Button>
          <Button
          variant='outline-success'
          onClick={addSkill}
          >
            Add Skill
          </Button>
          {
            Lang.map( e => 
              <Row className='mt-4' key={e.number}>
                <Col md={4}>
                  <Form.Control placeholder='title lang' />
                </Col>
                <Col md={4}>
                <Form.Control placeholder='profience lang' />
                </Col>
                <Col>
                  <Button onClick={() => RemoveLag(e.number) } variant='outline-danger'>Delete</Button>
                </Col>
              </Row>
              )
          }
         
          {
            Skill.map( e => 
              <Row className='mt-4' key={e.number}>
                <Col md={4}>
                  <Form.Control placeholder='title skill' />
                </Col>
                <Col md={4}>
                <Form.Control placeholder='expirience skill' />
                </Col>
                <Col>
                  <Button onClick={() => RemoveSkill(e.number) } variant='outline-danger'>Delete</Button>
                </Col>
              </Row>
              )
          }
         
          {
            Edu.map( e => 
              <Row className='mt-4' key={e.number}>
                <Col md={4}>
                  <Form.Control placeholder='name of univer' />
                </Col>
                <Col md={4}>
                <Form.Control placeholder='speciality' />
                </Col>
                <Col md={4}>
                <Form.Control placeholder='level' />
                </Col>
                <Col className='mt-2'>
                  <Button  onClick={() => RemoveEdu(e.number) } variant='outline-danger'>Delete</Button>
                </Col>
              </Row>
              )
          }
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