import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export default function Login() {
  const [form, setForm] = useState({
    login: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const messages = [];

    if (!form.login.trim()) messages.push('Логин обязателен');

    if (!form.password) messages.push('Пароль обязателен');
    else if (form.password.length < 6) messages.push('Пароль: минимум 6 символов');

    if (messages.length > 0) {
      setError(
        <>
          <strong>Исправьте ошибки:</strong>
          <ul className="mb-0 mt-2">
            {messages.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </>
      );
      return;
    }

    setSuccess('Вы успешно вошли!');
  };

  return (
    <Container className="my-4" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Вход</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Логин</Form.Label>
          <Form.Control name="login" value={form.login} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Войти
        </Button>
      </Form>
    </Container>
  );
}