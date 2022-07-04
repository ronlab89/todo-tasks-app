import React, { useContext } from 'react'
import { favoriteContext } from '../context/FavoriteProvider'
import Title from './Title'

const ProjectFavorite = () => {

  const {favorites, isFavorite} = useContext(favoriteContext);

  console.log(favorites.length);

  return (
    <section className='card card-fav-project'>
        <Title text='Proyectos favoritos' className='new-project' />
        <section className="row mt-3">
          {
            favorites.map(pro => (
              <div className='row justify-content-start align-items-center mb-2' key={pro.idpro}>
                <div className='col-1 p-0'>
                  <span className='icon-fav'>{pro.icon}</span>
                </div>
                <div className='col-10'>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className='color-project me-2' style={{backgroundColor: pro.color}}></div>
                  <div>{pro.project}</div>
                </div>
                  <div className='ms-3 fw-bold'>{pro.area}</div>
                </div>
              </div>
          ))
          

          }
        </section>
    </section>
  )
}

export default ProjectFavorite