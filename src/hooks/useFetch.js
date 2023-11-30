import axios from "axios";
import { useState } from "react"


const useFetch = (url) => {
  
    const [state, setState] = useState();
    const [iserror, setIsError] = useState(false)
    const [msjError, setMsjError] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const getApi = ()=>{
        setIsLoading(true)
        axios.get(url)
        .then(res => {setState(res.data)
            setIsError(false)
        })
        .catch(err => {setMsjError(err.message)
            setIsError(true)
        })
        .finally(()=> setIsLoading(false))
    }

    return [ state, getApi, iserror, msjError, isLoading ]
}

export default useFetch