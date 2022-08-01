import React, { useContext, useEffect, useState } from 'react'
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthService } from '../api/auth.service';
import { AuthContext } from '../AuthContext';

export default function RegisterPage() {
    const {isAuth,setIsAuth}=useContext(AuthContext)
    let redirect=useNavigate()
    const [able,setAble]=useState(false)
    const [passwordError,setPasswordError]=useState("Пароль пуст")
    const [emailError,setEmailError]=useState("Email пуст")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordDirty,setPasswordDirty]=useState(false)
    const [emailDirty,setEmailDirty]=useState(false)
    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    const emailHandler=(e)=>{
        setEmail(e.target.value)
        const re=validateEmail(email)
        if(!re){
            setEmailError("Неверный email!")
        } else {
            setEmailError("")
        }
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value)
        if(e.target.value.length < 3){
            setPasswordError("Пароль меньше 3 символов!")
        } else {
            setPasswordError("")
        }
    }
    const blurHandler=(e)=>{
        switch (e.target.name){
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }
    const click=async function () {
        AuthService.login(email,password)
            .then(res=>{
                setIsAuth(true)
                redirect("/")
            })
            .catch(error=>{
                alert("Неправильные данные")
            })
    }
    useEffect(()=>{
        if(emailError || passwordError){
            setAble(false)
        } else {
            setAble(true)
        }
    },[emailError,passwordError])
    // console.log(able)
    return (
    <Container
    className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}
>
    <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">Логин</h2>
        <Form className="d-flex flex-column">
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
            <Form.Control
                className="mt-3"
                placeholder="Введите ваш email..."
                value={email}
                onBlur={e=>blurHandler(e)}
                name='email'
                onChange={e => emailHandler(e)}
            />
            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
            <Form.Control
                className="mt-3"
                onBlur={e=>blurHandler(e)}
                placeholder="Введите ваш пароль...(минимум 3 символа)"
                value={password}
                name='password'
                onChange={e => passwordHandler(e)}
                type="password"
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    <div>
                        Нет аккаунта? <NavLink to={'/registration'}>Зарегистрируйтесь!</NavLink>
                    </div>
                <Button
                    variant={"outline-success"}
                    disabled={!able}
                    onClick={click}
                >
                    Логин
                </Button>
            </Row>

        </Form>
    </Card>
</Container>
  )
}
