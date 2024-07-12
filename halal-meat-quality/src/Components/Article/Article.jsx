import React from 'react';
import './Article.scss';

const Article = () => {
  return (
    <div className='article'>
      <div className='title-article'>
        <h1>Artículos para leer</h1>
      </div>
      <div className="Container">
        <div className="box-article">
          <h2>bienestar animal</h2>
          <img src="/Article2.jpg" alt="Bienestar animal" />
          <p>
            En el Corán, Allah (swt) dice acerca de los animales (especialmente aquellos que van a ser sacrificados):
            « Así os los hemos sujetado para que seáis agradecidos. » [El Noble Corán, 22:36]
            Los animales juegan un papel importante en nuestras vidas, ya sea proporcionando alimento, como medio de transporte,
            o brindándonos apoyo emocional y alegría. Pero, ¿qué dice el Islam sobre la importancia de los animales y nuestra responsabilidad hacia ellos?
          </p>
          <a href="/bienestar-animal" className="read-more">Leer más</a>
        </div>
        <div className="box-article">
          <h2>La certificación halal</h2>
          <img src="/Article3.jpg" alt="Certificación halal" />
          <p>
            El sacrificio ritual no siempre está permitido, pero incluso cuando lo está, es muy difícil garantizar que el producto etiquetado 
            como halal contenga exclusivamente materias halal. A continuación, se presenta un resumen de las 
            dificultades prácticas encontradas para certificar el carácter halal de las carnes:
          </p>
          <a href="/certificacion-halal" className="read-more">Leer más</a>
        </div>
        <div className="box-article">
          <h2>El Halal: una adoración</h2>
          <img src="/Article4.jpg" alt="El Halal" />
          <p>
            El halal es etimológicamente lo lícito y todo lo que Dios ha permitido al Hombre hacer, decir, consumir, etc. Así, para conocer el halal, 
            es necesario referirse a las enseñanzas del Creador. Pero antes de buscar conocer estos preceptos, es importante comprender el sentido 
            de las enseñanzas divinas inherentes al halal.
          </p>
          <a href="/halal-adoracion" className="read-more">Leer más</a>
        </div>
      </div>
    </div>
  );
}

export default Article;
