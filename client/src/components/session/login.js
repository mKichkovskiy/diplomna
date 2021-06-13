import  Conteiner  from './conteiner'
import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login(){
    return (
        <Conteiner>
            <div className='login'>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div style={{textAlign: 'center'}}>
                <Button variant="primary" type="submit">
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
}