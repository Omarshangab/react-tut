import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
const [title, setTitle]= useState('');
const [Body, setBody]= useState('');
const [Author, setAuthor]= useState('omar');
const [isPending, setIsPending]= useState(false);
const history = useHistory();


const handleSumbit = (e)=>{
    e.preventDefault();
    const blog = {title, Body, Author}
    
    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(()=> {
        console.log('new blog added')
        setIsPending(false);
        history.push('/')
    })
}

    return ( 
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSumbit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea required
                value={Body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                value={Author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="omar">omar</option>
                    
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;