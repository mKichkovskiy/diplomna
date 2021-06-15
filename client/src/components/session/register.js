import  Conteiner  from './conteiner'
import React, { useContext, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import './login.css'
import { Link, useHistory } from 'react-router-dom'
import { register } from '../../http/userApi'
import {observer} from 'mobx-react-lite'
import {Context} from '../../index'

const Register = observer(() =>{
    const history = useHistory()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const click = async () =>{
        try{
            const response = await register(email, password, role)
            user.setUser(response)
            user.setIsAuth(true)
            history.push('/')
        }catch(e){
            alert(e.response.data.message)
        }
    }


    return (
        <Conteiner>
            <div className='login'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            value={email} onChange={ e => setEmail(e.target.value) } />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control  placeholder="Password" 
            value={password} onChange={e => setPassword(e.target.value) } type='password' />
            </Form.Group>
            <Form.Label>Chose your role:</Form.Label>
            <Form.Control as="select"  value={role} onChange={ e => setRole(e.target.value)}  className="mb-3">
               <option value='seeker' >Seeker</option>
               <option value='employer' >Employer</option>
            </Form.Control>
           
            <div style={{textAlign: 'center'}}>
                <Button 
                variant="primary" 
                onClick={click}
                >
                    Register
                </Button>
            </div>
            </Form>
            <div className='link'> 
            <Link to='/login'>Want log in?</Link>
            </div>
            </div>
        </Conteiner>
    )
})


export default Register