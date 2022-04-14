import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);      
  } 

  useEffect(() => {
    fetch('http://localhost:9000/blogs')
      .then(res => {
        if(!res.ok){ //burdaki ok degeri res'ten geliyor yani kendi degiskeni
          // eger ok true degilse yani baglanamiyorsa fetch'te burda erroru yakaliyoruz
          throw Error('could not fetch the data for that resource'); //buda console yaziyor
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        setIsPending(false);
        setError(error.message);
      })
  }, []) // this [] is allow just apply on first reload 

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}/> }
    </div>
  );
}
 
export default Home;