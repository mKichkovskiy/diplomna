

import {Row, Col, Container, Image, Link } from 'react-bootstrap'

import LinkIcon from '../../img/www.png'
import PersonIcon from '../../img/person.svg'
import BackButton from '../utils/backB'
 
export default function OrganisationProfile(){
    const organisation =  {
        id: 1,
        title: 'Samsung',
        type: 'hz',
        num_of_emp: 2000,
        desc: 'kewk',
        link: 'https://google.com',
        img: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/9958/brand.gif?itok=0v06HKoT'
    }
    
    return (
        <div className='main-div'>
            <Container className='jumbotron mt-2 d-flex justify-content-center align-items-center'>
                <Col md={3} className='d-flex justify-content-center align-items-center  '>
                    <Image alt='' width={200} height={200} src={organisation.img} />
                    <a href={organisation.link}>
                    <div  style={{height: "50px", position: 'absolute', left: '10px', top: '170px'}}>
                    <Image alt='' style={{width: '60px', height: '45px'}} src={LinkIcon} />
                    </div>
                    </a>
                </Col>
                <Col md={8} >
                <div style={{position: 'absolute', top: '10px', right: '20px'}}>
                    <BackButton />
                </div>
                    <Row>
                    <h1>{organisation.title}</h1>
                    <div className='d-flex align-items-center'>
                    <Image alt='' src={PersonIcon} style={{width: '30px', height: '30px'}} />
                    <p className='text-success'>{organisation.num_of_emp}</p>
                    </div>
                    <p className='text-muted'>Type: {organisation.type}</p>
                   
                    <h3>Desc:</h3>
                    <hr class=""></hr>
                    <p>{organisation.desc}</p>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}