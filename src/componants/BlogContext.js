import React, { createContext , useState,useContext} from 'react'


//create context object
 const BlogContext = createContext();

// BlogProvider component to provide BlogContext values to children components
export const BlogProvider = ({children}) => {
    //State to hold the list of blogs
    const [blogs,setBlogs] = useState([]);

    //Functions to add a new blog to the list 
    const addBlog = (blog) =>{
        setBlogs([...blogs,blog]); // Add the new blog to the existing list

    };

    const updateBlog = (updateBlog) => {
        setBlogs(
           blogs.map(blog => 
            blog.id === updateBlog.id ? updateBlog : blog
           )
        );//Replace the blog with the matching id 
    }

      // Function to delete a blog by its id
      const deleteBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id)); // Filter out the blog with the specified id
      }

    //Provide the blog data and functions to children components
    return(
     <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
    );

};

// Custom hook to use the BlogContext

export const useBlog = () => useContext(BlogContext);