import React from 'react'

export default function About(props) {
  return (
    <div className='d-flex align-items-center' style={{color : props.mode==='dark'?'white':'black'}}>
      <>
      <div>
      <h1>About Us</h1>
      <p>
        Welcome to our Text-to-Base64 Conversion and Decryption Web App! We are a group of enthusiastic third-year students dedicated to making data encoding and decoding more accessible and user-friendly.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to provide a seamless and efficient tool for converting text to Base64 and decrypting Base64-encoded text. We aim to simplify the process, making it easy for users to encode and decode information for various applications.
      </p>

      <h2>Features</h2>
      <ul>
        <li>Text to Base64 Conversion</li>
        <li>Base64 to Text Decryption</li>
        {/* Add more features as necessary */}
      </ul>
      <h2>Contact Us</h2>
      <p>
        We value your feedback and questions. Feel free to reach out to us at <a href="mailto:deepchhegaliya5112003@gmail.com">deepchhegaliya5112003@gmail.com</a>. We're here to assist you and make our app even better!
      </p>
    </div>
      </>
    </div>
  )
}
