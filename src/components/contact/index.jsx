import React from 'react'
import "../contact/Contact.css";

function Contacto() {
  return (
    <div id='Contacto' className='containercontacto d-flex aling-items-center justify-content-center flex-wrap mt-1 p-5'>
        <h1 className='titulo'>Contacto</h1>
        <a href="#" target='_black'><img width="48" height="48" className='icon' src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></a>
    <a href="#" target='_black' ><img width="48" height="48" className='icon' src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/></a>
   <a href="#" target='_black'><img width="48" height="48" className='icon' src="https://img.icons8.com/ios-glyphs/30/important-mail.png" alt="important-mail"/></a>
    </div>
  )
}

export default Contacto