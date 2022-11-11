//sfc tab (stateless functional components) 
// shift alt up/down DUPLICATE CODE

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href='/create'>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar; 

//sfc tabexNavbar ort default ;


//inline styling 

// style={{
//     color: 'white',
//     backgroundColor: '#f1356d',
//     borderRadius: '8px'
// }}