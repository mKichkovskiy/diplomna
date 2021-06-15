import  Conteiner  from './conteiner'
import React, {useContext, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import './login.css'
import { Link, useHistory } from 'react-router-dom'
import {Context} from '../../index'
import { login } from '../../http/userApi'
import { observer } from 'mobx-react-lite'


const Login = observer(() => {
    const history = useHistory()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () =>{
        try{            
        const response = await login(email, password)
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
            <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <div style={{textAlign: 'center'}}>
                <Button variant="primary" onClick={click}>
                    Login
                </Button>
            </div>
            </Form>
            <div className='p-link'>
            <p>You are not registered yet, click on the button and 
                {' '}<Link to='/register'>register</Link> !</p>
            </div>
            </div>
        </Conteiner>
    )
})


export default Login