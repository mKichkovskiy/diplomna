

import {Row, Col, Container, Image, Button } from 'react-bootstrap'

import LinkIcon from '../../img/www.png'
import PersonIcon from '../../img/person.svg'
import BackButton from '../utils/backB'
import { useEffect, useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { deleteOrgs, fetchOrgOne } from '../../http/organisationApi'
import { useParams, useHistory } from 'react-router' 
import {Context} from '../../index'

const OrganisationProfile = observer(() =>{
    const [organisation, setOrganisation ] = useState({})
    const {id} = useParams()
    const history = useHistory()
    const {user} = useContext(Context)
    useEffect(
        () => {
            fetchOrgOne(id).then(res => setOrganisation(res))
        }
        ,[])


        const token = localStorage.getItem('token')
        const deleteOr = () =>{
        deleteOrgs(id, token).then( res => {
            history.push('/organisations')
            alert('Deleted!')
        })
        } 


    
    return (
        <div className='main-div'>
            <Container className='jumbotron mt-2 d-flex justify-content-center align-items-center'>
                <Col md={3} className='d-flex justify-content-center align-items-center  '>
                    <Image alt='' width={200} height={200} src={process.env.REACT_APP_API_URL    + organisation.img} />
                    <a target='_blank ' href={organisation.link}>
                    <div  style={{height: "50px", position: 'absolute', left: '10px', top: '170px'}}>
                    <Image alt='' style={{width: '60px', height: '45px'}} src={LinkIcon} />
                    </div>
                    </a>
                </Col>
                <Col md={8} >
                <div style={{position: 'absolute', top: '10px', right: '20px'}}>
                    <BackButton />
                    {
                    user.User.id !== organisation.userId ? (
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
                onClick={deleteOr}
                >
                    Delete
                </Button>
                    )
                }
                </div>
                    <Row>
                    <h1>{organisation.title}</h1>
                    <div className='d-flex align-items-center'>
                    <Image alt='' src={PersonIcon} style={{width: '30px', height: '30px'}} />
                    <p className='text-success'>{organisation.num_of_emp}</p>
                    </div>
                    <p className='text-muted'>Type: {organisation.type}</p>
                   
                    <h3>Desc:</h3>
                    <hr></hr>
                    <p>{organisation.desc}</p>
                    </Row>
                </Col>
            </Container>
        </div>
    )
})


export default OrganisationProfile