import React from 'react'
import './contactPgae.css'
import Nav from "../../Components/HomePage/Nav/Nav"
import Footer from '../../Components/Footer/Footer'

const ContactPage = () => {

    window.scrollTo({
        top: 0,
        behavior: "instant",
      });

  return (
    <div className='contactPage'>
        <Nav/>
        <div className="container contact_container">
            <div className="contact_items">
                <div className="contact_item">
                    <div className="icon_div">
                    <i className="fa-solid fa-location-dot"></i>
                        <h4>Our Main Office</h4>
                    </div>

                    <div className="contact_item_inf">
                    <p>SoHo 94 Broadway St new York, NY 1001</p>
                    </div>
                </div>
                <div className="contact_item">
                    <div className="icon_div">
                        <i className="fa-solid fa-phone"></i>
                        <h4>Phone Number</h4>
                    </div>

                    <div className="contact_item_inf">
                    <p>234-9876-5400</p>
                    <p>888-0123-4567</p>
                    </div>
                </div>
                <div className="contact_item">
                    <div className="icon_div">
                        <i className="fa-solid fa-fax"></i>
                        <h4>FAX</h4>
                    </div>

                    <div className="contact_item_inf">
                    <p>1-234-567-8900</p>
                    </div>
                </div>
                <div className="contact_item">
                    <div className="icon_div">
                        <i className="fa-solid fa-envelope"></i>
                        <h4>Email</h4>
                    </div>

                    <div className="contact_item_inf">
                    <p>hello@gmail.com</p>
                    </div>
                </div>
            
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4098483893886!2d44.5100656765218!3d40.17769157015255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfa28499691%3A0x2bde14d127166c74!2z0J_Qu9C-0YnQsNC00Ywg0KDQtdGB0L_Rg9Cx0LvQuNC60Lg!5e0!3m2!1sru!2sam!4v1712858858660!5m2!1sru!2sam" style={{width:"80%", height:"40vh", style:"border:0;", allowfullscreen:"", loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
         
        </div>
        <Footer/>
    </div>
  )
}

export default ContactPage