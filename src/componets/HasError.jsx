import React from 'react'

const HasError = ({msjError}) => {
 
    const handleRefresh = () => {
        window.location.reload(); // Esto recarga la página
      };
    
      return (
        <div className='app__error' >
            <h2>No se puede acceder a este sitio web</h2>
            <p>No se ha podido encontrar la direccion IP del servidor de <b>Rick and Mortin Api</b></p>
            <p>Prueba a:</p>
            <ul className='list__error-items'>
                <li> <a href="https://support.microsoft.com/es-es/windows/comprobar-tu-estado-de-conexi%C3%B3n-de-red-efb4fb41-f751-567a-f60f-aac9114659a5#:~:text=Seleccione%20Configuraci%C3%B3n%20%3E%20Red%20%26%20Internet.,aparecer%C3%A1%20en%20la%20parte%20superior.&text=Windows%2010%20te%20permite%20comprobar,de%20red%20e%20intentar%20corregirlos."  target="_blank">Comprobar la conexion</a></li>
                <li><a href="https://proxy-seller.com/es/blog/c_mo_comprobar_la_configuraci_n_del_proxy_y_del_cortafuegos/" target='black'>Comprobar el proxy y el cortafuegos</a></li>
             
                <li><a href="https://support.microsoft.com/es-es/windows/solucionar-problemas-de-conexi%C3%B3n-wi-fi-en-windows-9424a1f7-6a3b-65a6-4d78-7f07eee84d2c#:~:text=Para%20ejecutar%20el%20solucionador%20de,de%20la%20red%20%26%20Internet%20%3E.&text=En%20Cambiar%20la%20configuraci%C3%B3n%20de,si%20se%20soluciona%20el%20problema."  target="_blank">Ejecutar el Diagnostico de Red de Window</a></li>
                <li>{msjError}</li>
            </ul>
            <div className='btn'>
            <button   onClick={handleRefresh} className="bn62">Refrescar </button>
            </div>
             
      
        </div>
  )
}

export default HasError