import React, { Component } from "react";
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, Alert, Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

import firebase from "../firebase"

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);
        firebase.getStateuser(this.setName);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleNavbarClose = this.toggleNavbarClose.bind(this);
        this.state = {
            collapsed: true,
            login: false,
            navWhite: false,
            name: null
                //localStorage.getItem('authUser')
            //localStorage.setItem('authUser', this.getCurrentUsername());

        };
    }


    alertName = () => {
        return (
            <NavItem className="nav-login">
                <Alert className="m-2 py-0 " color="warning">
                    {this.state.name}
                </Alert>
                <Button className="m-2" color="outline-warning" onClick={() => { this.toggleNavbarClose(); this.logOut() }}>
                    Выход
                </Button>
            </NavItem>
        );
    }

    logOut = async() => {
         if (window.confirm(`Вы уверены?`))
            await firebase.logout().catch(err => alert(err.message));
            this.setName(null);
        
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    toggleNavbarClose() {
        if (!this.state.collapsed)
            this.setState({
                collapsed: true
            });
    }


    setName = (value) => {
        this.setState({ name: value });
    }

    loginBtn = (event) => {
        return (
            <NavItem className="nav-login">
                <Registration TNClose={event} buttonLabel="Регистрация" />
                <Login setName={this.setName} TNClose={event} buttonLabel="Войти" />
            </NavItem>
        );
    };

    static chNavbarScrolled() {
        const statiClass = "navbar navbar-expand-lg navbar-light fixed-top py-3";
        if (window.pageYOffset > 120)
            document.getElementById("mainNav").className = statiClass + " navbar-scrolled";
        else
            document.getElementById("mainNav").className = statiClass;
    }

    render() {
        window.addEventListener("scroll", NavMenu.chNavbarScrolled);
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                <Container>
                    <NavbarBrand className="navbar-brand js-scroll-trigger" tag={Link} to="/">
                        Car Food
                    </NavbarBrand>
                    <NavbarToggler className="navbar-toggler-right" type="button" data-toggle="collapse" onClick={this.toggleNavbar} />
                    <Collapse className="navbar-collapse" isOpen={!this.state.collapsed}>
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <NavItem>
                                <NavLink activeClassName="ch" className="nav-link " exact onClick={this.toggleNavbarClose} to="/">
                                    Главная
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="ch" className="nav-link " onClick={this.toggleNavbarClose} to="/ab">
                                    О нас
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="ch" className="nav-link" onClick={this.toggleNavbarClose} to="/doc">
                                    Руководство
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="ch" className="nav-link" onClick={this.toggleNavbarClose} to="/dw">
                                    Скачать
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink activeClassName="ch" className="nav-link" onClick={this.toggleNavbarClose} to="/fb">
                                    Отзывы
                                 </NavLink>
                            </NavItem>
                            {this.state.name === null ? this.loginBtn(this.toggleNavbarClose) : this.alertName()}

                        </ul>
                    </Collapse>
                </Container>
            </nav>
        );
    }
}
