import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';


const CardResidents = ({url}) => {


   const [res, getRes]= useFetch(url);
   

   useEffect(() => {
    getRes()
   }, [])
   
 
 
  return (
    <article>
        <h2>{res?.name}</h2>
        <div>
            <h3>{res?.status}</h3>
            <div> <img src={res?.image} alt={res?.name} /></div>
        </div>
<hr />
        <section>
            <ul>
                <li><b>Specie:</b> <span>{res?.species}</span></li>
                <li><b>Origin:</b> <span>{res?.origin.name}</span></li>
                <li><b>Episodes:</b> <span>{res?.episode.length}</span></li>
                <li><b>Gender:</b> <span>{res?.gender}</span></li>
            </ul>
        </section>
      
    </article>
  )
}

export default CardResidents