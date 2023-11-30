import React from 'react'

const InfoDimension = ({locations}) => {

  
  return (
  
    <article className='info__section'>
        <h2 className='info__title'>{locations?.name}</h2>

        <div >
            <ul className='info__items'>
                <li><b>Dimension:</b> <span>{locations?.dimension}</span></li>
                <li><b>Type:</b> <span>{locations?.type}</span></li>
                <li><b>Residents:</b> <span>{locations?.residents.length}</span></li>
                <li><b>Id:</b> <span>{locations?.id}</span></li>
            </ul>
        </div>
    </article>
  
  )
}

export default InfoDimension