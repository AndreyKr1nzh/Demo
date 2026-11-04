import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { products } from '../data/products';

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <Container className="my-4">
        <Alert variant="warning">Книга не найдена</Alert>
        <Link to="/catalog">Вернуться в каталог</Link>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Link to="/catalog" className="d-inline-block mb-3">
        &larr; Назад в каталог
      </Link>

      <Row className="g-4">
        <Col md={6}>
          <img src={product.image} alt={product.name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p className="fs-4 fw-bold">{product.price} ₽</p>

          <ul className="list-unstyled">
            <li>Автор: {product.author}</li>
            <li>Страна издания: {product.country}</li>
            <li>Год издания: {product.year}</li>
            <li>ISBN: {product.model}</li>
          </ul>

          <Button variant="primary" className="mt-3">
            В корзину
          </Button>
        </Col>
      </Row>
    </Container>
  );
}