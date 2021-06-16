

import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import {createJobs} from '../../http/jobApi'

//title, salary, category, desc, location
const CreateJob = ({onHide, show}) => {
  const [title, setTitle] = useState('')
  const [salary, setSalary] = useState('')
  const [category, setCategory] = useState('')
  const [desc, setDesc] = useState('')
  const [location, setLocation] = useState('')
    
  
    const token = localStorage.getItem('token')
    const createJ = () => {
        createJobs(title, Number(salary), category, desc, location, token).then( res => {
          setLocation('')
          setSalary('')
          setTitle('')
          setCategory('')
          setDesc('')
          onHide()
          alert('Created!')
        } )
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
                Job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Control
                className='mt-1' 
                value={title}
                onChange={e => setTitle(e.target.value)  }
                placeholder='title'
            />
            <Form.Control 
                className='mt-1'
                value={category}
                onChange={e => setCategory(e.target.value)  }
                placeholder='category'
            />
            <Form.Control 
                className='mt-1'
                value={salary}
                onChange={e => setSalary(e.target.value)  }
                placeholder='salary'
            />
            <Form.Control 
                className='mt-1'
                value={desc}
                onChange={e => setDesc(e.target.value)  }
                placeholder='desc'
            />
            <Form.Control 
                className='mt-1'
                value={location}
                onChange={e => setLocation(e.target.value)  }
                placeholder='location'
            />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={createJ}>Create</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}


export default CreateJob