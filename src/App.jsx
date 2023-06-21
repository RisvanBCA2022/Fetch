import React, { useState, useEffect } from 'react'


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0, 10)))

  }, [])



  return (
    <div>
      <h1 style={{background:"black",color:"#39FF14"}}> Fetching Data</h1>
      {
        posts.map((post) =>
          <>
            <h1 style={{background:"black",color:"#39FF14"}}>{post.title}</h1>
            <p style={{background:"#black"}}>{post.body}</p>
          </>
        )
      }
    </div >
  )
}

export default App
