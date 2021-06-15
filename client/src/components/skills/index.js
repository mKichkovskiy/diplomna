export default function SkillItem( {skill}){
    return (
        <div style={{height: '80px', width: '30%', display: 'flex' }}>
            <div  style={{marginBottom: '5px'}}>
            <p>{skill.title},exp: {skill.experience}</p>
            </div>
        </div>
        
    )
}