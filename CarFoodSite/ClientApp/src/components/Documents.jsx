import React, { Component } from 'react';
import { Table, Container, Row, Col } from "reactstrap";
import sampleProgImg from "./img/sampleProg.png";
import docImg1 from "./img/doc/1.png";
import docImg2 from "./img/doc/2.png";
import docImg3 from "./img/doc/3.png";
import docImg4 from "./img/doc/4.png";
import docImg5 from "./img/doc/5.png";
import docImg6 from "./img/doc/6.png";
import docImg7 from "./img/doc/7.png";
import docImg8 from "./img/doc/8.png";

export class Documents extends Component {
    static displayName = Documents.name;

    render() {
        return (
            <div className="PageAnimate">
                <section className="" id="services">
                    <div className="head-container  bg-img-3">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">
                                    Руководство пользователя.
                                </h2>
                                <hr className="divider light my-4" />
                                <div className="big-img-div pb-4">
                                    <img className="big-img"
                                        src={sampleProgImg}
                                        alt="Завправка" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="body-container bg-img-orange-white">
                        <h2 className="text-center mt-0">
                            Минимальные системные требования
                        </h2>
                        <hr className="divider my-4" />
                        <Container sm="12" md={{ size: 6, offset: 3 }} className="text-truncate overflow-auto text-wrap">
                            <Table striped >
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Название</th>
                                        <th>Описание</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>CPU</td>
                                        <td>Intel Pentium 3 или более поздней версии с поддержкой SSE2</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>RAM</td>
                                        <td>400 Mb</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Монитор</td>
                                        <td>1280x720</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Видеоадаптер</td>
                                        <td>От 100 Мб видеопамяти</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Манипуляторы</td>
                                        <td>Мышь, Клавиатура</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Сеть</td>
                                        <td>Не менее 10 Mb/s</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>ОС</td>
                                        <td>Windows Vista или более поздней версии</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>Дополнительное ПО</td>
                                        <td>Microsoft Word 2013, Microsoft Excel 2013 или более позднее</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </div>

                    <div className="body-container bg-img-orange">
                        <h2 className="text-center text-white mt-0">
                            Работа со справочными таблицами
                        </h2>
                        <hr className="light divider my-4" />
                        <Container>
                            <Row className="p-3">
                                <Col sm="4" className="text-white-75 m-auto">
                                    Осуществив переход во вкладку изменения таблиц предоставляется доступ к основным функциям БД.
                                </Col>
                                <Col sm="7" className="text-white-75">
                                    <img className="big-img" alt="Скриншот программы" src={docImg1}/>
                                </Col>
                            </Row>

                            <Row className="p-2">
                                <Col sm="7" className="text-white-75">
                                    <img className="big-img" alt="Скриншот программы" src={docImg2} />
                                </Col>
                                <Col sm="4" className="text-white-75 m-auto">
                                    После выбора рабочей таблицы появляется возможность осуществлять добавление изменение и удаление данных.
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="body-container bg-img-orange-white">
                        <h2 className="text-center mt-0">
                           Работа с операционными таблицами
                        </h2>
                        <hr className="divider my-4" />
                        <Container >
                            <Row className="p-3">
                                <Col sm="4" className="text-black-50 m-auto">
                                    Для работы с операционными таблицами есть несколько способов попасть в различные окна автоматизированных бизнес-процессов.
                                </Col>
                                <Col sm="7" className="text-black-50">
                                    <img className="big-img" alt="Скриншот программы" src={docImg3} />
                                </Col>
                            </Row>

                            <Row className="p-3" >
                                <Col sm="7" className="text-black-50">
                                    <img className="big-img" alt="Скриншот программы" src={docImg4} />
                                </Col>
                                <Col sm="4" className="text-black-50 m-auto">
                                    В окне работы с чеком, после выбора нужных параметров и нажатия на кнопку «Оформить чек», осуществляется запись в таблицу.
                                </Col>
                            </Row>

                            <Row className="p-3" >
                                <Col sm="4" className="text-black-50 m-auto">
                                    «Работа с поставками» необходима для оформления ново пришедших поставок. Выбрав товар в списке товаров 
                                    из существующих или вписав новый, можно сразу привести товары в соответствие с товарными накладными.
                                </Col>
                                <Col sm="7" className="text-black-50">
                                    <img className="big-img" alt="Скриншот программы" src={docImg5} />
                                </Col>
                                
                            </Row>

                            <Row className="p-3" >
                                <Col sm="7" className="text-black-50">
                                    <img className="big-img" alt="Скриншот программы" src={docImg6} />
                                </Col>
                                <Col sm="4" className="text-black-50 m-auto">
                                    В окне «Настройка ролей» есть возможность настроить доступ других ролей к тем или иным справочным таблицам. 
                                    Доступ к данному окну предоставляется только администратору.
                                </Col>
                            </Row>

                            <Row className="p-3" >
                                <Col sm="4" className="text-black-50 m-auto">
                                    Вывод данных осуществляется на форме автоматизаций во вкладке работа с чеком и оформление поставок.
                                </Col>
                                <Col sm="7" className="text-black-50">
                                    <img className="big-img" alt="Скриншот программы" src={docImg7} />
                                </Col>
                            </Row>

                            <Row className="p-3" >
                                <Col sm="7" className="text-black-50">
                                    <img className="big-img" alt="Скриншот программы" src={docImg8} />
                                </Col>
                                <Col sm="4" className="text-black-50 m-auto">
                                    К прочим функциям можно отнести лицензирование, которое осуществляется по методу подключения к компьютеру лицензионного флеш-накопителя.
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </div>
        );
    }
}