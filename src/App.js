import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NewPost from './components/NewPost';
import PostsList from './components/PostsList';
import ShowPost from './components/ShowPost';
import EditPost from './components/EditPost0/EditPost';
import { useState } from 'react';


function App() {
  const [state, setState] = useState(0)
  const [posts, setPosts] = useState([]);


  const data = async () => {
    try {
      const response = await fetch(`http://localhost:7777/posts`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setPosts(data);
    } catch (e) {
      console.error(e);
    }
  }
  data();




  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList posts={posts} />} />
        <Route path="/posts/new" element={<NewPost state={state} setState={setState} />} />
        <Route path="/edit/:rID" element={<EditPost state={state} setState={setState} />} />
        <Route path="/posts/:rID" element={<ShowPost />} />
      </Routes>
    </div>


  );
}

export default App;