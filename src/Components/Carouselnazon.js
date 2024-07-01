import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Caruosel1 from '../Components/Images/Carousel/pexels-scottwebb-137603.jpg';
import Caruosel2 from '../Components/Images/Carousel/pexels-lum3n-44775-322207.jpg';
import Caruosel3 from '../Components/Images/Carousel/pexels-quang-viet-nguyen-107013384-14675876.jpg';
import Caruosel4 from '../Components/Images/Carousel/pexels-sambecerra-12934247.jpg';
import Caruosel5 from '../Components/Images/Carousel/pexels-karolina-grabowska-4887078.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Css/Carouselnazon.css'

const Carouselnazon = () => {
  return (
    <div className='carousel_sec'>
      <Carousel>
        <Carousel.Item>
          <img id='shoe'
            className="d-block w-100"
            src={Caruosel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Nazonbay</h3>
            <p>Shop smart, shop Nazonbay</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Caruosel2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Nazonbay</h3>
            <p>Discover deals at Nazonbay</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Caruosel3}
            alt="Third slide"
          />
          
          <Carousel.Caption>
            <h3>Nazonbay</h3>
            <p>Shop the best, only on Nazonbay</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id='shoe'
            className="d-block w-100"
            src={Caruosel4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Nazonbay</h3>
            <p>Experience shopping like never before at Nazonbay</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img id='shoe'
            className="d-block w-100"
            src={Caruosel5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> Nazonbay</h3>
            <p>Nazonbay: Bringing the world to your doorstep</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselnazon;
