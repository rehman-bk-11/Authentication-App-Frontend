import React, { useState } from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/authSlice'; 

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            console.log(response)
            const result = await response.json();

            if (response.ok) {
                dispatch(login({ token: result.token, user: result.user }));

                localStorage.setItem("token", result.token);

                navigate("/dashboard");
            } else {
                alert("Login failed:", result.message);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setFormData({
                email: "",
                password: ""
            });
        }
    };

    return (
      <div className='center-form'>
      <Form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
              />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="Password"
                  name="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleInputChange}
              />
          </Form.Group>
          <Button variant='dark' type='submit' className='w-100'>
              Login
          </Button>
      </Form>
  </div>
    );
};

export default Login;
