

import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { createProfile } from "../../http/prifileApi"

const   CreateInfo = observer(({onHide, show}) => {

    const [fullName, setfullName] = useState('')
    const [birthday, setbirthday] = useState('')
    const [phone, setphone] = useState('')
    const [location, setlocation] = useState('')
    
    const createPro = () => {
      const element = new FormData()
      element.append('full_name', fullName)
      element.append('birthday', birthday)
      element.append('phone', phone)
      element.append('citi_of_residents', location)
      createProfile(element).then(res => {
        setfullName('')
        setbirthday('')
        setphone('')
        setlocation('')
        onHide()
        alert('created!!!')
        window.location.reload(false)
      }
      )
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
                Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Control  className='mt-2' type='text'
                placeholder='Full name'
                value={fullName}
                onChange={e => setfullName(e.target.value)}
            />
            <Form.Control  className='mt-2' type='date'
                placeholder='Birthday'
                value={birthday}
                onChange={e => setbirthday(e.target.value)}
            />
            <Form.Control  className='mt-2' type='text'
                placeholder='phone'
                value={phone}
                onChange={e => setphone(e.target.value)}
            />
            <Form.Control  className='mt-2' type='text'
                placeholder='Location'
                value={location}
                onChange={e => setlocation(e.target.value)}
            />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success'  onClick={createPro}>Create</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
})


export default CreateInfo