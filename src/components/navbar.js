import * as React from 'react';

// events

const itemSpace = {
    marginLeft: 30,
    marginRight: 30,
    fontWeight: 600,
}
  
const linkItem = {
    ...itemSpace,
    textDecoration: "none",
    color: "#031926",
}

const imageStyle = {
    ...itemSpace,
    width: 48,
    height: 48,
}

function MouseOver(event) {
    event.target.style.background = '#EF476F';
    event.target.style.padding = "12";
    event.target.style.borderRadius = 15;
  }

  function MouseOut(event){
    event.target.style.background="#fff";
}

const Navbar = () => {
    return (
        <nav className='flex flex-wrap'>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} class="link-element" style={linkItem} href="#">about</a>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} class="link-element" style={linkItem} href="#">projects</a>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} style={linkItem} href="#">illustrations</a>
            <a onMouseOver={MouseOver} onMouseOut={MouseOut} class="link-element" style={linkItem} href="#">let's talk!</a>
        </nav>
    )
}

export default Navbar