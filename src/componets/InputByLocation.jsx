import React, { useRef, useState } from 'react'
import getRandomId from '../utilis/getRandomId'

const InputByLocation = ({setNumberByInput}) => {

    const [errorMessage, setErrorMessage] = useState('')

    const valueInput = useRef()

    const handleSubmitForm =e=>{
            e.preventDefault()
            const enteredValue = valueInput.current.value.trim();

            /*verificamos el numero del 1 al 126*/

            const isvaluedNumber = /^[1-9][0-9]?$|^1[01][0-9]$|^12[0-6]$/.test(enteredValue)

            if (isvaluedNumber) {
                setNumberByInput(enteredValue)
                setErrorMessage('')
            }else{
                setErrorMessage('plese enter a number between 1 and 126')
                setTimeout(() => {
                   setErrorMessage('') 
                }, 3000);
            }

            valueInput.current.value = ''
    }

  const handleRandomResident =()=>{
    setNumberByInput(getRandomId(126));
  }
    
  return (
    <>
    <div className='app__input'>

    <div className='input__Form'>
        <form className='form' onSubmit={handleSubmitForm} title='Enter a number 1 to 126'>
            <input className='inp39' ref={valueInput} type="number" />
            <button className="w3-button w3-blue w3-border w3-border-white w3-round-large"><span className="bn39span">Search</span></button>
        </form>
        <div>
        {
            errorMessage && <p>{errorMessage}</p>
        }
        </div>
    </div>
    <div>
         <button onClick={handleRandomResident} className="w3-button w3-blue w3-border w3-border-white w3-round-large" title='random location'>Random Locations</button>
    </div>
    </div>
    </>
  )
}

export default InputByLocation