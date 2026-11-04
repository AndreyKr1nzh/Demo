import { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';

export default function Catalog() {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('new');

  const visible = products
    .filter((p) => p.inStock)
    .filter((p) => category === 'all' || p.category === category)
    .sort((a, b) => {
      switch (sort) {
        case 'year':
          return b.year - a.year;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        default:
          return b.id - a.id;
      }
    });

  return (
    <Container className="my-4">
      <h2 className="mb-4">Каталог книг</h2>

      <Row className="mb-4 g-3">
        <Col md={6}>
          <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={6}>
          <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="new">По новизне</option>
            <option value="year">По году издания</option>
            <option value="name">По наименованию</option>
            <option value="price">По цене</option>
          </Form.Select>
        </Col>
      </Row>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {visible.map((p) => (
          <Col key={p.id}>
            <Card as={Link} to={`/product/${p.id}`} className="h-100 text-decoration-none text-dark">
              <Card.Img variant="top" src={p.image} alt={p.name} />
              <Card.Body>
                <Card.Title className="fs-6">{p.name}</Card.Title>
                <Card.Text className="fw-bold">{p.price} ₽</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {visible.length === 0 && <p className="text-center mt-4">Книг не найдено</p>}
    </Container>
  );
}