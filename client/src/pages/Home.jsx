import { Carousel } from 'react-bootstrap';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1>Читай только у нас</h1>

      <div className="home-carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Slide+1"
              alt="Первый слайд"
            />
            <Carousel.Caption>
              <h3>Первый слайд</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Slide+2"
              alt="Второй слайд"
            />
            <Carousel.Caption>
              <h3>Второй слайд</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Slide+3"
              alt="Третий слайд"
            />
            <Carousel.Caption>
              <h3>Третий слайд</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}