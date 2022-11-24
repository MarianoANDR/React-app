
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      
      <div className='content'>
        <Home />
        <Create/>
      </div>
    </div>
  );
}

export default App;

// numbers, string and arrays are okay to output 

// App.js is the only component we have so far (Root component)
//'root component', because is the first component that is rendered to the DOM,
//and sits on the top of the tree component

// a component is a js function that returns jsx and is exported to be imported by the index.js and rendered
//to and by the DOM


  // const likes = 50;
  // const link = 'https://google.com';

//  {/* <p>Like { likes } times</p>
//         <p>{ 'heyyy' }</p>
//         <p>{ [1,2,3,4,5] }</p>
//         <p>{ Math.random() }</p>

//         <a href={ link }>Google Link</a> */}