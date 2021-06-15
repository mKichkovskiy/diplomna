

import {Col, Button} from 'react-bootstrap'
import CreateInfo from '../modals/createInfo'
import { useState } from 'react'

export default function ProfileInfo(){
    const [InfoVisible, setInfoVisible] = useState(false)
    const profile = {
        id: 1,
        full_name: 'lo asd',
        birthday: '02.02.2000',
        citi_of_residents: 'uzh',
        phone: '+38022123123'
    }
    return (
        <>
        <Col key={profile.id}>
            <h1>Full name: {profile.full_name}</h1>
            <h5>Birthday: {profile.full_name}</h5>
            <p >Citi of resident: {profile.citi_of_residents}</p>
            <p className='text-primary'>Phone: {profile.phone}</p>
        </Col>
        <Button onClick={() => setInfoVisible(true)} variant='outline-primary' className='mt-4 p-2'>+</Button>
        < CreateInfo  show={InfoVisible} onHide={ () => setInfoVisible(false)  }/>
        </>
    )
}