import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import firebase from "../firebase"

const Login = (props) => {
    const {
        buttonLabel,
        className,
        TNClose,
        setName
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => { setModal(!modal); TNClose() }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <Button className="m-2" color="outline-success" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>
                    Авторизация
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="logEmail">Email</Label>
                            <Input type="email" name="email" id="logEmail" placeholder="@" autoFocus  value={email} onChange={e => setEmail(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="logPassword">
                                Пароль
                            </Label>
                            <Input type="password" name="password" id="logPassword" value={password} onChange={e => setPassword(e.target.value)}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={login}>
                        Войти
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );

    async function login() {
        await firebase.login(email, password).then(() => { if (firebase.getCurrentUsername()) toggle() }).catch(err => alert(err.message));
        setName(firebase.getCurrentUsername());
    }

    function logout() {
         firebase.logout().then(toggle()).catch(err => alert(err.message));
    }
}

export default Login;