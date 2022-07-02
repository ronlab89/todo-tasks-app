import React, { useEffect } from 'react'
import { FaProjectDiagram} from 'react-icons/fa'
import { useFirestore } from '../hooks/useFirestore'

const ProjectCount = () => {

  const {dataProjects} = useFirestore();

  return (
    <section className='card card-count-project'>
        <div className='p-3'>
          <FaProjectDiagram />
          <span className='ms-5 count-project'>{dataProjects.length}</span><span className='ms-2 count-project'>Proyectos creados</span>
        </div>
    </section>
  )
}

export default ProjectCount