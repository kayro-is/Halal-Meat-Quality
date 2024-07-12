import React from 'react';
import './Mission.scss'

const Mission = () => {
  return (
    <div className='parallax'>
        <div className='title-mission'>
        <h1>Nuestra misión</h1>
        </div>
        <div className="listContainer" >
        <div className="box">

                        <h2>Al servicio de los consumidores</h2>
                        <p>
                        Para garantizar a los consumidores el carácter halal de los productos, 
                        nuestros empleados están presentes a lo largo de toda la cadena,
                         desde el sacrificio del animal hasta el embalaje y el sellado de los productos.
                        </p>
                        
                    </div>
                    <div className="box">

                        <h2>Preservar el halal en el entorno industrial</h2>
                        <p>
                        Los mataderos industriales son hoy en día espacios confinados prohibidos al público en general.
                         Por lo tanto, los consumidores no tienen ninguna visión de la manera en que los animales son tratados y sacrificados.
                        </p>
                
                    </div>
                    <div className="box">

                        <h2>Desarrollar una certificación <br />desinteresada</h2>
                        <p>
                        Los consumidores están cada vez más preocupados por las condiciones de vida y de sacrificio de los animales destinados al consumo.
                         Una certificación independiente permitiría tranquilizar a los consumidores al ofrecerles una garantía objetiva del 
                         cumplimiento de las normas éticas y sanitarias.
                        </p>
                        
                    </div>
                </div>
        
    </div>
  );
}

export default Mission;