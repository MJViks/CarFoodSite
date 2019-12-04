import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from "../firebase"
const Registration = (props) => {
    const {
        buttonLabel,
        className,
        TNClose,
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => { setModal(!modal); TNClose() }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [chPassword, setChPassword] = useState('');
  

    return (
        <div>
            <Button className="m-2" color="outline-warning" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>
                    Регистрация
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="regName">
                                Имя
                            </Label>
                            <Input type="Name" id="regName" autoFocus value={name} onChange={e => setName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="regEmail">
                                Email
                            </Label>
                            <Input type="email" id="regEmail" placeholder="@" value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="regPassword">
                                Пароль
                            </Label>
                            <Input type="password" id="regPassword" placeholder="A-Z a-z 0-9" value={password} onChange={e => setPassword(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="regPasswordCh">
                                Повторите пароль
                            </Label>
                            <Input type="password" id="chPasswordCh" value={chPassword} onChange={e => setChPassword(e.target.value)} placeholder="A-Z a-z 0-9" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={onRegister}>
                        Регистрация
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );

    async function onRegister() {
        if (name === '' || password === '' || chPassword === '' || email === '') {
            alert('Не все поля заполнены!');
        }else if (password !== chPassword) {
            alert('Пароли не совподают!');
        } else if (name.length < 3) {
            alert('Имя слишком короткое! \n Минимум 3 символа!');
        } else {
            await firebase.register(name, email, password).then(toggle()).catch(err => alert(err.message));
        }

    }
}

export default Registration;