



export default function EduItem( {edu}){
    return (
        <div style={{height: '80px', width: '30%', display: 'flex' }}>
            <div  style={{marginBottom: '5px'}}>
            <h5>{edu.name_univ}</h5>
            <p>{edu.speciality}, {edu.level}, {edu.citi}</p>
            </div>
        </div>
        
    )
}