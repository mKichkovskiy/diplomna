


export default function LangItem( {lang}){
    return (
        <div style={{height: '80px', width: '30%', display: 'flex' }}>
            <div  style={{marginBottom: '5px'}}>
            <p>Language:{lang.title}, {lang.proficiency}</p>
            </div>
        </div>
        
    )
}