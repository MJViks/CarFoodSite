import React, { Component } from 'react';
import { Link } from "react-router-dom";
export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <header className="masthead PageAnimate ">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">
                                Прокорми себя и свой автомобиль
                            </h1>
                            <hr className="divider my-4"/>
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                            <p className="text-white-75 font-weight-light mb-5">
                                Цель проекта состоит в автоматизации большинства бизнес-процессов,
                                проходящих на территории АЗС. Начиная от закупок сырья и его учета,
                                заканчивая документооборотом в отделе кадров.
                            </p>
                            <Link className="btn btn-primary btn-xl js-scroll-trigger" to="/ab">
                                Узнать больше
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
