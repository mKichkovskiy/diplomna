import  Conteiner  from './conteiner'
import React from 'react'
import {Form, Button} from 'react-bootstrap'
import './login.css'
import { Link } from 'react-router-dom'

export default function Register(){
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password confirm</Form.Label>
            <Form.Control type="password" placeholder="Password confirm" />
            </Form.Group>
            <Form.Label>Chose your role:</Form.Label>
            <Form.Control as="select"  className="mb-3">
               <option>Seeker</option>
               <option>Employer</option>
            </Form.Control>
            <div style={{textAlign: 'center'}}>
                <Button variant="primary" type="submit">
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
}