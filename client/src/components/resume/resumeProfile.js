


import {Row, Col, Container, Image, Badge, Button } from 'react-bootstrap'
import BackButton from '../utils/backB'
import LocationIcon from '../../img/location.png'
import EduItem from '../education'
import LangItem from '../language/langItem'
import SkillItem from '../skills'
import { useEffect, useState, useContext } from 'react'
import { useParams, useHistory } from 'react-router'
import { observer } from 'mobx-react-lite'
import { deleteRes, fetchResOne } from '../../http/resumeApi'
import {Context} from '../../index'


 const ResumeProfile = observer(() =>{
  const {user} = useContext(Context)
    const {id} = useParams()
    const [resume, setResume] = useState({skills: [], langs: [], edus: []})
    const history = useHistory()


    useEffect(
      ()=> {
        fetchResOne(id).then(res => {setResume(res)
        
      })
    }, [])

    const token = localStorage.getItem('token')
    const deleteR = () =>{
        deleteRes(id, token).then( res => {
            history.push('/resumes')
            alert('Deleted!')
        })
    }

    return (
        <div className='main-div'>
            <Container>
            <Container className='jumbotron mt-2 d-flex justify-content-center align-items-center'>
            <Col md={3} className='d-flex justify-content-center align-items-center  '>
                    <Image alt='' className='rounded-circle'  width={200} height={200} src={process.env.REACT_APP_API_URL + resume.img} />
                    
                    <div  style={{display: 'flex', alignItems: 'center',  height: "50px", position: 'absolute', left: '10px', top: '190px'}}>
                        <Image alt='' src={LocationIcon} />
                        <p className='mt-4 text-primary'>{resume.location}</p>
                    </div>
                </Col>
                <Col md={8} >
                <div style={{position: 'absolute', top: '10px', right: '20px'}}>
                    <BackButton />
                    {
                    user.User.id !== resume.userId ? (
                        <Button
                        className='ml-3 btn-lg'
                        disabled={true}
                >
                    Delete
                </Button>
                    ) : (
                        <Button
                        className='ml-3 btn-lg'
                        disabled={false}
                onClick={deleteR}
                >
                    Delete
                </Button>
                    )
                }
                </div>
                    <Row>
                    <h1>{resume.title}</h1>
                    <div className='d-flex align-items-center'>
                    <p className='text-success'></p>
                    </div>
                    <p className='text-muted'>Type: {resume.employ_type} </p>
                    <div style={{width: '20px'}}>
                    <Badge className='bg-primary'>Salary: {resume.salary}</Badge>
                    </div>
                    
                    <h3>Desc:</h3>
                    <hr ></hr>
                    <p>{resume.desc}</p>
                    </Row>
                    </Col>
                
            </Container>
            <Container className='jumbotron mt-2 d-flex'>
            
            <Container  >
            <h5 className='text-primary'>Education</h5>
            <Row className='bg-secondary rounded'>
                {
                  resume.edus.map((ed) => < EduItem key={ed.id} edu={ed} />  )
                }
            </Row>
            </Container>
            <Container>
            <h5 className='text-primary'>Languages</h5>
            <Row className='bg-success rounded'>
            {
                  resume.langs.map((ed) => < LangItem key={ed.id} lang={ed} />  )
                }
            </Row>
            </Container>
            <Container>
            <h5 className='text-primary'>Skills</h5>
            <Row className='bg-secondary rounded'>
            {
                 resume.skills.map((ed) => <  SkillItem key={ed.id} skill={ed} />  )
            }
            </Row>
            </Container>
            </Container>
            </Container>
        </div>
    )
})



export default ResumeProfile