import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      try {
        const { data } = await axios.post('/api/login', { username, password });
        localStorage.setItem('token', data.token);
        window.location.href= '/login';
      } catch (err) {
        setError('Invalid username or password');
      }
    };
  
  return (
    <div style={{ maxWidth: 300, margin: 'auto', padding: '50px' }}>
      <h2>Login</h2>
      <Form name="login" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
      {error && <Alert message={error} type="error" showIcon />}
    </div>
  );
}

export default Login;
