
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomId from './utilis/getRandomId'
import InfoDimension from './componets/InfoDimension'
import ResidentsCard from './componets/ResidentsCard'
import InputByLocation from './componets/InputByLocation'
import HasError from './componets/HasError'
import './styles/haserror.css'
import './styles/loading.css'
import './styles/residents.css'
import './styles/info.css'
import './styles/footer.css'
import Loading from './componets/Loading'
import NotData from './componets/NotData'
import Footer from './components/Footer'

function App() {

  const idRandom = getRandomId(126)
  const [numberByInput, setNumberByInput] = useState(idRandom);
  

  const url = `https://rickandmortyapi.com/api/location/${numberByInput}`
  
  const [locations, getAllLocations, iserror, msjError, isLoading] = useFetch(url);

  useEffect(() => {
    getAllLocations()
  }, [numberByInput])
  
  
  



  return (
    <>

    
   <div className='img__head'>
        <div className='img__primary'>
          <img className='head_img' src="./head.jpg" alt="img-title" />
        </div>
      </div>
    {
      isLoading 
        ?  <Loading/>
           : iserror 
               ?  <HasError msjError={msjError}/>
                  :  <div className='app'>
                 

                  <header className='app__info'>
                    <InfoDimension locations={locations}/>
                    <InputByLocation setNumberByInput={setNumberByInput}/>
                  </header>

                  <section className='app__residents'>
                    {
                      locations?.residents.length === 0? <NotData/>
                           : locations?.residents.map(url =>(
                              <ResidentsCard url={url}
                                            key={url}
                                            
                              />
                      ))
                    }
                  </section>
                  <footer>
                    <Footer/>
                  </footer>
                </div>
        }
      
 
    </>
  )
}

export default App
