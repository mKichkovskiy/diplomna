import './conteiner.css'
import Logo from '../../img/logo.svg'


export default function Conteiner({children}){
    return (
    <>
        <div className='logo'>
                <img alt='' width='110' height='70' src={Logo} />
        </div>
        <div 
        className='main'
        >
            <div className='child'>
                {children}
            </div>
        </div>
    </>
    )
}