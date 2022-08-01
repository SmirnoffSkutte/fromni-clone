import React, { useState } from 'react'
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '../api/auth.service';

export default function AuthPage() {
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === '/login'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const click=async function () {
        
    }
    return (
    <Container
    className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}
>
    <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
            <Form.Control
                className="mt-3"
                placeholder="Введите ваш email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
                className="mt-3"
                placeholder="Введите ваш пароль..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                {isLogin ?
                    <div>
                        Есть аккаунт? <NavLink to={'/login'}>Войдите!</NavLink>
                    </div>
                    :
                    <div>
                        Нет аккаунта? <NavLink to={'/registration'}>Зарегистрируйтесь!</NavLink>
                    </div>
                }
                <Button
                    variant={"outline-success"}
                    onClick={click}
                >
                    {isLogin ? 'Войти' : 'Регистрация'}
                </Button>
            </Row>

        </Form>
    </Card>
</Container>
  )
}
