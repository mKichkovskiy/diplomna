



import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { createOrgs } from "../../http/organisationApi"

//title, type, num_of_emp, desc, img: filename, userId: user.id, link
const CreateOrg = ({onHide, show}) => {

    const [title, setTitle] = useState('')
    const [type, setType] = useState('')
    const [num_of_emp, setNum_of_emp] = useState(0)
    const [desc, setDesc] = useState('')
    const [link, setLink] = useState('')
    const [img, setImg] = useState(null)



    const file = (e) => {
        setImg(e.target.files[0])
    }

    const createOrg = () =>{
        const formData = new FormData()
        formData.append('title', title)
        formData.append('type', type)
        formData.append('img', img)
        formData.append('num_of_emp', Number(num_of_emp))
        formData.append('desc', desc)
        formData.append('link', link)
        createOrgs(formData).then( res => {
            console.log(res)
            setType('')
            setTitle('')
            setNum_of_emp(0)
            setDesc('')
            setLink('')
            setImg(null)
            onHide()
            alert('Created!')
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
                Organisation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Control 
                value={title}
                onChange={ e => setTitle(e.target.value) }
                className='mt-1'
                placeholder='title'
            />
            <Form.Control
                value={link}
                onChange={ e => setLink(e.target.value) }
                className='mt-1' 
                placeholder='link'
            />
            <Form.Control 
                value={num_of_emp}
                onChange={ e => setNum_of_emp(e.target.value) }
                className='mt-1'
                placeholder='num of empl'
                type='number'
            />
            <Form.Control 
                value={type}
                onChange={ e => setType(e.target.value) }
                className='mt-1'
                placeholder='type'
            />
            <Form.Control 
                value={desc}
                onChange={ e => setDesc(e.target.value) }
                className='mt-1'
                placeholder='desc'
            />
            <hr></hr>
            <Form.Control 
                onChange={ file }
                className='mt-1'
                type='file'
                placeholder='img'
            />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={createOrg}>Create</Button>
        <Button variant='outline-danger' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </>
    )
}


export default CreateOrg