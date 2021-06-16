

import {Col, Button} from 'react-bootstrap'
import CreateInfo from '../modals/createInfo'
import { useEffect, useState, useContext } from 'react'
import { deleteProfile, fetchProfileOne } from '../../http/prifileApi'
import {Context} from '../../index'
import { useHistory } from 'react-router'

export default function ProfileInfo(){
    const [InfoVisible, setInfoVisible] = useState(false)
    const [profile, setProfile] = useState({})
    const {user} = useContext(Context)
    const history = useHistory()

    useEffect( 
        () => {
            fetchProfileOne(user.User.id).then(res=> {
                setProfile(res)} )
        }
        ,[])
        
    const deletePr = () =>{
        deleteProfile(profile.id).then( res => {
                console.log(res)
                history.push('/')
                alert('Deleted!')
                //window.location.reload(false)
        })
    }
    


    return (
        <>
        {
            profile === null ? (
                <>
        <Button onClick={() => setInfoVisible(true)} variant='outline-primary' className='mt-4 p-2'>+</Button>
        < CreateInfo  show={InfoVisible} onHide={ () => setInfoVisible(false)  }/>
        </>
            ) : (
                
              
                <>
                <Col key={profile.id}>
                <h1>Full name: {profile.full_name}</h1>
                <h5>Birthday: {profile.full_name}</h5>
                <p >Citi of resident: {profile.citi_of_residents}</p>
                <p className='text-primary'>Phone: {profile.phone}</p>
            </Col>
            <Button
            className='ml-3 btn-lg'
            onClick={deletePr}
            >
            Delete
            </Button>
            </>
        
        
            )
        }
        </>
    )
}