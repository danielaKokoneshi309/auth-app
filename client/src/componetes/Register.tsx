import axios from "axios";
import { useState } from "react";
import { Form, Input, Button, Alert } from 'antd';

function Register() {
    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e:any)=> {
      e.preventDefault();
      try {
        const { data } = await axios.post('/api/register', { name,email,  password });
        localStorage.setItem('token', data.token);
        window.location.href = '/register';
      } catch (err) {
        setError('Username already taken');
      }
    };
  
    return (
      <div>
        <h2>Register</h2>
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
        {error && <p>{error}</p>}
      </div>
    );
  }
  export default Register;