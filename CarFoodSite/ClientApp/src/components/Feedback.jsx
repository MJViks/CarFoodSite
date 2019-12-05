import React, { Component } from 'react';
import {
    Col, Row, Button, FormGroup, Label, Input, Container, Card, CardHeader, CardFooter, CardBody,
    CardText
} from 'reactstrap';
import firebase from "../firebase"

export class Feedback extends Component {
    static displayName = Feedback.name;

    constructor(props) {
        super(props)
        this.fillFeedback()
        this.state = {
            text: "",
            select: "Замечательно",
            names: [],
            emails: [],
            texts: [],
            colors: [],
        };
    }


    fillFeedback = async () => {
        await firebase.readFeedback().then(() => {
            const JSONFeedback = JSON.parse(firebase.feedback)
            let names = []
            let emails = []
            let texts = []
            let colors = []
            for (let users in JSONFeedback) {
                names.unshift(users)
                emails.unshift(JSONFeedback[users]['email'])
                texts.unshift(JSONFeedback[users]['text'])
                colors.unshift(JSONFeedback[users]['select'])
            }
            this.setState({ names: names, emails: emails, texts: texts, colors: colors })
        })
    }

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

                            <Container className="text-white-75 ">
                                <Row form>
                                    <Col className="h-100">
                                        <FormGroup >
                                            <Label for="exampleText">Отзыв</Label>
                                            <Input type="textarea" className="h-130-px" placeholder="Очень супер! Очень пупер!" id="ibText" onChange={e => this.setState({ text: e.target.value })} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <legend>Оцените нас</legend>
                                        <Input type="select" name="select" id="ibSelect" onChange={e => this.setState({ select: e.target.value })}>
                                            <option>Замечательно</option>
                                            <option>Норм</option>
                                            <option disabled>Ужас..</option>
                                        </Input>
                                    </Col>
                                </Row>
                                <Button className="btn-info btn-lg mt-4" onClick={this.sendFeedback}>Отправить</Button>
                            </Container>
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

                            {this.state.names.map((name, i) =>
                                <Col sm="4" className="pt-3">
                                    <Card>
                                        <CardHeader>
                                            {name}
                                        </CardHeader>
                                        <CardBody>
                                            <CardText>
                                                {this.state.texts[i]}
                                            </CardText>
                                        </CardBody>
                                        <CardFooter className="feedback-medium">
                                            {this.state.emails[i]}
                                        </CardFooter>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

    swichColorFeedback = (select) => {
        alert(select)
        switch (select) {
            case 'Норм': return "feedback-medium"
            case 'Замечательно': return "feedback-high"
            case 'Ужас..': return "feedback-low"
            default: return ''
        }
    }

    sendFeedback = async () => {
        if (!firebase.getCurrentUsername())
            alert('Отзывы могут оставлять лишь зарегестрированные пользователи!');
        else if (!this.state.text)
            alert('Отзыв не может быть пустым!');
        else {
            firebase.writeFeedback(this.state.text, this.state.select);
            this.fillFeedback();
        }
    }

}