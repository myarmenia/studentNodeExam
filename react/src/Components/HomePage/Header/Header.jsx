import React, { useRef } from 'react'
import './header.css'
import Nav from '../Nav/Nav'
import img from "../../../Images/Wines/Group 10.png"

const Header = ({aboutRef}) => {

  return (
    <>
    <header>
        <Nav />
        
    </header>
    <div className="container" ref={aboutRef}>
    <div className="about" >
        <div id='about'>
            <h2>About this website</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a venenatis ex.
                Praesent ut diam sit amet ipsum hendrerit lacinia nec ut turpis. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. Sed sollicitudin lacus sed quam laoreet, et elementum diam
                varius. Etiam eu placerat libero.
            </p>
        </div>

        <div className="absolute_wine">
            <img src={img} alt=""/>
        </div>
    </div>

</div>
</>
  )
}

export default  React.memo(Header)