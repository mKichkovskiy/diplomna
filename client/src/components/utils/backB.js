


import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'


export default function BackButton(){
    const history = useHistory()
    return (
        <Button className='btn btn-primary btn-lg' onClick={() => history.goBack()  }>Back</Button>
    )
}