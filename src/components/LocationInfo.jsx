import React from 'react'

const LocationInfo = ({locations}) => {

    
  return (
    <section>
    <h2>{locations?.name}</h2>

    <ul>
        <li><b>Type:</b> <span>{locations?.type}</span></li>
        <li><b>Dimension:</b> <span>{locations?.dimension}</span></li>
        <li><b>Population:</b> <span>{locations?.residents.length}</span></li>
        <li><b>Id:</b> <span>{locations?.id}</span></li>
    </ul>
  </section>
  )
}

export default LocationInfo