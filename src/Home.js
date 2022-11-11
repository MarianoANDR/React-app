import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
            
    return (
        <div className='home'>
        <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}/>             
       
        </div>
    );
}
 
export default Home;





//CLICK EVENTS***************

 // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }
    

// {/* <button onClick={(e) => {
//                 handleClickAgain('mario', e)
//             }}>Click me again</button> */}



/*
STATE HOOKS *************************

import { useState } from 'react';

const Home = () => {
    
    const [name, setName] = useState('mario'); 
    const [age, setAge] = useState(25);

    const handleClick = () => {
       setName('luigi');
       setAge(30);
    }

   
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years camold</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
    );
}
 
export default Home;


*/


// {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}