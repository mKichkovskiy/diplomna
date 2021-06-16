
import { observer } from "mobx-react-lite"
import { useContext, useState } from "react"
import { Modal, Button, Form, Dropdown, Row, Col } from "react-bootstrap"
import { createRumes } from "../../http/resumeApi"
import {Context} from '../../index'

const CreateResume = observer(( {show, onHide}) => {


    const {job} = useContext(Context)
  
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [salary, setSalary] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')


    const fileSet = (e) => {
      setFile(e.target.files[0])
    }



    const [Skill, setSkill] = useState([])
    const [Edu, setEdu] = useState([])
    const [Lang, setLang] = useState([])
    
    const addLag = () => {
        setLang([...Lang, {title: '', proficiency: ''  , number: Date.now()}])
    }

    const RemoveLag = (number) => {
      setLang(Lang.filter(e => e.number !== number))
  }

  const ChangeLag = (key, value, number) => {
      setLang(Lang.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const addEdu = () => {
    setEdu([...Edu, {name_univ: '' , speciality: '', level: '' , number: Date.now()}])
}

const RemoveEdu = (number) => {
  setEdu(Edu.filter(e => e.number !== number))
}

const ChangeEdu = (key, value, number) => {
  setEdu(Edu.map(i => i.number === number ? {...i, [key]: value} : i))
}

const addSkill = () => {
  setSkill([...Skill, {title: '', experience: '' , number: Date.now()}])
}

const RemoveSkill = (number) => {
setSkill(Skill.filter(e => e.number !== number))
}

const ChangeSkill = (key, value, number) => {
  setSkill(Skill.map(i => i.number === number ? {...i, [key]: value} : i))
}


const addResume = () => {
  const formDate = new FormData()
  formDate.append('img', file)
  formDate.append('title', title)
  formDate.append('location', location)
  formDate.append('salary', Number(salary))
  formDate.append('desc', desc)
  formDate.append('category', category)
  formDate.append('employ_type', type)
  formDate.append('skills', JSON.stringify(Skill))
  formDate.append('langs', JSON.stringify(Lang))
  formDate.append('edus', JSON.stringify(Edu))
  createRumes(formDate).then(data => {
    onHide()
    setCategory('')
    setType('')
    setDesc('')
    setEdu([])
    setSkill([])
    setLang([])
    setSalary(0)
    setFile(null)
    setTitle('')
    setLocation('')
    alert('Created!!')
  })
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
                placeholder='Enter file'
                onChange={fileSet}
            />
            <Form.Control className='mt-2'
                placeholder='Enter title'
                value={title}
                onChange={e => setTitle(e.target.value) }
            />
            <Form.Control className='mt-2'
                placeholder='Enter location'
                value={location}
                onChange={e => setLocation(e.target.value) }
            />
            <Form.Control  className='mt-2 mb-2'
                placeholder='Enter salary'
                type='number'
                value={salary}
                onChange={e => setSalary(e.target.value) }
            />
   <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Desc</Form.Label>
    <Form.Control as="textarea" value={desc} onChange={ e => setDesc(e.target.value) } rows={3} />
  </Form.Group>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>{ category  || 'Enter category'}</Dropdown.Toggle>
            <Dropdown.Menu >
              {
                job.categorys.map( (cat) =>
                  <Dropdown.Item onClick={() => setCategory(cat.title)} key={cat.id} >{cat.title}</Dropdown.Item>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-2 mb-2'>
            <Dropdown.Toggle>{ type  ||"Type of employment"}</Dropdown.Toggle>
            <Dropdown.Menu >
              {
                job.employments.map( (cat) =>
                  <Dropdown.Item onClick={() => setType(cat.title)} key={cat.id} >{cat.title}</Dropdown.Item>
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
            Lang.map( i => 
              <Row className='mt-4' key={i.number}>
                <Col md={4}>
                  <Form.Control value={i.title} 
                  onChange={ (e) => ChangeLag('title', e.target.value, i.number)} placeholder='title lang' />
                </Col>
                <Col md={4}>
                <Form.Control value={i.proficiency}
                onChange={ (e) => ChangeLag('proficiency', e.target.value, i.number)}
                placeholder='profience lang' />
                </Col>
                <Col>
                  <Button onClick={() => RemoveLag(i.number) } variant='outline-danger'>Delete</Button>
                </Col>
              </Row>
              )
          }
         
          {
            Skill.map( i => 
              <Row className='mt-4' key={i.number}>
                <Col md={4}>
                  <Form.Control value={i.title}
                  onChange={ (e) => ChangeSkill('title', e.target.value, i.number)}
                  placeholder='title skill' />
                </Col>
                <Col md={4}>
                <Form.Control value={i.experience} type='number'
                onChange={ (e) => ChangeSkill('experience', e.target.value, i.number)}
                placeholder='expirience skill' />
                </Col>
                <Col>
                  <Button onClick={() => RemoveSkill(i.number) } variant='outline-danger'>Delete</Button>
                </Col>
              </Row>
              )
          }
         
          {
            Edu.map( i => 
              <Row className='mt-4' key={i.number}>
                <Col md={4}>
                  <Form.Control value={i.name_univ}
                  onChange={ (e) => ChangeEdu('name_univ', e.target.value, i.number)}
                  placeholder='name of univer' />
                </Col>
                <Col md={4}>
                <Form.Control value={i.speciality} 
                onChange={ (e) => ChangeEdu('speciality', e.target.value, i.number)}
                placeholder='speciality' />
                </Col>
                <Col md={4}>
                <Form.Control value={i.level}
                onChange={ (e) => ChangeEdu('level', e.target.value, i.number)}
                placeholder='level' />
                </Col>
                <Col className='mt-2'>
                  <Button  onClick={() => RemoveEdu(i.number) } variant='outline-danger'>Delete</Button>
                </Col>
              </Row>
              )
          }
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addResume}>Create</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
})


export default CreateResume