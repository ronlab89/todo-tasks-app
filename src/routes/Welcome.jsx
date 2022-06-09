import React from 'react'
import NavbarWelcome from '../components/NavbarWelcome'

const Welcome = () => {
  return (
    <>
        <NavbarWelcome />
        <section className='container row g-0'>
            <article className="col-12">
                <p>Es momento de organizar tu día a día, se más productivo, agil y eficaz. <br /> ¿Estas list@ para comenzar una revolución en tu forma de gestionar proyectos y tareas?</p>
            </article>
            <article className="col-12"></article>
        </section>
    </>
  )
}

export default Welcome