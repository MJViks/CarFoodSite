import React, { Component } from 'react';
import {
    Col, Row, Button, Form, FormGroup, Label, Input, Container, Card, CardHeader, CardFooter, CardBody,
    CardText
} from 'reactstrap';

export class Feedback extends Component {
    static displayName = Feedback.name;

    render() {
        return (
            <div className="PageAnimate">
                <div className="head-container  bg-img-4 ">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white ">
                                Оставьте ваше мнение
                            </h2>
                            <hr className="divider light my-4" />

                            <Form className="text-white-75 ">
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleName">Имя</Label>
                                            <Input type="Name" placeholder="Вася" name="name" id="ibName" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" name="email" id="ibEmail" placeholder="@" />
                                        </FormGroup>
                                    </Col>

                                    <Col className="h-100">
                                        <FormGroup >
                                            <Label for="exampleText">Отзыв</Label>
                                            <Input type="textarea" className="h-130-px" placeholder="Очень супер! Очень пупер!" name="text" id="ibText" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <legend>Оцените нас</legend>
                                        <Input type="select" name="select" id="ibSelect">
                                            <option>Замечательно</option>
                                            <option>Норм</option>
                                            <option disabled>Ужас..</option>
                                        </Input>
                                    </Col>
                                </Row>
                                <Button className="btn-info btn-lg mt-4">Отправить</Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className="body-container bg-img-orange">
                    <h2 className="text-center text-white mt-0">
                        Другие отзывы
                    </h2>
                    <hr className="light divider my-4" />
                    <Container >
                        <Row >


                            <Col sm="4" className="pt-3">
                                <Card>
                                    <CardHeader>Имя</CardHeader>
                                    <CardBody>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                    </CardBody>
                                    <CardFooter>Email</CardFooter>
                                </Card>
                            </Col>


                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}