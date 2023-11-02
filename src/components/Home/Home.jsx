
import Carousel from 'react-bootstrap/Carousel';


function Home(){
    return(
        <div>
        <div>
            <h1 >Bienvenid@s a Cursos</h1>
            <h5>Aprender un idioma nunca fue tan facil!!</h5>
            <p>Sumate a nuestras propuestas online</p>
            <h6>Nuestros cursos son remoto y ofrecen flexibilidad horaria</h6>
        </div>

<div className='borderCarousel'>
<Carousel>
  <Carousel.Item>
  <img src="img/carrousel/imagen1.jpg" alt="Imagen1" />
  </Carousel.Item>
  <Carousel.Item>
  <img src="img/carrousel/imagen2.jpg" alt="Imagen2" />
  </Carousel.Item>
  <Carousel.Item>
  <img src="img/carrousel/imagen3.jpg" alt="Imagen3" />
  </Carousel.Item>
  <Carousel.Item>
  <img src="img/carrousel/imagen4.jpg" alt="Imagen4" />
  </Carousel.Item>
</Carousel>
</div>
</div>
    )
}

export default Home;
