import React, { Component } from 'react';
import { Link } from "react-router-dom";
import heartSvg from "./img/heart.svg";
import webSvg from "./img/web.svg";
import compSvg from "./img/comp.svg";
import moneySvg from "./img/money.svg";

export class About extends Component {
    static displayName = About.name;

    render() {
        return (
            <section className="PageAnimate" id="services">
                <div className="head-container  bg-img-1">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">
                                Что происходит?
                            </h2>
                            <hr className="divider light my-4" />
                            <p className="text-white-75 font-weight-light mb-5">
                                Проблемная зона данной предметной области состоит в постоянной
                                нужде оформлять заказы на поставку товаров. Обработка данных соискателей,
                                а также работа с данными уже работающих сотрудников тормозит работу всего
                                предприятия, что приводит к ухудшению обслуживания клиентов.
                            </p>
                        </div>
                        <div className="col-lg-8 text-center">
                            <h2 className="font-weight-light mt-5 arrow">
                                <Link className="text-white-75 text-decoration-none d-block w-25 m-auto" to="/ab/answer">
                                    ↓
                                </Link>
                            </h2>
                        </div>
                    </div>

                </div>

                <div className="body-container bg-img-orange-white" name={"answer"}>
                    <h2 className="text-center mt-0">
                        Решение есть!
                    </h2>
                    <hr className="divider my-4" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img className="img-svg mb-4"
                                    src={moneySvg}
                                    alt="Деньги" />
                                <h3 className="h4 mb-2 ">
                                    Время - деньги
                                </h3>
                                <p className="text-muted mb-0">
                                    Ускорение всех безнеспроцессов в одном месте!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img className="img-svg mb-4"
                                    src={compSvg}
                                    alt="Компьютер" />
                                <h3 className="h4 mb-2">
                                    В цифре
                                </h3>
                                <p className="text-muted mb-0">
                                    90% всех операций проходит в электонном виде!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img className="img-svg mb-4"
                                    src={webSvg}
                                    alt="Интернет" />
                                <h3 className="h4 mb-2">
                                    В любой точке мира
                                </h3>
                                <p className="text-muted mb-0">
                                    База данных хранится на удаленных серверах!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <img className="img-svg mb-4"
                                    src={heartSvg}
                                    alt="Сердце" />
                                <h3 className="h4 mb-2">
                                    Сделано с любовью
                                </h3>
                                <p className="text-muted mb-0">
                                    Ведь нам никто не платит...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}