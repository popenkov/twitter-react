import React from 'react';
import PostListItem from "../post-list-item/";
import { ListGroup} from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => { // перебираем массив, трансформируем и возвращаем новый массив с версткой.
        const {id, ...itemProps} = item; // деконструируем массив и записываем в переменную отдельно ИД и отдельно остальные параметры.
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                {...itemProps}
                onDelete={()=>onDelete(id)}/> 
            </li>

        )
    });

    return (
        
        <>
        <ListGroup className="app-list">
            {elements}  
        </ListGroup>
        
        </>
    )
}

export default PostList;