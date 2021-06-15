

import { useState, useContext } from 'react'
import {Container, Button} from 'react-bootstrap'
import CreateResume from '../modals/createResume'
import ProfileInfo from './profileInfo'
import {Context} from '../../index'
import { useHistory } from 'react-router'
import { observer } from 'mobx-react-lite'
import CreateJob from '../modals/cteateJob'
import CreateOrg from '../modals/createOrg'


const Profile = observer(() => {
    const [ResumeVisible, setResumeVisible] = useState(false)
    const [JobVisible, setJobVisible] = useState(false)
    const [OrgVisible, setOrgVisible] = useState(false)
    const {user} = useContext(Context)
    const history = useHistory()
    const logOut =  () =>{
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        history.push('/login')
    }
    
    return (
        <div className='main-div'>
            <div>
            { user.User.role === 'seeker' ? (<>
                <Container className='jumbotron mt-2 d-flex justify-content-center align-items-center flex-column '>
                    <h1>Profile</h1>
                    < ProfileInfo />    
                </Container>
                <Container className='jumbotron mt-2 d-flex  flex-column'>
                    <Button onClick={() => setResumeVisible(true)} variant='outline-primary' className='mt-4 p-2'>Create Resume</Button>
                    <Button variant='outline-primary' onClick={ () => logOut() } className='mt-4 p-2'>Log out</Button>
                    < CreateResume show={ResumeVisible} onHide={ () => setResumeVisible(false)  } />
                </Container>
            
            </>) : (


<Container className='jumbotron mt-2 d-flex  flex-column'>
<Button onClick={() => setJobVisible(true)} variant='outline-primary' className='mt-4 p-2'>Create Post Job</Button>
<Button onClick={() => setOrgVisible(true)} variant='outline-primary' className='mt-4 p-2'>Create Organisation</Button>

<Button variant='outline-primary' onClick={ () => logOut() } className='mt-4 p-2'>Log out</Button>
< CreateJob show={JobVisible} onHide={ () => setJobVisible(false)} />
< CreateOrg show={OrgVisible} onHide={ () => setOrgVisible(false)} />
</Container>
            ) }
            </div>
        </div>
    )
})

export default Profile