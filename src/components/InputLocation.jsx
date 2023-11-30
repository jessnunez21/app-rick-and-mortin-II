import React, { useRef } from 'react'

const InputLocation = ({setValueInputLocationByForm, valueInputLocationByForm}) => {

    const valueNumberLocation =  useRef()

    const handleInputLocation =e=>{
        e.preventDefault()
        setValueInputLocationByForm(valueNumberLocation.current.value.trim());
        valueNumberLocation.current.value = ''
    }

   
  return (
    <form onSubmit={handleInputLocation}>
        <input type="number" ref={valueNumberLocation} placeholder='Enter to location'/>
        <button>Search</button>
    </form>
  )
}

export default InputLocation