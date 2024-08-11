
// import './App.css';
// import { BlogProvider } from './componants/BlogContext';
// import BlogForm from './componants/BlogForm';
// import BlogList from './componants/BlogList';

// function App() {
//   return (
//     <div className="App">
//       <BlogProvider>
//         <div className='container'>

//           <h1 style={{fontFamily:'sans-serif', textShadow:'2px 2px 2px blue',color:"white",fontSize:'2.5rem',textAlign:'center',margin:'1rem 0'}}>Blog Application</h1>
//           <BlogForm/>
//           <BlogList/>
//         </div>
//       </BlogProvider>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { BlogProvider } from './componants/BlogContext';
import BlogForm from './componants/BlogForm';
import BlogList from './componants/BlogList';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './componants/Navbar';

function App() {
  return (
    <Router>
      <BlogProvider>
        <div className="App">
          <div className='container'>
            <Navbar/>
   
            <h1 style={{ fontFamily: 'sans-serif', textShadow: '2px 2px 2px blue', color: "white", fontSize: '2.5rem', textAlign: 'center', margin: '1rem 0' }}>
              Blog Application
            </h1>
            <Routes>
              <Route path="/" element={<BlogForm />} />
              <Route path="/blogs" element={<BlogList />} />
            </Routes>
          </div>
        </div>
      </BlogProvider>
    </Router>
  );
}

export default App;
