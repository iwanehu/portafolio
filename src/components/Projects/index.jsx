import React from 'react'
import "./Projects.css";

function Projects() {
  return (
    <div id='Projects'>
    <h1 className='title text-center' >Proyectos</h1>
    <div className='proyect d-flex d-inline-flex flex-wrap justify-content-center'>
   <a href="/dskjs"> <div className='card bg-black m-4 '>
        <img src="/asset/proyectos/proyecto1.png" alt="buzoncorreo" />
        <h3 className='p-2'>Buzon correo</h3>
    </div></a>
   <a href="/dkdg"> <div className='card bg-black m-4 '>
        <img src="/asset/proyectos/proyecto2.png" alt="buzoncorreo" />
        <h3 className='p-2'>viajes</h3>
    </div></a>
  <a href="/sfs">  <div className='card bg-black m-4 '>
        <img src="/asset/proyectos/proyecto3.png" alt="buzoncorreo" />
        <h3 className='p-2'>Todo list</h3>
    </div></a>
    <a href="/ds"><div className='card bg-black m-4 '>
        <img src="/asset/proyectos/proyecto4.png" alt="buzoncorreo" />
        <h3 className='p-2'>Datos inmobiliarios</h3>
    </div></a>
    </div>
    
    </div>
  ) 
}

export default Projects