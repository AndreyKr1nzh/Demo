import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const NAME_RE = /^[А-Яа-яЁё\s-]+$/;
const LOGIN_RE = /^[A-Za-z0-9-]+$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    patronymic: '',
    login: '',
    email: '',
    password: '',
    password_repeat: '',
    rules: false,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const messages = [];

    if (!form.name.trim()) messages.push('Имя обязательно');
    else if (!NAME_RE.test(form.name)) messages.push('Имя: только кириллица, пробел и тире');

    if (!form.surname.trim()) messages.push('Фамилия обязательна');
    else if (!NAME_RE.test(form.surname)) messages.push('Фамилия: только кириллица, пробел и тире');

    if (form.patronymic && !NAME_RE.test(form.patronymic))
      messages.push('Отчество: только кириллица, пробел и тире');

    if (!form.login.trim()) messages.push('Логин обязателен');
    else if (!LOGIN_RE.test(form.login))
      messages.push('Логин: только латиница, цифры и тире');

    if (!form.email.trim()) messages.push('Email обязателен');
    else if (!EMAIL_RE.test(form.email)) messages.push('Некорректный email');

    if (!form.password) messages.push('Пароль обязателен');
    else if (form.password.length < 6) messages.push('Пароль: минимум 6 символов');

    if (!form.password_repeat) messages.push('Повторите пароль');
    else if (form.password_repeat !== form.password) messages.push('Пароли не совпадают');

    if (!form.rules) messages.push('Необходимо согласие с правилами');

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

    setSuccess('Регистрация прошла успешно!');
  };

  return (
    <Container className="my-4" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Регистрация</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Имя</Form.Label>
          <Form.Control name="name" value={form.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Фамилия</Form.Label>
          <Form.Control name="surname" value={form.surname} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Отчество</Form.Label>
          <Form.Control name="patronymic" value={form.patronymic} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Логин</Form.Label>
          <Form.Control name="login" value={form.login} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
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

        <Form.Group className="mb-3">
          <Form.Label>Повтор пароля</Form.Label>
          <Form.Control
            type="password"
            name="password_repeat"
            value={form.password_repeat}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            name="rules"
            label="Я согласен с правилами регистрации"
            checked={form.rules}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Зарегистрироваться
        </Button>
      </Form>
    </Container>
  );
}