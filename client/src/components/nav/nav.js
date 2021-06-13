import './nav.css'
import Logo from '../../img/logo.svg'
import {Link} from 'react-router-dom'

const Style = {
    textDecoration: 'none',
    marginLeft: '35px',
    color: 'white',
    fontSize: '18px'
}


export default function Nav(){
    return (
            <div className='nav'>
                <div className='first'>
                    <Link to='/' style={{marginLeft:'20px'}}>
                        <img alt='' src={Logo} />
                    </Link>
                    <Link to='/'  style={Style}>
                        Posts Job
                    </Link>
                    <Link to='/resumes' style={Style}>
                        Resumes
                    </Link>
                    <Link to='/organisations' style={Style}>
                        Organisation
                    </Link>
                </div>
                <Link to='/profile' style={{textDecoration: 'none', color: 'white'}}>
                <div className='second'>    
                    Profile
                </div>
                </Link>
                
            </div>
    )
}