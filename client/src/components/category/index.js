

import { useContext } from 'react'
import {ListGroup} from 'react-bootstrap'
import {Context} from '../../index'
import {observer} from 'mobx-react-lite'


const Categorys = observer(() => {
    const {job} = useContext(Context)
    return (
        <ListGroup>
        {job.categorys.map((cat) => 
            <ListGroup.Item
            style={{cursor: 'pointer'}}
            active={cat.id === job.selectedCategory.id} 
            onClick={() => job.setSelectedCategory(cat) }  
            key={cat.id}
            >{cat.title}</ListGroup.Item>
        )}
    </ListGroup>
    )
})

export default Categorys