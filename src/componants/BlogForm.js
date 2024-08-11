import React,{useState} from 'react'
import {useBlog} from './BlogContext';

const BlogForm = () => {
  const {addBlog} = useBlog();
  const[title,setTitle] = useState('');
  const[content,setContent] = useState('');

  const handleSubmit = (e) =>{
          e.preventDefault();
          const newBlog = {
            id:Date.now(),
           
            title,
            content,
          };

          addBlog(newBlog);
          setTitle('');
          setContent('');

  }
  return (
    <div className='container mt-5'>
    <div className='row justify-content-center'>
      <div className='col-md-6'>
      <form onSubmit={handleSubmit} className=' p-4 rounded shadow '>
          <div className='mb-3'>
             <label htmlFor='title' className='form-label' style={{color:'white', fontFamily:'sans-serif',fontSize:'20px'}}>Title: </label><br/>
             <input id="title" value={title} className="form-control" onChange={(e)=> setTitle(e.target.value)} placeholder="title"/><br/>
          </div><br/>

          <div className='mb-3'>
           <label className='form-label' style={{color:'white', fontFamily:'sans-serif', fontSize:'20px'}}>Content:</label>
          <textarea className="form-control" value={content} onChange={(e)=>setContent(e.target.value)} placeholder='content'/><br/>
          </div><br/>
          
           <button type='submit' className="btn btn-primary">Add Blog</button>

        </form>
      </div>

    </div>
        
    </div>
  )
}

export default BlogForm