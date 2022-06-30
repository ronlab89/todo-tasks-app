import React from 'react'
import { FaCheck} from 'react-icons/fa'

const FinishTasks = () => {
  return (
    <section className='card card-finish-task'>
        <div className="p-3">
            <FaCheck />
            <span className='ms-5 count-project'>Aqui va #</span><span className='ms-2 count-project'>Tareas finalizadas</span>
        </div>
    </section>
  )
}

export default FinishTasks