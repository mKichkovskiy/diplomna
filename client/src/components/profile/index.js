

import {  useState } from 'react'
import {Container, Button} from 'react-bootstrap'
import CreateResume from '../modals/createResume'
import CreateSkill from '../modals/createSkill'
import CreateEdu from '../modals/cteateEdu'
import CreateLanguage from '../modals/createLanguage'
import ProfileInfo from './profileInfo'

export default function Profile() {
    const [ResumeVisible, setResumeVisible] = useState(false)
    const [SkillVisible, setSkillVisible] = useState(false)
    const [EduVisible, setEduVisible] = useState(false)
    const [LangVisible, setLangVisible] = useState(false)
    

    return (
        <div className='main-div'>
            <div>
            <Container className='jumbotron mt-2 d-flex justify-content-center align-items-center flex-column '>
                    <h1>Profile</h1>
                    < ProfileInfo />    
                </Container>
                <Container className='jumbotron mt-2 d-flex  flex-column'>
                    <Button onClick={() => setResumeVisible(true)} variant='outline-primary' className='mt-4 p-2'>Create Resume</Button>
                    <Button onClick={() => setSkillVisible(true)} variant='outline-primary' className='mt-4 p-2'>Create Skill</Button>
                    <Button onClick={() => setEduVisible(true)} variant='outline-primary' className='mt-4 p-2'>Create Education</Button>
                    <Button onClick={() => setLangVisible(true)} variant='outline-primary' className='mt-4 p-2'>Create Language</Button>
                    < CreateResume show={ResumeVisible} onHide={ () => setResumeVisible(false)  } />
                    < CreateSkill show={SkillVisible} onHide={ () => setSkillVisible(false)  } />
                    < CreateEdu show={EduVisible} onHide={ () => setEduVisible(false)  } />
                    < CreateLanguage show={LangVisible} onHide={ () => setLangVisible(false)  } />
                </Container>
            </div>
        </div>
    )
}