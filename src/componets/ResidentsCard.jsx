import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ResidentsCard = ({url}) => {

   const [residents, getAllResidents]= useFetch(url);

   useEffect(() => {
        getAllResidents()
   }, [])
  
  
  return (
    <>
   
      <article className='flip-card'>

      <div className='flip-card-inner'>
     <div className='flip-card-front'>
     <h3 className='card__title'>{residents?.name}</h3>

       <div className='figure__status'>
         <div className='resident__status'>
           
           <div className={`resident__cicle ${residents?.status}`}></div>
           <span className='status'>{residents?.status}</span>
         </div>
           
           <figure className='card__img'>
               <img className='img__card' src={residents?.image} alt="" />
           </figure>
       </div>
     </div>
      

       <section className='flip-card-back'>
          <div className='filp-body-back'>
          <ul className='items'>
               <li className='items__int' ><b>Name:</b> <span>{residents?.name}</span></li>
               <li className='items__int' ><b>Origin:</b> <span>{residents?.origin.name}</span></li>
               <li className='items__int' ><b>Species:</b> <span>{residents?.species}</span></li>
               <li className='items__int' ><b>Type:</b> <span>{residents?.type}</span></li>
               <li className='items__int' ><b>Gender:</b> <span>{residents?.gender}</span></li>
               <li className='items__int' ><b>Episode:</b> <span>{residents?.episode.length}</span></li>
           </ul>
          </div>
       </section>
       </div>
   </article>

  
  
    </>
  )
}

export default ResidentsCard