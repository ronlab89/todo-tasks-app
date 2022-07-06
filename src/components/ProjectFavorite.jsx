import React, { useContext } from 'react'
import { favoriteContext } from '../context/FavoriteProvider'
import Title from './Title'

const ProjectFavorite = () => {

  const {favorites, isFavorite} = useContext(favoriteContext);

  console.log(favorites.length);

  return (
    <section className='card card-fav-project'>
        <Title text='Proyectos favoritos' className='new-project' />
        <section className="row mt-3 mx-auto">
          {
            favorites.map(pro => (
            <div className="col-5 border rounded mb-2 me-3">
              <div className='row justify-content-start align-items-center mb-2' key={pro.idpro}>
                <div className='col-12 d-flex align-items-center'>
                  <div className='color-project-favorite ms-1 me-2' style={{backgroundColor: pro.color}}></div>
                  <div>{pro.project}</div>
                </div>
                <div className='col-12 d-flex align-items-center'>
                  <span className='icon-fav'>{pro.icon}</span>
                  <div className='ms-1'>{pro.area}</div>
                </div>
              </div>
            </div>
          ))
          

          }
        </section>
    </section>
  )
}

export default ProjectFavorite