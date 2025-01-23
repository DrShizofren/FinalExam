import React from 'react'
import "./foter.css"
import "../../Assets/global.css";

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer">
                <div className="emailpart">
                    <p>Mary bird</p>
                    <div className="email">
                        <input type="email" />
                        <button>Send</button>
                    </div>
                </div>
                <div className="otherpart">
                    <ul className='footerul'>
                        <li className='head'>About</li>
                        <li>About Us</li>
                        <li>Our Partners</li>
                        <li>Our Services</li>
                    </ul>
                    <ul className='footerul'>
                        <li className='head'>Contact</li>
                        <li>Contact Us</li>
                        <li>FAQ Page</li>
                        <li>About Me</li>
                    </ul>
                    <h4>Follow us</h4>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer