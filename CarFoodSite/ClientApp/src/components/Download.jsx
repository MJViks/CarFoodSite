import React, { Component } from 'react';
import { Button, Container } from "reactstrap";
try {
    var appExe = require("../apps/Setup.exe");
} catch (e) {
    appExe = undefined;
} 
export class Download extends Component {
    static displayName = Download.name;
    constructor(props) {
        super(props);
        this.state = { size: "" };

        if (appExe !== undefined)
        fetch(appExe.toString())
            .then(response => response.headers.get('Content-Length'))
            .then(data => { return (data / 1024)}).then(sizeOf => this.setState({ size: sizeOf }));
    }


    render() {
        return (
            <div className="PageAnimate">
                <div className="head-container  bg-img-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">
                                Установка
                            </h2>
                            <hr className="divider light my-4" />
                            <Container className="mt-5 pt-5">
                                <Button color="success" size="lg" className="btn-lg" block>
                                    <a href={appExe} download="Setup.exe" className="d-block text-decoration-none text-white">
                                        Скачать для Windows
                                    </a>
                                </Button>
                                <p className="text-white-50 mt-1">Размер {this.state.size} Кб</p>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}