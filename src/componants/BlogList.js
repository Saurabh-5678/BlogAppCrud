// import React from 'react'
// import { useBlog } from './BlogContext'
// import BlogItem from './BlogItem'

// const BlogList = () => {
//     const{blogs} = useBlog();
//   return (
//     <div>
//        <table>
//         <thead>
//         <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Content</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {blogs.map(blog=><BlogItem key={blog.id} {...blog}/>)}
//         </tbody>
//        </table>
//     </div>
       
//   )
// }

// export default BlogList

import React from 'react';
import { useBlog } from './BlogContext';
import BlogItem from './BlogItem';

const BlogList = () => {
    const { blogs } = useBlog();

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map(blog => (
                        <BlogItem key={blog.id} {...blog} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BlogList;
