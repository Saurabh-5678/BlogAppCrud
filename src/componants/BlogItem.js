// import React,{useState} from 'react'
// import { useBlog } from './BlogContext'

// const BlogItem = ({id,title,content}) => {  
//     const{updateBlog,deleteBlog} = useBlog();
//     const[isEditing,setIsEditing] = useState(false);
//     const[newTitle,setNewTitle] = useState(title);
//     const[newContent,setNewContent] = useState(content)

//     const handleUpdate = () =>{
//         updateBlog({id,title:newTitle,content:newContent})
//         setIsEditing(false);
//     }
//   return (
//     <tr>
//       <td>
//       {isEditing ? (
//             <div>
//                 <input value={newTitle} onChange={(e)=> setNewTitle(e.target.value)}/>
//                 <textarea value={newContent} onChange={(e)=> setNewContent(e.target.value)}/>
//                 <button onClick={handleUpdate} className='btn btn-primary'>Save</button>
//             </div>
//          ) : (
//             <div>
//                 <h3 style={{color:'white'}}>{title}</h3>
//                 <p style={{color:'white'}}>{content}</p>
//                 <button className='btn btn-success' onClick={()=> setIsEditing(true)}>Edit</button>
//                 <button className='btn btn-danger' onClick={()=>deleteBlog(id)}>Delete</button>
//             </div>
//          )}
//       </td>
//     </tr>
  
//   )
// }

// export default BlogItem

import React, { useState } from 'react';
import { useBlog } from './BlogContext';

const BlogItem = ({ id, title, content }) => {  
    const { updateBlog, deleteBlog } = useBlog();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    const handleUpdate = () => {
        updateBlog({ id, title: newTitle, content: newContent });
        setIsEditing(false);
    };

    return (
        <tr>
            <td>{id}</td>
            <td>
                {isEditing ? (
                    <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                ) : (
                    title
                )}
            </td>
            <td>
                {isEditing ? (
                    <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)} />
                ) : (
                    content
                )}
            </td>
            <td>
                {isEditing ? (
                    <button onClick={handleUpdate} className='btn btn-primary'>Save</button>
                ) : (
                    <>
                        <button className='btn btn-success' onClick={() => setIsEditing(true)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => deleteBlog(id)}>Delete</button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default BlogItem;
