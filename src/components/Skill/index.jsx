import React from 'react'
import "../Skill/skill.css" ;

function Skill() {
  return (
    <div id='Skill' className='containerSkill d-flex aling-items-center justify-content-center flex-wrap mt-5 p-5'>
    <h1 className='titulo'>Skill</h1>
    <div className='contenedorSkill d-flex  '>
    <div className="container">
    <img width="50" className='icon' height="50" src="https://img.icons8.com/ios-filled/50/html-5--v1.png" alt="html-5--v1"/>
          <p>Html5</p>
        </div>

        <div className="container">
        <img width="64" height="64"  src="https://img.icons8.com/glyph-neue/64/css.png" alt="css"/>
          <p>css3</p>
        </div>

        <div className="container">
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/javascript-logo.png" alt="javascript-logo"/>
          <p>Javascript</p>
        </div>

        <div className="container">
        <img width="70" height="70" src="https://img.icons8.com/dotty/80/react.png" alt="react"/>
          <p>React</p>
        </div>

        <div className="container">
        <img width="60" height="60" src="https://img.icons8.com/ios-filled/50/git.png" alt="git"/>
          <p>Git</p>
        </div>

    </div>
    </div>
  )
}

export default Skill